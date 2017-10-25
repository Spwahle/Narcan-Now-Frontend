import React from 'react';
import * as utils from '../../lib/utils';

class PhotoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.photo ?
      {...this.props.photo, preview: ''} :
      {description: '', preview: '', photo: null};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let {name} = e.target;
    if (name === 'description') this.setState({description: e.target.value});
    if (name === 'photo') {
      let {files} = e.target;
      let photo = files[0];
      this.setState({photo});

      utils.photoToDataUrl(photo)
        .then(preview => this.setState({preview}))
        .catch(console.error);
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onComplete(this.state)
      .then(() => this.setState({description: '', preview: '', photo: null}))
      .then(() => this.props.toggle ? this.props.toggle() : undefined);
  }

  render() {
    return (
      <form
        className="photo-form"
        onSubmit={this.handleSubmit}>

        {utils.renderIf(this.state.preview || this.state.url,
          <img src={this.state.preview || this.state.url} style={{'width': '15%'}}/>
        )}

        <input
          type="file"
          name="photo"
          onChange={this.handleChange}/>

        <input
          type="text"
          name="description"
          value={this.state.description}
          onChange={this.handleChange}/>

        <button type="submit">{this.props.buttonText}</button>
      </form>
    );
  }
}

export default PhotoForm;
