import { counterReducer } from "./counter";
import { isloggedReducer } from "./islogged";

import {combineReducers} from 'redux';


export const allReducers=combineReducers({
    counter:counterReducer,
    isLogged:isloggedReducer
})