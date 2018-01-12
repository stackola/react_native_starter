//Reducers: Manages data, state
import createReducer from '../lib/createReducer';
import * as types from '../actions/types';
import {
	combineReducers
} from 'redux';


export const user = createReducer({username:"no"}, {
	[types.SET_USER_OBJECT](state, action) {
		console.log("setting user object");
		return action.payload;
	},
})