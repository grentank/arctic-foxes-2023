import React from 'react';

export default function PostForm() {
  return (
    <form action="/posts" method="POST">
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">
          Title
        </span>
        <input name="title" type="text" className="form-control" placeholder="Title" />
      </div>

      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon2">
          Image
        </span>
        <input name="image" type="text" className="form-control" placeholder="URL" />
      </div>

      <div className="input-group">
        <span className="input-group-text">Body</span>
        <textarea name="body" className="form-control" aria-label="With textarea" />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
