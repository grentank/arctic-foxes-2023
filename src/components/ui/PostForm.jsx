import React, { useState } from 'react';

export default function PostForm() {
  const [error, setError] = useState(null);

  const [formData, setFormData] = useState({
    title: '',
    image: '',
    body: '',
  });

  console.log('formData:', formData);

  const changeHandler = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const submitHandler = async (event) => {
    event.preventDefault(); // предотвращает перезагрузку страницы
    // const formData = Object.fromEntries(new FormData(event.target)); неуправляемые инпуты

    try {
      const response = await fetch('/api/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        window.location = '/posts';
        return;
      }
      const err = await response.json();
      setError(err);
      console.log('response from fetch', err);
    } catch (err) {
      console.log(err);
      setError(err);
    }
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">
          Title
        </span>
        <input
          value={formData.title}
          onChange={changeHandler}
          name="title"
          type="text"
          className="form-control"
          placeholder="Title"
        />
      </div>

      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon2">
          Image
        </span>
        <input
          value={formData.image}
          onChange={changeHandler}
          name="image"
          type="text"
          className="form-control"
          placeholder="URL"
        />
      </div>

      <div className="input-group">
        <span className="input-group-text">Body</span>
        <textarea
          value={formData.body}
          onChange={changeHandler}
          name="body"
          className="form-control"
          aria-label="With textarea"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
      {error && <div className="alert alert-danger">{error.message}</div>}
    </form>
  );
}
