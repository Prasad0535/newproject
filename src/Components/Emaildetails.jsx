import React from 'react'
import { useState } from 'react';
function Emaildetails() {
    const [email, setEmail] = useState('');

    const handlePrevious = () => {
      // Go back to the previous step
      window.history.back();
    };
  
    const handleSubmit = () => {
      // Handle form submission
      console.log('Form submitted:', { email });
    };
  return (
   <>
     <div>
      <h1>Email Details</h1>
      <label>Email:</label>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <button onClick={handlePrevious}>Previous</button>
      <button onClick={handleSubmit}>Submit</button>
    </div>
   </>
  )
}

export default Emaildetails