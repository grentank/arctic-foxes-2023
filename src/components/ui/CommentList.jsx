import React from 'react';
import OneCommentItem from './OneCommentItem';

export default function CommentList({ comments, deleteHandler }) {
  return (
    <ul className="list-group">
      {comments.map((comment) => (
        <OneCommentItem comment={comment} key={comment.id} deleteHandler={deleteHandler} />
      ))}
    </ul>
  );
}
