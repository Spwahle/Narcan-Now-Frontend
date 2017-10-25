import React from 'react';
import * as utils from '../../lib/utils';
import RaisedButton from 'material-ui/RaisedButton';

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

        <RaisedButton label={this.props.auth} type="submit" primary={true} />
      </form>
    );
  }
}

export default AuthForm;
