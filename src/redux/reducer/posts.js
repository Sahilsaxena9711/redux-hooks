import { POSTS_ACTIONS, STATE_STATUS } from '../../constants';
import { List } from 'immutable';
import { PostsRecord } from '../records/posts';

export const postsReducer = (state, action) => {
    const { type, payload, error } = action;
    switch (type) {
        case POSTS_ACTIONS.FETCH_POST:
            return state
                .setIn(['posts', 'status'], STATE_STATUS.FETCHING);
        case POSTS_ACTIONS.FETCHED_POST:
            return state
                .setIn(['posts', 'status'], STATE_STATUS.FETCHED)
                .setIn(['posts', 'data'], new List(payload.response.map(_ => new PostsRecord(_))));
        case POSTS_ACTIONS.FAILED_FETCH_POST:
            return state
                .setIn(['posts', 'status'], STATE_STATUS.FETCH_FAILED)
                .setIn(['posts', 'error'], error);
        default:
            return state;
    }
}