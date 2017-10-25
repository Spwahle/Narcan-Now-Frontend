export default store => next => action => {
  console.log('hello from thunk middleware!', action);
  return typeof action === 'function'
    ? action(store.dispatch, store.getState)
    : next(action);
};
