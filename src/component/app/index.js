import React from 'react';
import Navbar from '../navbar';
import {connect} from 'react-redux';
import * as utils from '../../lib/utils';
import {tokenSet} from '../../action/auth-actions';
import LandingContainer from '../landing-container';
import DashboardContainer from '../dashboard-container';
import {BrowserRouter, Route, Redirect} from 'react-router-dom';
import SettingsContainer from '../settings-container';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui//styles/baseThemes/darkBaseTheme';
import AppBar from 'material-ui/AppBar';

const muiTheme = getMuiTheme(darkBaseTheme);

class App extends React.Component {
  componentDidMount() {
    let token = utils.cookieFetch('X-Sluggram-Token');
    if (token) this.props.tokenSet(token);
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div className="application">
          <AppBar title="Photo App"/>
          <BrowserRouter>
            <div>
              <Navbar />
              <Route path="/welcome/:auth" component={LandingContainer}/>
              <Route exact path="/settings" component={() => this.props.auth ? <SettingsContainer/> : <Redirect to="/" />}/>
              <Route exact path="/" component={() => this.props.auth ? <DashboardContainer/> : <Redirect to="/" />}/>
            </div>
          </BrowserRouter>
        </div>
      </MuiThemeProvider>

    );
  }
}

let mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth,
});

let mapDispatchToProps = dispatch => ({
  tokenSet: token => dispatch(tokenSet(token)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
