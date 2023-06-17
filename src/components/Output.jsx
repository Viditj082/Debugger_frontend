import { useContext, useState } from "react"
import { AppContext } from "../context"

export default function Output() {

  const {output,setOutput}=useContext(AppContext);

  return (
    <div className='boxes'>
    <h3>Output</h3>
   <div  className='textArea' contentEditable>
   {output}
   </div>
   </div>
    )
}
