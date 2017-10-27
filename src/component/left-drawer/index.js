import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';


class LeftDrawer extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Drawer open={this.props.open}>
          <MenuItem>Menu Item</MenuItem>
          <MenuItem>Menu Item 2</MenuItem>
        </Drawer>
      </div>
    );
  }
}
export default LeftDrawer;
