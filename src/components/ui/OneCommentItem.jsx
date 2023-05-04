import React from 'react';

export default function OneCommentItem({ comment, deleteHandler }) {
  return (
    <li className="list-group-item">
      <p>{comment.body}</p>
      <button onClick={() => deleteHandler(comment.id)} type="button" className="btn btn-danger">
        X
      </button>
    </li>
  );
}
