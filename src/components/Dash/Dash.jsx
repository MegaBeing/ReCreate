import { useState } from "react";
import Code from "./components/Code/Code.jsx"
import Display from "./components/Display/Display.jsx"
import Convertion from '../../algorithm/Algorithm.js'
export default function Dash() {
  const [code, setcode] = useState(`#S {{Section 1}} <>
This is my 1 section 
#/S
#S {{Section 2}} <>
This is my 2 section
#/S`);
  return (
    <>
      <Code value={code} onChange={setcode} />
      <Display value={Convertion(code)} />
    </>
  );
} 
