import { useState } from "react";
import Code from "./components/Code/Code.jsx"
import Display from "./components/Display/Display.jsx"
import Convertion from '../../algorithm/Algorithm.js'
import Options from "../Options/Options.jsx";
/**
 * Description placeholder
 *
 * @export
 * @returns {*}
 */
export default function Dash() {
  let Default = `#s { type : normal }
> Heading 1
This is my 1st section 
#/s

#s { type : normal }
> Heading 2
This is my 2nd section
* Point 1
* Point 2
#/s

#s 
> Heading 3 
[link](https://www.google.com/)
This is my 3rd Section
#/s
`;
  const [code, setcode] = useState(Default);
  const [fontSize, setFontSize] = useState(16);
  const [curPos, setCurPos] = useState(0);
    // console.log(code)
  return (
    <>
      <Options curPos = {curPos} codeState={code} onClick = {setcode} />
      <Code value={code} setCurPos={setCurPos} onChange={setcode} fontSize={fontSize} setFontSize={setFontSize} />
      <Display value={Convertion(code,fontSize)} />
    </>
  );
} 
