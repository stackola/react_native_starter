import * as types from './types';

export function setUserObject(user) {
	return {
		type: types.SET_USER_OBJECT,
		payload: user
	}
}
export function setUsername(username) {
	return {
		type: types.SET_USERNAME,
		payload: username
	}
}
/*async example
export function click(id){
	return (dispatch, getState) => {
		let state=getState();
		
		state.socket.socket.get('/user/click/14', function(body, jwr){
			dispatch(setUserObject(body));
		} );
	}
}

export function getUser(id) {
	return (dispatch, getState) => {
		console.log("getting user");
		let url = "http://192.168.1.138:1337/user/"+id;
		let state=getState();
		return fetch(url).then((resp) => resp.json())
			.then((respJson) => {
				console.log("got response");
				console.log(respJson);
				dispatch(setUserObject(respJson));
			}).catch((error) => console.log("error", error));
	}
}

*/