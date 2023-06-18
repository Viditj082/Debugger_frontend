
import './App.css';
import React, { useState } from 'react'
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';
import Input from './components/Input';
import Output from './components/Output';
import Navbar from './components/Navbar';
import { AppContext } from './context';
import Editor_s from './components/Editor';
import LinearProgress from '@mui/material/LinearProgress';

function App() {

  const [code,setCode]=useState('#include <bits/stdc++.h>\n\nusing namespace std;\n\nint main()\n{\ncout<<"Hello World";\nreturn 0;\n}');
  const [output,setOutput]=useState('');
  const [input,setInput]=useState('');
  const [language,setLanguage]=useState('cpp');
  const [loading,setLoading]=useState(false);
  
  const HandleClick=()=>{
    setLoading(true)
    setTimeout(()=>{},1000);
     axios.post(`http://localhost:5000/run/${language}`,{
        input:input,
        code:code
     }).then((res)=>{

      const response=res.data.toString();
      const str=response.replace('\r\n','\n')
      console.log(str+ "  :op")
      setOutput(str) 
      setLoading(false)
      // console.log(response)
     }).catch((error)=>{
        setLoading(false)
        setOutput(error.toString())
     })
    

  }

  return (
    
    <AppContext.Provider value={{code,setCode,input,setInput,output,setOutput,loading,setLoading,language,setLanguage}}>
    <div className='App'>
    <Navbar/>
    
    {loading &&  <LinearProgress color="secondary" />
}
    <div className='container'>
    
    <div className='bottomContainer'>
    <Input/>
    <Output/>
    </div>
    
    <Editor_s/>

    </div>
    <button  className='run' onClick={HandleClick} style={loading===true?{pointerEvents:'none',opacity:0.5}:{pointerEvents:'visible',opacity:1}}> Run 🏃‍♂️</button>
    </div>
    </AppContext.Provider>
  );
  }

export default App;
