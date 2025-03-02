import { useEffect, useState } from "react";
import CodeEditor from "./CodeEditor/CodeEditor";
import CodeOptions from "./CodeOptions/CodeOptions";
import Option from "./Options/Option";

export default function Code({inputState,setInputState,setOutputState}){
    const [sectionsObj, setSectionsObj] = useState({})
    const [activeSection, setActiveSection] = useState(Object.keys(inputState)[0])
    useEffect(() => {
        const tempSectionObj = {};
        Object.keys(inputState).forEach((ele) => {
            tempSectionObj[ele] = inputState[ele].title
        })
        setSectionsObj(tempSectionObj)
    },[inputState])
    return(
        <div className="w-3/5 h-[100%] rounded-2xl flex flex-row justify-start items-end ">
            <Option sectionsObj={sectionsObj} activeSection={activeSection} setActiveSection={setActiveSection}/>
            <div className="h-full w-full">
                <CodeOptions/>
                <CodeEditor sectionsObj={sectionsObj} activeSection={activeSection} inputState={inputState} setInputState={setInputState} setOutputState={setOutputState}/>
            </div>
        </div>
    )
}