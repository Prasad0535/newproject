import React, { useState } from 'react';
import Photos from './Photos';
import './App3.css'
// import App from './App';

const App3 = ({onNextButtonClick}) => {
  const [count, setCount] = useState(1);

  const handleChange = (event) => {
    setCount(event.target.value);
  };

  return (
    <div className="app">
      <h1>Random  Photos</h1>
      <div className="count-input">
        <label htmlFor="countInput">Enter The Number of photos : </label>
        <input
          type="number"
          id="countInput"
          value={count}
          onChange={handleChange}
          min="1"
          max="10"
        />
      </div>
      <Photos count={count} />
      <button onClick={onNextButtonClick}>Next </button>
    </div>
  );
};

export default App3;
