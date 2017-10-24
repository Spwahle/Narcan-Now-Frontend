import './_navbar.scss';
import FontAwesome from 'react-fontawesome';
import React from 'react';
import {connect} from 'react-redux';
import {Link, withRouter} from 'react-router-dom';
import {setToken} from '../../actions/auth-actions.js';
import * as util from '../../lib/utilities.js';
import * as authActions from '../../actions/auth-actions.js';
import {fetchProfileRequest} from '../../actions/profile-actions.js';

import PropTypes from 'prop-types';

class Navbar extends React.Component {
  constructor(props){
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    this.props.logout();
    this.props.history.push('/welcome/login');
  }

  render() {
    return (
      <ul>
        <Link to='/search'><li><span>
          <i className='fa fa-search'></i> Search
        </span></li></Link>

        <Link to='/Narcan Needed'><li><span>
          <i className='fa fa-plus-square'></i> Narcan Needed
        </span></li></Link>

        <Link to='/find Narcan'>
          <li>
            <span>
              <i className='fa fa-calendar'></i> Narcan map
            </span>
          </li>
        </Link>

        <Link to='/settings'><li><span>
          <i className='fa fa-cog'></i> Settings
        </span></li></Link>

        <li className='logout' onClick={this.handleLogout}><span>
          <i></i> Logout
        </span></li>
      </ul>
    );
  }
}

Navbar.propTypes = {
  loggedIn: PropTypes.bool,
  logout: PropTypes.func,
  match: PropTypes.object,
  history: PropTypes.object,
  fetchProfile: PropTypes.func,
  setToken: PropTypes.func,
};

let mapStateToProps = (state) => ({
  loggedIn: !!state.auth,
  profile: state.profile,
});

let mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(authActions.logout()),
  setToken: (token) => dispatch(setToken(token)),
  fetchProfile: () => dispatch(fetchProfileRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Navbar));
