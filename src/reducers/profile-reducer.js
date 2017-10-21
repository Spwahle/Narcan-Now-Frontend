let validateProfileCreate = (profile) => {
  if(!profile.name || !profile._id || !profile.email) {
    throw new Error('VALIDATION ERROR: profile requires name and email');
  }
};

export default (state=null, action) => {
  let {type, payload} = action;

  switch (type) {
    case 'CREATE_PROFILE' :
      validateProfileCreate(payload);
      return payload;

    case 'UPDATE_PROFILE' :
      validateProfileCreate(payload);
      if(!state) throw new Error('USAGE ERROR: user must create profile first');
      validateProfileCreate(payload);
      return {...state, ...payload};

    case 'LOGOUT' :
      return null;

    default :
      return state;
  }
};
