import React from 'react';
import PostCard from '../ui/PostCard';

export default function AllPostsPage({ posts }) {
  return (
    <div className="row">
      {posts?.map((post) => (
        <div className="col-4" key={post.id}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
}
