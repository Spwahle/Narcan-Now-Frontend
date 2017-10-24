import superagent from 'superagent';

export const fetchLocation = (location) => ({
  type: 'FETCH_LOCATION',
  payload: location
});

export const createLocation = (location) => ({
  type: 'CREATE_LOCATION',
  payload: location
});

export const updateLocation = (location) => ({
  type:'UPDATE_LOCATION',
  payload: location
});

export const deleteLocation = (location) => ({
  type: 'DELETE_LOCATION',
  payload: location
});

export const fetchLocationRequest = () => (dispatch, getState) => {
  let {auth} = getState();

  return superagent.get(`${__API_URL__}/location`)
  .set('Authorization', `Bearer ${auth}`)
  .then(response => {
    dispatch(fetchCars(response.body));
    return response;
  });
};

export const createLocationRequest = (location) => (dispatch,getState) => {
  let {auth} = getState();

  return superagent.post(`${__API_URL__}/location`)
  .set('Authorization', `Bearer ${auth}`)
  .send(location)
  .then(response => {
    dispatch(fetchCarsRequest());
    return response;
  });
};

export const updateLocationRequest = (location) => (dispatch, getState) => {
  let {auth} = getState();

  return superagent.put(`${__API_URL__}/location/${location._id}`)
  .set('Authorization', `Bearer ${auth}`)
  .send(location)
  .then(response => {
    dispatch(updateLocation(response.body));
    return response;
  });
};

export const deleteLocationRequest = (location) => (dispatch, getState) => {
  let {auth} = getState();

  return superagent.delete(`${__API_URL__}/location/${location._id}`)
  .set('Authorization', `Bearer ${auth}`)
  .then(response => {
    dispatch(deleteLocation(location));
    return response;
  });
};
