import './_auth-form.scss';
import React from 'react';
import * as utilities from '../../lib/utilities.js';
import PropTypes from 'prop-types';
import GoogleOAuth from '../google-oauth';
import {withRouter} from 'react-router-dom';

class AuthForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      password: '',
      email: '',
      nameError: null,
      passwordError: null,
      emailError: null,
      error: null
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.redirectToSignup = this.redirectToSignup.bind(this);
    this.redirectToLogin = this.redirectToLogin.bind(this);
  }

  handleChange(e) {
    let {name, value} = e.target;

    this.setState({
      [name]: value,
      nameError: name === 'name' && !value ? 'username required' : null,
      passwordError: name === 'password' && !value ? 'password required' : null,
      emailError: name === 'email' && !value ? 'email required' : null
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onComplete(this.state)
    .then(() => {
      this.setState({ name: '', password: '', email: '' });
      this.props.history.replace('/search');
    })
    .catch( error => {
      console.error(error);
      this.setState({error});
    });
  }

  redirectToSignup(e) {
    e.preventDefault();
    this.props.history.push('/welcome/signup');
  }

  redirectToLogin(e) {
    e.preventDefault();
    this.props.history.push('/welcome/login');
  }

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        className='auth-form'>

        {utilities.renderIf(this.props.auth === 'signup',
          <input
            type='text'
            name='email'
            placeholder='Email'
            value={this.state.email}
            onChange={this.handleChange}
          />
        )}

        <input
          type='text'
          name='name'
          placeholder='Username'
          value={this.state.name}
          onChange={this.handleChange}
        />

        <input
          type='password'
          name='password'
          placeholder='Password'
          value={this.state.password}
          onChange={this.handleChange}
        />

        <button className='start-button' type='submit'>{this.props.auth}</button>

        {utilities.renderIf(this.props.auth === 'login',
          <button className='sign-up-button' onClick={this.redirectToSignup}>New user? Sign up here.</button>
        )}

        {utilities.renderIf(this.props.auth === 'signup',
          <button className='sign-up-button' onClick={this.redirectToLogin}>Returning user? Log in here.</button>
        )}
        <div className='separator'></div>

        <GoogleOAuth />
      </form>
    );
  }
}

AuthForm.propTypes = {
  auth: PropTypes.string,
  onComplete: PropTypes.func,
  history: PropTypes.object
};

export default withRouter(AuthForm);
