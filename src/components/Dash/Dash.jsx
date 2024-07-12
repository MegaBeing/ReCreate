import { useState } from "react";
import Code from "./components/Code/Code.jsx"
import Display from "./components/Display/Display.jsx"
import Convertion from '../../algorithm/Algorithm.js'
export default function Dash() {
  const [code, setcode] = useState(`#s [ type : normal ]
This is my 1 section 
#/s
#s [ type : normal ]
This is my 2 section
#/s`);
    // console.log(code)
  return (
    <>
      <Code value={code} onChange={setcode} />
      <Display value={Convertion(code)} />
    </>
  );
} 
