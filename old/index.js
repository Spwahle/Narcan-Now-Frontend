import './_app.scss';
import React from 'react';
import {connect} from 'react-redux';
import {BrowserRouter, Route, Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';
import * as utils from '../../lib/utils';
import SettingsContainer from '../settings-container';
import LandingContainer from '../landing-container';
import Header from '../header';
import DemoApp from '../google-map';
import ConfButton from '../confirm-button';
import {setToken} from '../../actions/auth-actions.js';
import {userFetchRequest} from '../../action/auth-actions';
// import {postFetchAllRequest} from '../../action/post-actions';
import DashboardContainer from '../dashboard-container';
import HomeContainer from '../home-container';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui//styles/baseThemes/darkBaseTheme';

const muiTheme = getMuiTheme(darkBaseTheme);


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    let token = JSON.parse(localStorage.getItem('reduxPersist:auth'));
    if(token) {
      this.props.tokenSet(token)
        .then(() => this.props.userFetch())
        .then(() => this.props.postFetch())
        .catch(console.error);
    }
  }


  render() {
    return (

      <MuiThemeProvider muiTheme={muiTheme}>
        <BrowserRouter>
          <div className='app'>
            <Navbar
              user={this.props.user}/>
            {utils.renderIf(!this.props.auth,
              <HomeContainer />
            )}
            <main>
              <Route exact path='*' component={Header} />
              <Route exact path='/' render={() => <Redirect from='/' to='/welcome/login' />}/>
              <Route path='/welcome/:auth' component={LandingContainer}/>
              <Route exact path="/home" component={() => this.props.auth ? <DashboardContainer/> : <Redirect to="/home" />}/>
              <Route exact path="/settings" component={() => this.props.auth ? <SettingsContainer/> : <Redirect to="/home" />}/>
              <Route exact path='/locations' component={() => this.props.auth ? <DashboardContainer/> : <Redirect to="/home"/>} />
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
  profile: state.profile,
});

let mapDispatchToProps = (dispatch) => ({
  setToken: (token) => dispatch(setToken(token)),
  userFetch: () => dispatch(userFetchRequest()),
  postFetch: () => dispatch(postFetchAllRequest()),
});

App.propTypes = {
  profile: PropTypes.object,
  token: PropTypes.string,
  setToken: PropTypes.func,
  fetchProfile: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

//test


// <NarcanMap
//   containerElement={<div style={{height: '600px'}} />}
//   mapElement={<div style={{height: '100%'}} />}
//   googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDOTFGuAM5KLro5-_3oNBKzpKYLhcVXZxg&v=3.exp&libraries=geometry,drawing,places"
//   loadingElement={<div style={{ height: `100%` }} />}
// />
