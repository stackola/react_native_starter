//Reducers: Manages data, state
import createReducer from '../lib/createReducer';
import * as types from '../actions/types';
import {
	combineReducers
} from 'redux';

export const socket = createReducer({}, {
	[types.SET_SOCKET](state, action) {
		console.log("setting user object");
		return action.payload;
	},
})