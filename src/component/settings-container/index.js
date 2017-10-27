import './_settings-container.scss';

import React from 'react';
import {connect} from 'react-redux';
import * as utils from '../../lib/utils';
import ProfileForm from '../profile-form';
import {profileFetchRequest, profileCreateRequest} from '../../action/profile-actions';

class SettingsContainer extends React.Component {
  componentWillMount() {
    // if the user account has a profile, set it as this.props.profile
    if (!this.props.profile) this.props.profileFetch();
  }

  render() {
    return (
      <div className="settings-container">
        {this.props.auth && !this.props.profile ?
          <div className="profile-form-container">
            <h2>Create your profile!</h2>
            <ProfileForm
              buttonText="create"
              onComplete={this.props.profileCreate}/>
          </div>
          :
          undefined
        }

        {this.props.auth && this.props.profile ?
          <div className="profile-container">
            <h2>Username: { this.props.profile.username }</h2>
            <img src={ this.props.profile.avatar } style={{width: '10%', border: '1px solid grey'}}/>
            <h2>Bio: { this.props.profile.bio }</h2>
          </div>
          :
          undefined
        }
      </div>
    );
  }
}

let mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth,
});

let mapDispatchToProps = dispatch => ({
  profileCreate: profile => dispatch(profileCreateRequest(profile)),
  profileFetch: () => dispatch(profileFetchRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SettingsContainer);
