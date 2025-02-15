import CodeEditor from "./CodeEditor/CodeEditor";
import CodeOptions from "./CodeOptions/CodeOptions";
import Option from "./Options/Option";

export default function Code({codeState, setCodeState}){
    return(
        <div className="w-3/5 h-[100%] rounded-2xl flex flex-row justify-start items-end ">
            <Option/>
            <div className="h-full w-full">
                <CodeOptions/>
                <CodeEditor codeState={codeState} setCodeState={setCodeState}/>
            </div>
        </div>
    )
}