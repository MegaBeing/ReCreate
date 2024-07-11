import { useState } from "react";
import Code from "./components/Code/Code.jsx"
import Display from "./components/Display/Display.jsx"
export default function Dash(){
  const [code, setcode] = useState(`doc.text("Hello world!", 10, 10);`);
  return (
    <>
      <Code value={code} onChange={setcode}/>
      <Display value={code}/>
    </>
  );
} 
