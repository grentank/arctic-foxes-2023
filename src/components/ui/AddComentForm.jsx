import React, { useState } from 'react';

export default function AddComentForm({ submitHandler }) {
  const [formData, setFormData] = useState({
    body: '',
  });
  const changeHandler = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  return (
    <form onSubmit={(e) => submitHandler(e, formData)}>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail12" className="form-label">
          Post your comment
          <input
            value={formData.body}
            onChange={changeHandler}
            name="body"
            type="text"
            className="form-control"
            id="exampleInputEmail12"
            aria-describedby="emailHelp"
          />
        </label>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
