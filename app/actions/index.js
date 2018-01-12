//import * as accountActions from './account';
//import * as offersActions from './offers';
import * as userActions from './user';
import * as socketActions from './socket';

export const ActionCreators = Object.assign({}, userActions, socketActions);