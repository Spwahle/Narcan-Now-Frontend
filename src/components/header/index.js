import './_header.scss';
// import FontAwesome from 'react-fontawesome';
import React from 'react';
import Navbar from '../navbar';
import {connect} from 'react-redux';
import Modal from '../modal';
import {logout} from '../../actions/auth-actions.js';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.toggleNav = this.toggleNav.bind(this);
    this.state = {
      navOpen: false
    };
  }

  toggleNav() {
    let navState = !this.state.navOpen;
    this.setState({
      navOpen: navState
    });
  }

  render() {
    return (
      <header className='header'>
        <button onClick={this.toggleNav}>
          <i className='fa fa-bars'></i>
        </button>
        <div id='header-title-container'>
          <h3 id='header-title'>Narcan Now</h3>
        </div>
        <nav onClick={this.toggleNav}>
          {this.state.navOpen ? <Modal showClose={false}><Navbar /></Modal> : undefined}
        </nav>
      </header>
    );
  }
}

let mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
});

export default connect(undefined, mapDispatchToProps)(Header);
