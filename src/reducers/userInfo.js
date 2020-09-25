const fetchUserInfo = (
  state = {
    isFetching: false,
    data: null,
    isLoggedin: false
  },
  action
) => {
  if (action.type === 'FETCH_INFO_REQUEST') {
    return { ...state, isFetching: true };
  }
  if (action.type === 'FETCH_INFO_RECEIVE') {
    return { ...state, isFetching: false, data: action.payload, isLoggedin: true };
  }
  if (action.type === 'LOG_OUT') {
    return { ...state, isLoggedin: false };
  }
  return state;
};

export default fetchUserInfo;