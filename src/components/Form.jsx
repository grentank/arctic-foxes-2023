import React from 'react';

export default function Form() {
  return (
    <form action="/newpost" method="POST">
      <div className="mb-3">
        <label htmlFor="posttitle" className="form-label">
          Title
          <input name="title" type="text" className="form-control" id="posttitle" />
        </label>
      </div>
      <div className="mb-3">
        <label htmlFor="postmessage" className="form-label">
          Message
          <input name="message" type="text" className="form-control" id="postmessage" />
        </label>
      </div>
      <button type="submit" className="btn btn-outline-success">
        Submit
      </button>
    </form>
  );
}
