import _ from 'lodash';
import { FETCH_POSTS, FETCH_POST, CREATE_POST, DELETE_POST } from '../actions';

export default function(state = {}, action) {
	switch (action.type) {
		case DELETE_POST:
			return _.omit(state, action.payload);
		case CREATE_POST:
			return { ...state, [action.payload.data.id]: action.payload.data };
		case FETCH_POSTS:
			const newPosts = _.mapKeys(action.payload.data, 'id');
			return { ...state, ...newPosts };
		case FETCH_POST:
			// const post = action.payload.data;
			// const newState = { ...state };
			// newState[post.id] = post;
			// return newState;

			//key interpolation
			return { ...state, [action.payload.data.id]: action.payload.data };

		default:
			return state;
	}
}
