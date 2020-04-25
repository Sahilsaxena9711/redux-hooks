import React, { useReducer } from 'react';
import { Map } from 'immutable';

import Posts from './components/Posts';
import { Store } from './context';
import { postsReducer } from './redux/reducer/posts';

const postInitialState = new Map({});

const App = () => {
  const [posts, dispatchPosts] = useReducer(postsReducer, postInitialState);
  return (
    <Store.Provider
      value={{
        posts,
        dispatchPosts
      }}
    >
      <Posts />
    </Store.Provider>
  );
}

export default App;