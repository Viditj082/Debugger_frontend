
import './App.css';
import React, { useState } from 'react'
import axios from 'axios';

import Input from './components/Input';
import Output from './components/Output';
import Navbar from './components/Navbar';
import { AppContext } from './context';
import Editor_s from './components/Editor';

function App() {
  
  const HandleClick=()=>{
     axios.post('http://localhost:5000/run',{
        input:input,
        code:code
     }).then((res)=>{
      const response=res.data;
      setOutput(response)
      console.log(response)
     })
    

  }

  const [code,setCode]=useState('#include <bits/stdc++.h>\n\nusing namespace std;\n\nint main()\n{\n\n}');
  const [output,setOutput]=useState('');
  const [input,setInput]=useState('');

  return (
    
    <AppContext.Provider value={{code,setCode,input,setInput,output,setOutput}}>
    <div className='App'>
    <Navbar/>
    <div className='container'>
    
    <div className='bottomContainer'>
    <Input/>
    <Output/>
    </div>
    
    <Editor_s/>

    </div>
    <button  className='run' onClick={HandleClick}> Run 🏃‍♂️</button>
    </div>
    </AppContext.Provider>
  );
  }

export default App;
