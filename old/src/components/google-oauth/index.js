import './_google-oauth.scss';
import React from 'react';


class GoogleOAuth extends React.Component {
  render() {
    let AUTH_URL = 'https://accounts.google.com/o/oauth2/v2/auth';
    let clientIDQuery = `client_id=${__GOOGLE_CLIENT_ID__}`;
    let responseTypeQuery = 'response_type=code';
    let scopeQuery = 'scope=openid%20profile%20email';
    let promptQuery = 'prompt=consent';
    let redirectURIQuery = `redirect_uri=${__GOOGLE_REDIRECT_URI__}`;
    let formattedURI = `${AUTH_URL}?${clientIDQuery}&${responseTypeQuery}&${scopeQuery}&${promptQuery}&${redirectURIQuery}`;

    return (
      <a className='google-oauth' href={formattedURI}>
        <p>Sign in with Google</p>
      </a>
    );
  }
}

export default GoogleOAuth;
