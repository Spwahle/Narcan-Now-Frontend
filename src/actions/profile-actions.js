import superagent from 'superagent';

export const createProfile = (profile) => ({
  type: 'CREATE_PROFILE',
  payload: profile
});

export const updateProfile = (profile) => ({
  type: 'UPDATE_PROFILE',
  payload: profile
});

export const createProfileRequest = (profile) => (dispatch, getState) => {
  let {auth} = getState();
  return superagent.post(`${__API_URL__}/profile`)
  .set('Authorization', `Bearer ${auth}`)
  .send(profile)
  .then( response => {
    dispatch(createProfile(response.body));
    return response;
  });
};

export const updateProfileRequest = (profile) => (dispatch, getState) => {
  let {auth} = getState();
  return superagent.put(`${__API_URL__}/profile`)
  .set('Authorization', `Bearer ${auth}`)
  .send(profile)
  .then( response => {
    dispatch(updateProfile(response.body));
    return response;
  });
};

export const fetchProfileRequest = () => (dispatch, getState) => {
  let {auth} = getState();
  return superagent.get(`${__API_URL__}/profile`)
  .set('Authorization', `Bearer ${auth}`)
  .then( response => {
    dispatch(createProfile(response.body));
    return response;
  });
};
