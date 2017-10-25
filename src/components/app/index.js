import './_app.scss';
import React from 'react';
import {connect} from 'react-redux';
import {BrowserRouter, Route, Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';
import SettingsContainer from '../settings-container';
import LandingContainer from '../landing-container';
import Header from '../header';
import DemoApp from '../google-map';
import ConfButton from '../confirm-button';
import {setToken} from '../../actions/auth-actions.js';
import DashboardContainer from '../dashboard';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui//styles/baseThemes/darkBaseTheme';

const muiTheme = getMuiTheme(darkBaseTheme);


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (

      <MuiThemeProvider muiTheme={muiTheme}>
        <BrowserRouter>
          <div className='narcan'>
            <main>
              <Route exact path='*' component={Header} />
              <Route exact path='/' render={() => <Redirect from='/' to='/welcome/login' />} />
              <Route path='/welcome/:auth' component={LandingContainer} />
              <Route exact path='/settings' component={SettingsContainer} />
              <Route exact path='/locations' component={DashboardContainer} />
            </main>
            <ConfButton />
            <DemoApp />
          </div>
        </BrowserRouter>
      </MuiThemeProvider>
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

// <NarcanMap
//   containerElement={<div style={{height: '600px'}} />}
//   mapElement={<div style={{height: '100%'}} />}
//   googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDOTFGuAM5KLro5-_3oNBKzpKYLhcVXZxg&v=3.exp&libraries=geometry,drawing,places"
//   loadingElement={<div style={{ height: `100%` }} />}
// />
