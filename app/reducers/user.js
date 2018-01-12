//Reducers: Manages data, state
import createReducer from '../lib/createReducer';
import * as types from '../actions/types';
import {
	combineReducers
} from 'redux';


export const user = createReducer({username:"Peter"}, {
	[types.SET_USER_OBJECT](state, action) {
		console.log("setting user object");
		return action.payload;
	},
	[types.SET_USERNAME](state, action) {
		console.log("setting username");
		return {...state, username: action.payload};
	}
})