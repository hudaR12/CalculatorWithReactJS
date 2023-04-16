import React from 'react';
import {useState} from 'react';
import '../App.css';

function Calculator() {
   const[output,setOutput] = useState("");

   const clearScreen = () => {
    try {
    setOutput(output.slice(0, -1))

    }
    catch(error){
      setOutput("");
    }
   }
 
  const operation = () => {
    try{
    setOutput(eval(output))
    }
    catch(error){
     setOutput("ERROR");
    }
}

return (
    <div > 
     <div className='container' >
     <div className='row'>
      <div className='col-15'>
            <h1 style={{textAlign:'center', marginTop:"2px"}}>Calculator</h1>
        </div>
   </div>
   <div className='row justify-content-center' style={{marginTop:"20px"}}>
<div className='col-md-4'>
  <div className='card border-dark mb-3' style={{backgroundColor:"#373d4f"}}>
    <div className='card-body text-primary'>
     <input type="text" className='form-control form-control-lg mb-4 text-center fs-4 text-light' value={output} style={{backgroundColor:"#373d4f",border:"0"}} onChange = {(e)=>setOutput(e.target.value)}/>
      <div className='row'>
       <div className='col-3'>
   <button className='btn btn-light text-light  px-3 fs-3'  value='1' onClick={(e)=>setOutput(output + e.target.value)}  style={{backgroundColor:"#4f3fca",border:"0"}}>1</button>
   </div>
   <div className='col-3'>
   <button className='btn btn-light text-light  px-3 fs-3' value='2' onClick={(e)=>setOutput(output + e.target.value)} style={{backgroundColor:"#4f3fca",border:"0"}}>2</button>
  </div>
  <div className='col-3'>
    <button className='btn btn-light text-light  px-3 fs-3' value='3' onClick={(e)=>setOutput(output + e.target.value)} style={{backgroundColor:"#4f3fca",border:"0"}}>3</button>
    </div> 
    <div className='col-3'>
   <button className='btn btn-light text-light  px-3 fs-3' value='4' onClick={(e)=>setOutput(output + e.target.value)} style={{backgroundColor:"#4f3fca",border:"0"}}>4</button>
   </div>
   <div className='col-3'>
   <button className='btn btn-light text-light  px-3 fs-3' value='5' onClick={(e)=>setOutput(output + e.target.value)} style={{backgroundColor:"#4f3fca",border:"0"}}>5</button>
   </div>
   <div className='col-3'>
   <button className='btn btn-light text-light  px-3 fs-3' value='6' onClick={(e)=>setOutput(output + e.target.value)} style={{backgroundColor:"#4f3fca",border:"0"}}>6</button>
   </div>
   <div className='col-3'>
   <button className='btn btn-light text-light  px-3 fs-3' value='7' onClick={(e)=>setOutput(output + e.target.value)} style={{backgroundColor:"#4f3fca",border:"0"}}>7</button>
   </div>
   <div className='col-3'>
   <button className='btn btn-light text-light  px-3 fs-3' value='8' onClick={(e)=>setOutput(output + e.target.value)} style={{backgroundColor:"#4f3fca",border:"0"}}>8</button>
  </div>
  <div className='col-3'>
   <button className='btn btn-light text-light  px-3 fs-3' value='9' onClick={(e)=>setOutput(output + e.target.value)} style={{backgroundColor:"#4f3fca",border:"0"}}>9</button>
  </div> 
  <div className='col-3'>
   <button className='btn btn-light text-light  px-3 fs-3' value='0' onClick={(e)=>setOutput(output + e.target.value)} style={{backgroundColor:"#4f3fca",border:"0"}}>0</button>
  </div>
  <div className='col-3'>
   <button className='btn btn-light text-light  px-3 fs-3' value='*' onClick={(e)=>setOutput(output + e.target.value)} style={{backgroundColor:"#4f3fca",border:"0"}}>*</button>
  </div> 
  <div className='col-3'>
   <button className='btn btn-light text-light  px-3 fs-3' value='+' onClick={(e)=>setOutput(output + e.target.value)} style={{backgroundColor:"#4f3fca",border:"0"}}>+</button>
   </div>
   <div className='col-3'>
   <button className='btn btn-light text-light  px-3 fs-3' value='-' onClick={(e)=>setOutput(output + e.target.value)} style={{backgroundColor:"#4f3fca",border:"0"}}>-</button>
   </div>
   <div className='col-3'>
   <button className='btn btn-light text-light  px-3 fs-3' value='/' onClick={(e)=>setOutput(output + e.target.value)} style={{backgroundColor:"#4f3fca",border:"0"}}>/</button>
   </div>
   <div className='col-3'>
  <button className='btn btn-light text-light  px-3 fs-3' value='C' onClick={() => clearScreen()} style={{backgroundColor:"#4f3fca",border:"0"}}> C </button>
    </div>
    <div className='col-3'>
   <button className='btn btn-light text-light  px-4 fs-3' value='=' onClick={()=>operation()} style={{backgroundColor:"#e83e21",border:"0"}}>=</button>
   </div>
   <div className='col-3'>
   <button className='btn btn-light text-light  px-4 fs-3' value='%' onClick={(e) => setOutput(output + e.target.value)} style={{backgroundColor:"#4f3fca",border:"0"}}>%</button>
   </div>
   </div>
   </div>
   </div>
    </div>
     </div>
      </div>
       </div>
  )
}

export default Calculator