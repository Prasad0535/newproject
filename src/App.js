
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Namedetails from './Components/Namedetails';
import EmailDetails from './Components/Emaildetails';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { BrowserRouter as Router, Route, Switch } from 'react-router';
// import {BrowserRouter as Router, Route , Switch} from 'react-router'

// import NameDetails from './Components/NameDetails';


function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <Routes>
    <div className="App">
     
        <Route path="/" exact component={Namedetails} />
        <Route path="/email" component={EmailDetails} />
      
    </div>
  </Routes>
  );
}

export default App;
