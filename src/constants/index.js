import keyMirror from 'key-mirror';

export const POSTS_ACTIONS = new keyMirror({
    FETCH_POST: null,
    FETCHED_POST: null,
    FAILED_FETCH_POST: null
});

export const STATE_STATUS = new keyMirror({
    FETCHING: null,
    FETCHED: null,
    FETCH_FAILED: null,
    UPDATING: null,
    UPDATED: null,
    UPDATE_FAILED: null
})