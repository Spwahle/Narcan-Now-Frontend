import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import AppBar from 'material-ui/AppBar';
import LeftDrawer from './LeftDrawer.jsx';


class MatApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleTouchMap() {
    this.setState({open: !this.state.open});
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
       <div>
        <AppBar
          title = { "Test 1" }
          onLeftIconButtonTouchTap = { this.handleTouchMap.bind(this) }
        />
        <LeftDrawer open={this.state.open} />
       </div>
      </MuiThemeProvider>
    );
  }
}
export default App;
