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
  constructor(props) {
    super(props);
    this.state = {
      userLat: 47.260058,
      userLong: -122.455404,
    };
    // this.state = this.props.photo ?
    //   {...this.props.photo, preview: ''} :
    //   {description: '', preview: '', photo: null};

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    if(!this.props.photos.length) this.props.photosFetch();
    if (!this.props.profile) this.props.profileFetch();
  }

  handleSubmit() {
    //e.preventDefault();
    console.log('you clicked confirm');
    //let userLat, userLong;
    navigator.geolocation.getCurrentPosition((position) => {
      this.setState({userLat: position.coords.latitude, userLong: position.coords.longitude});
      // userLat = position.coords.latitude;
      // userLong = position.coords.longitude;
      // console.log('lat:', userLat, 'long:', userLong);
      // console.log(position);
      // return position;
    });
    //console.log(userLoc);
    console.log('lat:', this.state.userLat, 'long:', this.state.userLong);
    // this.props.onComplete(this.state)
    //   .then(() => this.setState({description: '', preview: '', photo: null}))
    //   .then(() => this.props.toggle ? this.props.toggle() : undefined);
  }

  render() {
    return (
      <div className='dashboard-container'>
        <h1>hi im the dashboard!</h1>
        <h2>Narcan Now! Click button to trigger Narcan alert!</h2>
        <ConfirmButton
          label="Narcan Needed!"
          confirmMessage="Confirm"
          onSubmit={this.handleSubmit} />
        <MapWithRoute
          userLat={this.state.userLat}
          userLong={this.state.userLong}
        />
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
