import { combineReducers } from "redux";
import * as contactAppReducer from './contactApp/contactApp.reducer';

export const rootReducer = combineReducers({
    [contactAppReducer.contactAppFeatureKey] : contactAppReducer.reducer
});