import { useState } from "react";
import Code from "./Components/Code/Code";
import Pdf from "./Components/Pdf/Pdf";
function App() {
  const [inputState, setInputState] = useState({'bae3cef7-9725-4488-a77c-1948506f2b06': {title: 'Section', code: 'Code'}});
  const [outputState, setOutputState] = useState({'bae3cef7-9725-4488-a77c-1948506f2b06':[{text: 'Code'}]})
  return (
    <div className="w-screen h-screen flex flex-row p-10 ">
      <Code inputState={inputState} setInputState={setInputState} setOutputState={setOutputState}/>
        <div className="w-10"></div>
      <Pdf outputState={outputState}/>
    </div>
  );
}

export default App
