import { useEffect, useState } from "react";
import CodeEditor from "./CodeEditor/CodeEditor";
import CodeOptions from "./CodeOptions/CodeOptions";
import Option from "./Options/Option";

export default function Code({ stream, inputState, setInputState, setOutputState, deleteElement, addElement}) {
    const [activeSection, setActiveSection] = useState(stream.length ? stream[0] : "")
    return (
        <div className="w-3/5 h-[100%] rounded-2xl flex flex-row justify-start items-end ">
            <Option
                stream={stream}
                inputState={inputState}
                activeSection={activeSection}
                setActiveSection={setActiveSection}
                addElement={addElement}
                deleteElement={deleteElement}
            />
            <div className="h-full w-full">
                <CodeOptions />
                <CodeEditor
                    activeSection={activeSection}
                    inputState={inputState}
                    setInputState={setInputState}
                    setOutputState={setOutputState}
                />
            </div>
        </div>
    )
}