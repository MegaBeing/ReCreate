import { useState } from "react";
import Code from "./Components/Code/Code";
import Pdf from "./Components/Pdf/Pdf";
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [stream, setStream] = useState([]);
  const [inputState, setInputState] = useState({});

  const [outputState, setOutputState] = useState({});

  const deleteElement = (key) => {
    // stream 
    const tempStream = stream.filter((ele) => ele !== key);
    setStream(tempStream);

    // inputState 
    const { [key]: _, ...tempInputState } = inputState;
    setInputState(tempInputState);

    // outputState
    const { [key]: __, ...tempOutputState } = outputState;
    setOutputState(tempOutputState);
  };

  const addElement = (key, isAbove, code, output) => {
    const newKey = uuidv4();
    if (key == '') {
      setStream(prev => ([...prev, newKey]))
      setInputState(prev => ({ [newKey]: { title: "Section", code: code ? code : "added new Section" }, ...prev }));
      setOutputState(prev => ({ [newKey]: output ? output : [{ text: "added new Section" }], ...prev }));
    }

    // stream 
    let tempStream = [...stream];
    let keyIndex = stream.findIndex(ele => ele === key);
    if (keyIndex === -1) {
      return;
    }
    if (isAbove) tempStream.splice(0, 0, newKey);
    else tempStream.splice(keyIndex + 1, 0, newKey);

    setStream(tempStream);

    // inputState
    setInputState(prev => ({ [newKey]: { title: "Section", code: "added new Section" }, ...prev }));

    // outputState
    setOutputState(prev => ({ [newKey]: [{ text: "added new Section" }], ...prev }));
  };

  return (
    <div className="w-screen h-screen flex flex-row p-10 ">
      <Code
        stream={stream}
        inputState={inputState}
        setInputState={setInputState}
        setOutputState={setOutputState}
        deleteElement={deleteElement}
        addElement={addElement}
      />
      <div className="w-10"></div>
      <Pdf
        stream={stream}
        outputState={outputState}
      />
    </div>
  );
}

export default App;
