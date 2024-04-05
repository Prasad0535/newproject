import React from 'react'
import { useState } from 'react';
import { useHistory } from 'react-router-dom';  

function Namedetails() {
    const history = useHistory();
    const [name, setName] = useState('');
  
    const handleNext = () => {
      history.push('/email');
    };
  return (
    <>
        <div>Namedetails</div>

        <div>
      <h1>Name Details</h1>
      <label>Name:</label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={handleNext}>Next</button>
    </div>
    </>
    
  );
}

export default Namedetails