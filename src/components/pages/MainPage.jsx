import React, { useState } from 'react';

export default function MainPage() {
  const [counter, setCounter] = useState(0);
  const [joke, setJoke] = useState({ value: 'No joke yet' });
  const [myInput, setMyInput] = useState('');

  const changeHandler = (event) => {
    setMyInput(event.target.value);
  };
  console.log('myInput', myInput);

  const clickHandler = () => {
    fetch('https://api.chucknorris.io/jokes/random')
      .then((response) => response.json())
      .then((data) => setJoke(data))
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <div className="row">
        <div className="col-2">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              // setCounter(counter + 1); // counter = counter + 1;
              // setCounter(counter + 1);
              // setCounter(counter + 1);
              // setCounter(counter + 1);
              setCounter((prev) => prev + 1);
              setCounter((prev) => prev + 1);
              setCounter((prev) => prev + 1);
              setCounter((prev) => prev + 1);
              console.log('counter:', counter);
            }}
          >
            Count
          </button>
        </div>

        <div className="col-10">
          <p>{counter}</p>
        </div>
      </div>
      <div className="row">
        <div className="col-2">
          <button
            onClick={clickHandler}
            type="button"
            className="btn btn-success"
          >
            Get joke!
          </button>
        </div>
        <div className="col-10">{joke.value}</div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <label htmlFor="validationServer01" className="form-label">
            Comment
          </label>
            <input
              value={myInput}
              onChange={changeHandler}
              type="text"
              className={
                myInput.includes('a')
                  ? 'form-control is-valid'
                  : 'form-control is-invalid'
              }
              id="validationServer01"
            />
          <div className="valid-feedback">Looks good!</div>
          <div className="invalid-feedback">Looks bad!</div>
        </div>
      </div>
    </div>
  );
}
