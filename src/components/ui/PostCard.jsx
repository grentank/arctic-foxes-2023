import React from 'react';

export default function PostCard({ post }) {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src={post.image} className="card-img-top" alt={post.title} />
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">{post.body}</p>
        <a href={`/posts/${post.id}`} className="btn btn-primary">
          Show more
        </a>
      </div>
    </div>
  );
}
