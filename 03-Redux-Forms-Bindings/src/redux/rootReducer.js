import { combineReducers } from "redux";
import * as userRegisterReducer from './user/userRegister.reducer';



export const rootReducer = combineReducers({
  [userRegisterReducer.userRegisterFeatureKey] : userRegisterReducer.reducer,

});