import './_app.scss';
import React from 'react';
import {connect} from 'react-redux';
import {BrowserRouter, Route, Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';
import SettingsContainer from '../settings-container';
import LandingContainer from '../landing-container';
import Header from '../header';
//import NarcanMap from '../google-map';
import DemoApp from '../google-map';
import MapWithADirectionsRenderer from '../google-map';
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

            <div className='info'>
              <h1> "Someone dies every 19 minutes in this country because of a drug overdose.Paramedics and firefighters routinely carry the easy-to-administer medication in their vehicles. For police officers in the nation's hardest hit areas, like southwest Ohio, the Food and Drug Administration-approved nasal spray, known by the brand name Narcan, can be as common as handcuffs. Even some librarians have learned to use the drug to revive people who overdose in their stacks. 33,000 people in 2015, more than any year on record. Nearly half of all opioid overdose deaths involve a prescription opioid. Its wholesale price in the developing world is between US$0.50 and 5.30 per dose. The vials of medication are not very expensive (less than 25 USD) in the United States. The price for a package of two auto-injectors in the US, however, has increased from $690 in 2014 to $4,500 in 2016."</h1>
            </div>
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

// <NarcanMap
//   containerElement={<div style={{height: '600px'}} />}
//   mapElement={<div style={{height: '100%'}} />}
//   googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDOTFGuAM5KLro5-_3oNBKzpKYLhcVXZxg&v=3.exp&libraries=geometry,drawing,places"
//   loadingElement={<div style={{ height: `100%` }} />}
// />
