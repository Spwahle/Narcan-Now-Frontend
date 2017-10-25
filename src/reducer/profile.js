let validateProfile = profile => {
  let {avatar, bio, _id, username, email} = profile;
  if(!avatar || !bio || !_id || !username || !email)
    throw new Error('VALIDATION ERROR: profile requires more fields');
  return profile;
};

export default (state=null, action) => {
  let {type, payload} = action;
  switch(type) {
  case 'TOKEN_DELETE': return null;
  case 'PROFILE_SET': return validateProfile(payload);
  case 'PROFILE_CREATE': return validateProfile(payload);
  default: return state;
  }
};
