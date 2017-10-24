import './_dashboard.scss';
import React from 'react';
import {connect} from 'react-redux';
import * as util from '../../lib/utilities.js';
import PropTypes from 'prop-types';
import {fetchUserLocations, createLocationRequest} from '../../actions/location-actions.js';
import LocationForm from '../location-form';
import ConfirmButton from 'material-ui-confirm-button';
import Delete from 'material-ui/svg-icons/action/delete';

// import LocationItem from '../location-item';

class DashboardContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchUserLocations()
    .catch(util.logError);
  }

  render() {
    return (
      <div>
        <div className='host-dashboard'>
          <div className='host-content'>
            <h2><i className='fa fa-plus-square'></i> Locations</h2>
            <h4>Find Emergency Narcan Now!</h4>
            <ConfirmButton icon={<Delete />}
              confirmMessage="Delete"
              onSubmit={() => this.props.deleteModel()} />
            <LocationForm
              buttonText='Add a new Location'
              onComplete={(location) => {
                return this.props.createLocation(location)
                .catch(console.error);
              }}
            />
          </div>
          <ul>
            {this.props.location.map((location, index) =>
              <li className='location-li'key={index}>
                <LocationItem lot={location} />
              </li>
            )}
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    location: state.hostLocation,
  };
};

const mapDispatchToProps = (dispatch, getState) => {
  return {
    fetchLocation: () => dispatch(fetchUserLocations()),
    createLocation: (location) => dispatch(createLocationRequest(location))
  };
};

DashboardContainer.propTypes = {
  location: PropTypes.array,
  createLocation: PropTypes.func,
  fetchLocation: PropTypes.func
};


export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
