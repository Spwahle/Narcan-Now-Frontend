import React from 'react';
import * as utils from '../../lib/utils';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {tokenDeleteRequest} from '../../action/auth-actions';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';


class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {open: false};

    this.handleClose = this.handleClose.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleClose() {
    this.setState({open: false});
  }

  handleToggle() {
    this.setState({open: !this.state.open});
  }

  handleLogout() {
    this.handleClose();
    this.props.tokenDelete();
  }

  render() {
    return (
      <header>
        <AppBar
          title="Narcan Now!"
          onLeftIconButtonTouchTap = { this.handleToggle }
        />
        <Drawer
          docked={false}
          width={200}
          open={ this.state.open }
          onRequestChange={(open) => this.setState({open})}
        >
          {utils.renderIf(this.props.auth,
            <div>
              <MenuItem onClick={ this.handleClose }><Link to="/learn-narcan">Learn About Narcan</Link></MenuItem>
              <MenuItem onClick={ this.handleClose }><Link to="/give-narcan">How to Give Narcan</Link></MenuItem>
              <MenuItem onClick={ this.handleClose }><Link to="/settings">Settings</Link></MenuItem>
              <MenuItem onClick={ this.handleClose }><Link to="/">Dashboard</Link></MenuItem>
              <MenuItem onClick={ this.handleLogout }><Link to="/">Logout</Link></MenuItem>
            </div>
          )}
          {utils.renderIf(!this.props.auth,
            <div>
              <MenuItem onClick={ this.handleClose }><Link to="/welcome/signup">Signup</Link></MenuItem>
              <MenuItem onClick={ this.handleClose }><Link to="/welcome/login">Login</Link></MenuItem>
            </div>
          )}
        </Drawer>

        {this.props.auth && this.props.profile ?
          <div className="profile-header">
            <h2>Welcome { this.props.profile.username }</h2>
            <img src={ this.props.profile.avatar } style={{width: '10%', border: '1px solid grey'}}/>
          </div>
          :
          undefined
        }
      </header >
    );
  }
}

let mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile,
});

let mapDispatchToProps = dispatch => ({
  tokenDelete: () => dispatch(tokenDeleteRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
