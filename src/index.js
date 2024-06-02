import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Weather from './Weather';
 import App3 from './App3';
import reportWebVitals from './reportWebVitals';

const App=()=>{
  const [showApp3Component,setshowApp3Component]=useState(true);
  const handleNextButtononClick=()=>{
    setshowApp3Component(false);
  };

return(
  <>
    <div>
      {showApp3Component ? (<App3 onNextButtonClick={handleNextButtononClick} />):
      <Weather />}
    </div>
  </>
)
};
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
