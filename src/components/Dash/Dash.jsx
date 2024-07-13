import { useState } from "react";
import Code from "./components/Code/Code.jsx"
import Display from "./components/Display/Display.jsx"
import Convertion from '../../algorithm/Algorithm.js'

/**
 * Description placeholder
 *
 * @export
 * @returns {*}
 */
export default function Dash() {
  let Default = `#s [ type : normal ]
This is my 1 section 
#/s
#s [ type : normal ]
> Heading 2
This is my 2 section
#/s`;
  const [code, setcode] = useState(Default);
  const [fontSize, setFontSize] = useState(16);
    // console.log(code)
  return (
    <>
      <Code value={code} onChange={setcode} fontSize={fontSize} setFontSize={setFontSize}/>
      <Display value={Convertion(code,fontSize)} />
    </>
  );
} 
