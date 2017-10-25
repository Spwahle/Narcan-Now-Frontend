import React from 'react';
import * as utils from '../../lib/utilities';
import PropTypes from 'prop-types';

// import RaisedButton from 'material-ui/RaisedButton';

class AuthForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: '',
      usernameError: null,
      passwordError: null,
      emailError: null,
      error: null,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let {name, value} = e.target;
    this.setState({
      [name]: value,
      usernameError: name === 'username' && !value ? 'username must have a value' : null,
      emailError: name === 'email' && !value ? 'email must have a value' : null,
      passwordError: name === 'password' && !value ? 'password must have a value' : null,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onComplete({
      username: this.state.username,
      password: this.state.password,
      email: this.state.email,
    })
    // .then(() => this.setState({username: '', email: '', password: ''})) // No longer necessary given the redirect to a different view
    .then(() => this.props.redirect('/'))
    .catch(error => {
      console.error(error);
      this.setState({error});
    });
  }

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        className="auth-form">

        {utils.renderIf(this.state.usernameError,
          <span className="tooltip">{this.state.usernameError}</span>
        )}

        <input
          type="text"
          name="username"
          placeholder="username"
          value={this.state.username}
          onChange={this.handleChange}/>

        {utils.renderIf(this.state.emailError,
          <span className="tooltip">{this.state.emailError}</span>
        )}

        {utils.renderIf(this.props.auth === 'signup',
          <input
            type="email"
            name="email"
            placeholder="email"
            value={this.state.email}
            onChange={this.handleChange} />
        )}

        {utils.renderIf(this.state.passwordError,
          <span className="tooltip">{this.state.passwordError}</span>
        )}

        <input
          type="password"
          name="password"
          placeholder="password"
          value={this.state.password}
          onChange={this.handleChange}/>

        <button className='start-button' type='submit'>{this.props.auth}</button>

        {utils.renderIf(this.props.auth === 'login',
          <button className='sign-up-button' onClick={this.redirectToSignup}>New user? Sign up here.</button>
        )}

        {utils.renderIf(this.props.auth === 'signup',
          <button className='sign-up-button' onClick={this.redirectToLogin}>Returning user? Log in here.</button>
        )}
        <div className='separator'></div>

      </form>
    );
  }


//   render() {
//   return (
//     <form
//       onSubmit={this.handleSubmit}
//       className='auth-form'>
//
//       {utilities.renderIf(this.props.auth === 'signup',
//         <input
//           type='text'
//           name='email'
//           placeholder='Email'
//           value={this.state.email}
//           onChange={this.handleChange}
//         />
//       )}
//
//       <input
//         type='text'
//         name='name'
//         placeholder='Username'
//         value={this.state.name}
//         onChange={this.handleChange}
//       />
//
//       <input
//         type='password'
//         name='password'
//         placeholder='Password'
//         value={this.state.password}
//         onChange={this.handleChange}
//       />
//
//
//       <GoogleOAuth />
//     </form>
//   );
// }
}

export default AuthForm;
