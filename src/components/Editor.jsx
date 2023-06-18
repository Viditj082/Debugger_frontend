import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism.css";
import { useContext, useState } from "react"
import { AppContext } from "../context"


export default function Editor_s() {

    const {code,setCode}=useContext(AppContext);

    const handleChange=(e)=>{
       const value=e.target.value;
       setCode(value)
       localStorage.setItem('code',value)
      }
     
  return (
    <div className='editor'>
    <Editor className='editorText'
        value={code}
        onValueChange={value => setCode(value)}
        onChange={handleChange}
        highlight={code => highlight(code,languages.js)}
        padding={20}
        placeholder={"WRITE YOUR CODE HERE.."}
      />
    </div>
  )
}
