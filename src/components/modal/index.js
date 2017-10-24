import './_modal.scss';
import React from 'react';
import PropTypes from 'prop-types';

class Modal extends React.Component {
  render() {
    return (
      <section className='modal'>
        <div className='modal-contents'>
          {this.props.children}
        </div>
        { this.props.showClose ? <button onClick={this.props.close}>X</button> : undefined }
      </section>
    );
  }
}

Modal.propTypes = {
  children: PropTypes.object,
  close: PropTypes.func,
  showClose: PropTypes.bool
};

export default Modal;
