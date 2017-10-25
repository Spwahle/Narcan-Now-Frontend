import React from 'react';
import AuthForm from '../auth-form';
import {connect} from 'react-redux';
import * as utils from '../../lib/utils';
import {signupRequest, loginRequest} from '../../action/auth-actions';

class LandingContainer extends React.Component {
  render() {
    let {params} = this.props.match;
    let handleComplete = params.auth === 'login' ?
      this.props.login :
      this.props.signup;

    let redirect = path => this.props.history.replace(path);

    return (
      <div>
        <h2>Hello from the landing page!</h2>
        <AuthForm
          auth={params.auth}
          redirect={redirect}
          onComplete={handleComplete}/>
      </div>
    );
  }
}

let mapStateToProps = () => ({});
let mapDispatchToProps = dispatch => ({
  signup: user => dispatch(signupRequest(user)),
  login: user => dispatch(loginRequest(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LandingContainer);
