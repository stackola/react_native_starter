import * as types from './types';

export function setSocket(socket) {
	return {
		type: types.SET_SOCKET,
		payload: socket
	}
}