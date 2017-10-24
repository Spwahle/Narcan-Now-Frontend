import './_app.scss';
import React from 'react';
import {connect} from 'react-redux';
import {BrowserRouter, Route, Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';
import SettingsContainer from '../settings-container';
import LandingContainer from '../landing-container';
import Header from '../header';
import {setToken} from '../../actions/auth-actions.js';
import DashboardContainer from '../dashboard';


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
        <div className='narcan'>
          <main>
            <Route exact path='*' component={Header} />
            <Route exact path='/' render={() => <Redirect from='/' to='/welcome/login' />} />
            <Route path='/welcome/:auth' component={LandingContainer} />
            <Route exact path='/settings' component={SettingsContainer} />
            <Route exact path='/locations' component={DashboardContainer} />
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

let mapStateToProps = (state) => ({
  token: state.auth,
  profile: state.profile
});

let mapDispatchToProps = (dispatch) => ({
  setToken: (token) => dispatch(setToken(token))
});

App.propTypes = {
  profile: PropTypes.object,
  token: PropTypes.string,
  setToken: PropTypes.func,
  fetchProfile: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
