import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism.css";
import LinearProgress from '@mui/material/LinearProgress';
import CircularProgress from '@mui/material/CircularProgress';
import { useContext, useState } from "react"
import { AppContext } from "../context"

export default function Input() {

  const {input,setInput,loading,setLoading}=useContext(AppContext);
  
  const handleChange=(e)=>{
    setInput(e.target.value)
  }

  return (
  <div className='boxes'>
  <h3>Input</h3>
  {loading===true?(<CircularProgress color="success"  style={{translate:'50% 50%'}}/>):(
  <Editor className='editorText'
        value={input}
        onValueChange={value => setInput(value)}
        onChange={handleChange}
        highlight={code => highlight(code,languages.js)}
        padding={20}
        placeholder={"Enter Input.."}
    />)}
 
 </div>
 
  )
}
