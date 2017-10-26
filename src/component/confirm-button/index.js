import React from 'react';
import ConfirmButton from 'material-ui-confirm-button';

class ConfButton extends React.Component {
  render() {
    return (
      <ConfirmButton
        label="Narcan Needed!"
        confirmMessage="Confirm"
        onSubmit={() => console.log('you clicked confirm')} />
    );
  }
}

export default ConfButton;
