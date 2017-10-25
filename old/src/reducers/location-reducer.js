export default (state=[], action) => {
  let {type, payload} = action;

  switch(type) {
    case 'FETCH_LOCATION':
      return payload;

    case 'CREATE_LOCATION':
      return [payload, ...state];

    case 'UPDATE_LOCATION':
      return state.map(lot => lot._id === payload._id ? payload : lot);

    case 'DELETE_LOCATION':
      return state.filter(lot => lot._id !== payload._id);

    default: return state;
  }
};
