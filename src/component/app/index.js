import './_app.scss';
import React from 'react';
import Navbar from '../navbar';
import {connect} from 'react-redux';
import * as utils from '../../lib/utils';
import {tokenSet} from '../../action/auth-actions';
import LandingContainer from '../landing-container';
import DashboardContainer from '../dashboard-container';
import DirectionsContainer from '../directions-container';
import AboutContainer from '../about-container';
import {BrowserRouter, Route, Redirect} from 'react-router-dom';
import SettingsContainer from '../settings-container';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import {Link} from 'react-router-dom';

const muiTheme = getMuiTheme(lightBaseTheme);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleClose() {
    this.setState({open: false});
  }

  handleToggle() {
    this.setState({open: !this.state.open});
  }

  componentDidMount() {
    let token = utils.cookieFetch('X-Sluggram-Token');
    if (token) this.props.tokenSet(token);
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div className="application">
          <div className='narcan'>
            <AppBar
              title="Narcan Now!"
              onLeftIconButtonTouchTap = { this.handleToggle.bind(this) }
            />
            <Drawer
              docked={false}
              width={200}
              open={this.state.open}
              onRequestChange={(open) => this.setState({open})}
            >
              <MenuItem onClick={ this.handleClose.bind(this) }>Menu Item 1</MenuItem>
              <MenuItem onClick={ this.handleClose.bind(this) }>Menu Item 2</MenuItem>
            </Drawer>
            <BrowserRouter>
              <div>
                <Navbar />
                <Route path="/welcome/:auth" component={LandingContainer}/>
                <Route exact path="/settings" component={() => this.props.auth ? <SettingsContainer/> : <Redirect to="/" />}/>
                <Route exact path='/learn-narcan' component={() => this.props.auth ? <AboutContainer/> : <Redirect to ="/" />}/>
                <Route exact path='/give-narcan' component={() => this.props.auth ? <DirectionsContainer/> : <Redirect to ="/" />}/>
                <Route exact path="/" component={() => this.props.auth ? <DashboardContainer/> : <Redirect to="/" />}/>
              </div>
            </BrowserRouter>
          </div>
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
