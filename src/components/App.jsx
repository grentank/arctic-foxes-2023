import React from 'react';
import Form from './Form';
import PostList from './PostList';

export default function App({ allPosts }) {
  //   console.log('props:', allPosts);
  return (
    <div className="container">
      <Form />
      <PostList posts={allPosts} />
    </div>
  );
}
