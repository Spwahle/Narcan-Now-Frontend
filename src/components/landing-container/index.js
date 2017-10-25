import './_landing-container.scss';
import React from 'react';
import {connect} from 'react-redux';
import AuthForm from '../auth-form';
import * as utilities from '../../lib/utilities.js';
import {signupRequest, loginRequest, setToken} from '../../actions/auth-actions.js';
import {fetchProfileRequest} from '../../actions/profile-actions.js';
import PropTypes from 'prop-types';

class LandingContainer extends React.Component {
  constructor(props) {
    super(props);

    this.validateRoute = this.validateRoute.bind(this);
  }

  componentDidMount() {
    this.validateRoute(this.props);
    let header = document.getElementsByTagName('header')[0];
    header.classList.add('hidden');
    console.log('components didmount landing');
  }

  componentWillUnmount() {
    let header = document.getElementsByTagName('header')[0];
    header.classList.remove('hidden');
    console.log('components mounting landing');

  }

  validateRoute(props) {
    let {history} = props;
    let token = utilities.readCookie('X-Parkify-Token');
    console.log('routes validated landing');


    if (token)
    {
      if (!this.props.auth) {
        this.props.setToken(token);
      }

      history.replace('/search');
    }
  }

  render() {
    let {params} = this.props.match;

    let handleComplete = params.auth === 'login'
      ? this.props.login
      : this.props.signup;

    return (
      <div className='landing-container'>
        <div id='title-container'>
          <h1 id='title'>Narcan Now</h1>
        </div>
        <AuthForm
          auth={params.auth}
          onComplete={handleComplete}
        />
      </div>
    );
  }
}

LandingContainer.propTypes = {
  auth: PropTypes.string,
  profile: PropTypes.object,
  history: PropTypes.object,
  fetchProfile: PropTypes.func,
  login: PropTypes.func,
  signup: PropTypes.func,
  match: PropTypes.object,
  setToken: PropTypes.func
};

let mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile
});

let mapDispatchToProps = (dispatch) => {
  return {
    setToken: (token) => dispatch(setToken(token)),
    signup: (user) => dispatch(signupRequest(user)),
    login: (user) => dispatch(loginRequest(user)),
    fetchProfile: () => dispatch(fetchProfileRequest())

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LandingContainer);
