import React from 'react';

export default function PostCard({ post }) {
  const styles = { width: '18rem' };
  return (
    <div className="card" style={styles}>
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <h6 className="card-subtitle mb-2 text-body-secondary">
          {post.createdAt.toLocaleString()}
        </h6>
        <p className="card-text">{post.body}</p>
        <a href={`/delete/${post.id}`} className="card-link">
          Delete
        </a>
      </div>
    </div>
  );
}
