import {combineReducers} from 'redux';
import authReducer from './auth-reducer.js';
import profileReducer from './profile-reducer.js';


export default combineReducers({
  auth: authReducer,
  profile: profileReducer,
});
