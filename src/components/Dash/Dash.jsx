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
> Heading 1
This is my 1st section 
#/s
#s [ type : normal ]
> Heading 2
This is my 2nd section
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
