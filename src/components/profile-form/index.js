import './_profile-form.scss';
import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {updateProfileRequest} from '../../actions/profile-actions.js';
import * as util from '../../lib/utilities.js';

class ProfileForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {...props.profile};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let {name, value} = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    return this.props.updateProfile(this.state);
  }

  render() {
    let {name, email, host} = this.props.profile;

    return (
      <form
        className='profile-form'
        onSubmit={this.handleSubmit} >

        <label htmlFor='name'>username:</label>
        <input
          type='text'
          name='name'
          placeholder={name}
          onChange={this.handleChange}
        />

        <label htmlFor='email'>email:</label>
        <input
          type='text'
          name='email'
          placeholder={email}
          onChange={this.handleChange}
        />

        {util.renderIf(host === false,
          <div>
            <label htmlFor='host'>Do you carry Narcan?</label>
            <input
              type='checkbox'
              name='host'
              onChange={this.handleChange}
            />
          </div>
        )}

        {util.renderIf(host,
          <div>
            <label htmlFor='host'>Would you like to stop your account?</label>
            <input
              type='checkbox'
              name='host'
              onChange={this.handleChange}
              checked
            />
          </div>
        )}

        <button>Update</button>
      </form>
    );
  }
}

ProfileForm.propTypes = {
  updateProfile: PropTypes.func,
  profile: PropTypes.object
};

let mapStateToProps = (state) => ({
  profile: state.profile
});

let mapDispatchToProps = (dispatch) => ({
  updateProfile: (profile) => dispatch(updateProfileRequest(profile))
});

export default connect (mapStateToProps, mapDispatchToProps)(ProfileForm);
