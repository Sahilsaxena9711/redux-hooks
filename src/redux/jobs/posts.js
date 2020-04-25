import * as PostActions from '../actions/posts';
import * as PostService from '../../services/posts';

export const fetchPosts = async (dispatch) => {
    try {
        PostActions.fetchPosts(dispatch);
        const { data } = await PostService.getPosts();
        PostActions.fetchedPosts(dispatch, data);
        return;
    } catch (e) {
        PostActions.failedFetchPosts(dispatch, e.message);
    }
} 