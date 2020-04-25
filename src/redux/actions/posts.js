import { POSTS_ACTIONS } from '../../constants';

export const fetchPosts = (dispatch) => {
    return dispatch({
        type: POSTS_ACTIONS.FETCH_POST
    });
}

export const fetchedPosts = (dispatch, response) => {
    return dispatch({
        type: POSTS_ACTIONS.FETCHED_POST,
        payload: {
            response
        }
    });
}

export const failedFetchPosts = (dispatch, error) => {
    return dispatch({
        type: POSTS_ACTIONS.FAILED_FETCH_POST,
        error
    });
}