import React from 'react';
import PropTypes from 'prop-types';

class HostLotForm extends React.Component {
  constructor(props) {
    super(props);

    if (props.location) {
      this.state = props.location;
    }
    else {
      this.state = { name:  '', description: '', location: '', phone: '' };
    }

    this.handleHostLotFormChange = this.handleHostLotFormChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleHostLotFormChange(e) {
    let {name, value} = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    let location = {...this.state};
    this.props.onComplete(this.state);

  }

  render() {
    return (
      <form className='location-form'
        onSubmit={this.handleSubmit}>
        <input
          name='name'
          type='text'
          placeholder='location - name'
          value={this.state.name}
          onChange={this.handleHostLotFormChange}
        />

        <input
          name='description'
          type='text'
          placeholder='Description'
          value={this.state.description}
          onChange={this.handleHostLotFormChange}
        />

        <input
          name='address'
          type='text'
          placeholder='Lot Address'
          value={this.state.address}
          onChange={this.handleHostLotFormChange}
        />

        <button type='submit'>{this.props.buttonText}</button>
      </form>
    );
  }
}

HostLotForm.propTypes = {
  name: PropTypes.string,
  description:PropTypes.string,
  location: PropTypes.object,
  phone: PropTypes.number,
  onComplete: PropTypes.func,
  buttonText: PropTypes.string
};


export default HostLotForm;
