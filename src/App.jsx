import { useState } from "react";
import Code from "./Components/Code/Code";
import Pdf from "./Components/Pdf/Pdf";
function App() {
  const [codeState, setCodeState] = useState('this is the first pdf render')
  return (
    <div className="w-screen h-screen flex flex-row p-10 ">
      <Code codeState={codeState} setCodeState={setCodeState}/>
        <div className="w-10"></div>
      <Pdf codeState={codeState}/>
    </div>
  );
}

export default App
