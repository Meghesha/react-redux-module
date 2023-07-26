import { combineReducers } from "redux";
import * as authCardReducer from './auth/authCard.reducer';
import * as hobbySelectorReducer from './hobby/hobby.reducer';
import * as hobbyRadioReducer from './hobby_radio/hobbyRadio.reducer';
import * as employeesReducer from './employee/employee.reducer';


export const rootReducer = combineReducers({
  [authCardReducer.authCardFeatureKey] : authCardReducer.reducer,
  [hobbySelectorReducer.HobbySelectorFeatureKey] : hobbySelectorReducer.reducer,
  [hobbyRadioReducer.hobbyRadioFeatureKey] : hobbyRadioReducer.reducer,
  [employeesReducer.employeesFeatureKey] : employeesReducer.reducer
});