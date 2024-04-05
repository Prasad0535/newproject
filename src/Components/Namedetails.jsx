import React from 'react'
import '../CSS/Name.css'
import { Link, withRouter } from 'react-router-dom'
function Namedetails(props) {
  const [name,setname]=React.useState("");
 // const history=useHistory();
  const handleNext=()=>{
    props.history.push({
      pathname:"/email",
      state:{name:name}
    });  
  }
  return (
  <>
  <h1>Namedetails</h1>
  <div className='input'>
  Name : <input onChange={(e)=>{setname(e.target.value)}} type="text" placeholder=' please enter your name. '></input>
  </div>
 <Link to="/email"><button onClick={handleNext}>Next</button></Link> 
    </> 
  )
}

export default Namedetails