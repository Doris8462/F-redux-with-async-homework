export const setUserInfo = info => {
  // eslint-disable-line
  return {
    type: 'SET_USER_INFO',
    payload: info
  };
};

export const clearUserInfo = () => {
  // eslint-disable-line
  return {
    type: 'CLEAR_USER_INFO'
  };
}
export const logOut = () => {
  return {
    type: 'LOG_OUT'
  };
};
const fetchInfoRequest = () => {
  return {
    type: 'FETCH_INFO_REQUEST'
  };
};

const fetchInfoReceive = data => {
  return {
    type: 'FETCH_INFO_RECEIVE',
    payload: data
  };
};
export const fetchUserInfo = () => dispatch => {
  dispatch(fetchInfoRequest());
  return fetch('https://my-json-server.typicode.com/kevindongzg/demo/login')
    .then(res => res.json())
    .then(data => dispatch(fetchInfoReceive(data)));
};