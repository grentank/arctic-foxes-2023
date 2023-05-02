import React from 'react';
import { useParams } from 'react-router-dom';

export default function OnePostPage({ onePost }) {
  const params = useParams();
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">{`${params.postId}. ${onePost.title}`}</h5>
        <p className="card-text">{onePost.body}</p>
        <p className="card-text">
          <small className="text-body-secondary">{onePost.createdAt.toLocaleString()}</small>
        </p>
      </div>
      <img src={onePost.image} className="card-img-top" alt="..." />
    </div>
  );
}
