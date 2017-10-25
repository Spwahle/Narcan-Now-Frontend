import {combineReducers} from 'redux';
import authReducer from './auth-reducer.js';
import profileReducer from './profile-reducer.js';
import locationReducer from './location-reducer';


export default combineReducers({
  auth: authReducer,
  profile: profileReducer,
  location: locationReducer,
});
