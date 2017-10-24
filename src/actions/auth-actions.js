import superagent from 'superagent';
import * as util from '../lib/utilities.js';

export const setToken = (token) => ({
  type: 'SET_TOKEN',
  payload: token
});

export const logout = () => {
  util.deleteCookie('X-Narcan-Token');
  return { type: 'LOGOUT' };
};

export const signupRequest = (user) => (dispatch) => {
  return superagent.post(`${__API_URL__}/api/signup`)
  .withCredentials()
  .send(user)
  .then( response => {
    dispatch(setToken(response.text));
    try {
      localStorage.token = response.text;
    } catch (error) {
      console.log(error);
    }
    return response;
  });
};

export const loginRequest = (user) => (dispatch) => {
  return superagent.get(`${__API_URL__}/api/signin`)
  .withCredentials()
  .auth(user.name, user.password)
  .then(response => {
    dispatch(setToken(response.text));
    return response;
  });
};
