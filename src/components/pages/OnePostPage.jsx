import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import AddComentForm from '../ui/AddComentForm';
import CommentList from '../ui/CommentList';

export default function OnePostPage({ onePost }) {
  const [comments, setComments] = useState(onePost.Comments);
  const params = useParams();

  const submitHandler = async (event, formData) => {
    event.preventDefault();
    // const formData = Object.fromEntries(new FormData(event.target));
    const res = await fetch('/api/comments', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...formData, postId: onePost.id }),
    });
    const newComment = await res.json();
    setComments((prev) => [newComment, ...prev]);
  };

  const deleteHandler = async (commentId) => {
    const res = await fetch(`/api/comments/${commentId}`, {
      method: 'DELETE',
    });
    if (res.status === 200) {
      setComments((prev) => prev.filter((comment) => comment.id !== commentId));
    }
  };

  return (
    <>
      <div className="row">
        <div className="card mb-3">
          <div className="card-body">
            <h5 className="card-title">{`${params.postId}. ${onePost.title}`}</h5>
            <p className="card-text">{onePost.body}</p>
            <p className="card-text">
              <small className="text-body-secondary">
                Тут была дата =(((((
              </small>
            </p>
          </div>
          <img src={onePost.image} className="card-img-top" alt="..." />
        </div>
      </div>
      <div className="row">
        <AddComentForm submitHandler={submitHandler} />
      </div>
      <div className="row">
        <CommentList comments={comments} deleteHandler={deleteHandler} />
      </div>
    </>
  );
}
