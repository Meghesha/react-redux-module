import { combineReducers } from "redux";
import * as userListReducer from './userList/userList.reducer';

export const rootReducer = combineReducers({
  [userListReducer.userListFeatureKey] : userListReducer.reducer
 
});