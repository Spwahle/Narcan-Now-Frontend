import './_settings.scss';
import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import * as util from '../../lib/utilities.js';
import {createCarRequest, fetchLocationRequest} from '../../actions/location-actions.js';
import ProfileForm from '../profile-form';
// import LocationForm from '../location-form';
// import LocationItem from '../location-item';

class SettingsContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchLocation()
    .catch(util.logError);
  }

  render() {
    return (
      <div className='settings-container'>
        <div className='settings-content'>
          <h2><i className='fa fa-cog'></i> Settings</h2>
          <h3><i className='fa fa-id-card-o'></i> Update your profile</h3>
          <ProfileForm />

          <h3>Add a home address</h3>
          <SignUp-Form
            buttonText='Add'
            onComplete={location => {
              return this.props.createLocation(location)
              .catch(console.error);
            }}
          />

          <div className='location-list'>
            <h3><i className='fa fa-home'></i> Your saved addresses</h3>
            <ul>
              {this.props.profile.location.map((location, index) =>
                <li key={index}>
                  <locationItem location={location} />
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

SettingsContainer.propTypes = {
  profile: PropTypes.object,
  createLocation: PropTypes.func,
  fetchLocation: PropTypes.func
};

let mapStateToProps = (state) => ({
  profile: state.profile
});

let mapDispatchToProps = (dispatch) => ({
  createLocation: (location) => dispatch(createCarRequest(location)),
  fetchLocation: () => dispatch(fetchLocationRequest())
});

export default connect(mapStateToProps, mapDispatchToProps)(SettingsContainer);
