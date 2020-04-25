import React, { useContext, useEffect } from 'react';
import { Store } from '../context';
import * as PostJob from '../redux/jobs/posts';
import { STATE_STATUS } from '../constants';

const Posts = () => {
    const {
        posts,
        dispatchPosts
    } = useContext(Store);

    useEffect(() => {
        PostJob.fetchPosts(dispatchPosts)
    }, [dispatchPosts]);

    if (posts.getIn(['posts', 'status']) === STATE_STATUS.FETCHING) {
        return <p>loading...</p>
    } else if (posts.getIn(['posts', 'status']) === STATE_STATUS.FETCHED) {
        return posts.getIn(['posts', 'data']).map((_, k) =>
            <React.Fragment key={k}>
                <h4>Title: {_.title}</h4>
                <span>
                    Body: {_.body}
                </span>
            </React.Fragment>
        )
    } else {
        return <p>unable to fetch data</p>
    }
}

export default Posts;
