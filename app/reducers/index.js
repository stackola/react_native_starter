import {combineReducers} from 'redux';
//import * as accountReducer from './account';
//import * as offersReducer from './offers';
import * as userReducer from './user';
import * as socketReducer from './socket';
//import * as shopReducer from './shop';



export default combineReducers(Object.assign({}, userReducer, socketReducer));