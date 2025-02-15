import styles from "./CodeEditor.module.less"
import Editor from '@monaco-editor/react';
import { defineTheme } from "./CustomTheme";
import Loader from "../../../Loader/Loader";
import { useRef } from "react";
export default function CodeEditor({codeState, setCodeState}){
    const editorRef = useRef(null)
    const timeoutRef = useRef(null); 

    const onMonacoChange = (value, event) => {
        clearTimeout(timeoutRef.current); 
        timeoutRef.current = setTimeout(() => {
            setCodeState(value);
        }, 250);
    };
    return(
        <div className={styles.container}>
            <div className={styles.strip}></div>
            <Editor 
            width="100%" 
            height="95%" 
            defaultLanguage="markdown" 
            theme="myCustomTheme"
            loading={<Loader/>}
            defaultValue={codeState}
            beforeMount={(monaco) => defineTheme(monaco)}
            options={{
                fontSize: 18,
                minimap: {
                enabled: false
                }
            }}
            onChange={onMonacoChange}
            />
        </div>
    )
}
