import { combineReducers } from "redux";
import * as pizzaReducer from './pizzaHut/pizzaHut.reducer';

export const rootReducer = combineReducers({
    [pizzaReducer.pizzaHutFeatureKey] : pizzaReducer.reducer
});