import { combineReducers} from "redux";

import { positionReducer } from "./positions/position-reducer";
import { filterReducer } from './filter/filters-reducer';

export const rootReducer = combineReducers({
    filters: filterReducer,
    positions: positionReducer,

});
