import React from 'react';
import PostCard from './PostCard';

export default function PostList({ posts }) {
  return (
    <div className="row">
      {posts.map((post) => (
        <div className="col-4" key={post.id}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
}
