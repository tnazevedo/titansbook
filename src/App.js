import React from 'react';

import Header from './components/header/Header';
import PostList from './components/postList/PostList';
import Post from './components/post/Post';

function App(){
  return (
    <>
      <Header/>
      <PostList>
        <Post/>
      </PostList>
      </>
  );
}


export default App;
