import {combineReducers} from 'redux';
import auth from './auth';
import profile from './profile';
import photos from './photo';

export default combineReducers({
  auth,
  profile,
  photos,
});
