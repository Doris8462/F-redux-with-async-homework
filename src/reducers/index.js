import { combineReducers } from 'redux';
import fetchUserInfo from './userInfo';

const reducers = combineReducers({
  fetchUserInfo
});

export default reducers;
