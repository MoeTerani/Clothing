import { combinedReducers } from 'redux';
import userReducer from './user/user-reducer';

export default combinedReducers({
  user: userReducer
});
