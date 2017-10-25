import React from 'react';
import * as utils from '../../lib/utils';
import {connect} from 'react-redux';
import PhotoForm from '../photo-form';
import {photoUpdateRequest, photoDeleteRequest} from '../../action/photo-actions';

class PhotoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
    };

    this.toggleEdit = this.toggleEdit.bind(this);
  }

  toggleEdit() {
    this.setState({editing: !this.state.editing});
  }

  render() {
    let {photo} = this.props;

    return (
      <div className="photo-item">
        <i onClick={() => this.props.photoDelete(photo)}>X</i>
        <i onClick={this.toggleEdit}>Edit</i>
        {utils.renderIf(!this.state.editing,
          <div>
            <img src={photo.url} style={{'width': '25%'}}/>
            <p>{photo.description}</p>
          </div>
        )}

        {utils.renderIf(this.state.editing,
          <PhotoForm
            buttonText="update"
            photo={photo}
            toggle={this.toggleEdit}
            onComplete={this.props.photoUpdate}/>
        )}
      </div>
    );
  }
}

let mapStateToProps = state => ({});

let mapDispatchToProps = dispatch => ({
  photoUpdate: photo => dispatch(photoUpdateRequest(photo)),
  photoDelete: photo => dispatch(photoDeleteRequest(photo)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PhotoItem);
