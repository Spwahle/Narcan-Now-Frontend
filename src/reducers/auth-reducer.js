export default (state = null, action) => {
  let { type, payload } = action;

  switch (type) {
    case 'SET_TOKEN':
      return payload;

    case 'DELETE_TOKEN':
      return null;

    default:
      return state;
  }
};
