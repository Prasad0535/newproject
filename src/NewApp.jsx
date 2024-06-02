import React, { useState } from 'react';
import First from './First';
const App = () => {
  const [count, setCount] = useState(1);

  const handleChange = (event) => {
    setCount(event.target.value);
  };

  return (
    <div>
      <h1>Random  Photos</h1>
      <div>
        <label htmlFor="countInput">Number of photos:</label>
        <input
          type="number"
          id="countInput"
          value={count}
          onChange={handleChange}
          min="1"
          max="10" // Set a maximum limit if needed
        />
      </div>
      <First count={count} />
    </div>
  );
};

export default App;
