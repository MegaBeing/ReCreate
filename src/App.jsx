import { useState } from "react";
import Code from "./Components/Code/Code";
import Pdf from "./Components/Pdf/Pdf";
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [stream, setStream] = useState([
    'bae3cef7-9725-4488-a77c-1948506f2b06',
    'd4e3f6a7-1234-5678-9101-112131415161',
    'e7f8g9h0-2345-6789-1011-121314151617'
  ]);
  const [inputState, setInputState] = useState({
    'bae3cef7-9725-4488-a77c-1948506f2b06': { title: 'Section 1', code: 'Code 1' },
    'd4e3f6a7-1234-5678-9101-112131415161': { title: 'Section 2', code: 'Code 2' },
    'e7f8g9h0-2345-6789-1011-121314151617': { title: 'Section 3', code: 'Code 3' }
  });

  const [outputState, setOutputState] = useState({
    'bae3cef7-9725-4488-a77c-1948506f2b06': [{ text: 'render 1' }],
    'd4e3f6a7-1234-5678-9101-112131415161': [{ text: 'render 2' }],
    'e7f8g9h0-2345-6789-1011-121314151617': [{ text: 'render 3' }]
  });

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

  const addElement = (key, isAbove) => {
    const newKey = uuidv4();

    // stream 
    let tempStream = [...stream];
    let keyIndex = stream.findIndex(ele => ele === key);
    if (keyIndex === -1) return;
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
