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
        {utils.renderIf(this.props.auth && !this.props.profile,
          <div className="profile-form-container">
            <h2>Create your profile!</h2>
            <ProfileForm
              buttonText="create"
              onComplete={this.props.profileCreate}/>
          </div>
        )}
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
