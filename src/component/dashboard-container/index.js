import React from 'react';
import {connect} from 'react-redux';
import * as utils from '../../lib/utils';
import PhotoForm from '../photo-form';
import PhotoItem from '../photo-item';
import {profileFetchRequest} from '../../action/profile-actions';
import {photoCreateRequest, photosFetchRequest} from '../../action/photo-actions';
//import ConfButton from '../confirm-button';
import MapWithRoute from '../map-with-route';
import MapWithMarkers from '../map-with-markers';
import ConfirmButton from 'material-ui-confirm-button';

class DashboardContainer extends React.Component {
  componentWillMount() {
    if(!this.props.photos.length) this.props.photosFetch();
    if (!this.props.profile) this.props.profileFetch();
  }

  render() {
    return (
      <div className='dashboard-container'>
        <h2>Narcan Now! Click button to trigger Narcan alert!</h2>
        <ConfirmButton
          label="Narcan Needed!"
          confirmMessage="Confirm"
          onSubmit={() => console.log('you clicked confirm')} />
        <MapWithRoute />
        <MapWithMarkers />

      </div>
    );
  }
}

let mapStateToProps = state => ({
  profile: state.profile,
  photos: state.photos,
});

let mapDispatchToProps = dispatch => ({
  photosFetch: () => dispatch(photosFetchRequest()),
  photoCreate: (photo) => dispatch(photoCreateRequest(photo)),
  profileFetch: () => dispatch(profileFetchRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
