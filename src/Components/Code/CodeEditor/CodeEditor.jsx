import styles from "./CodeEditor.module.less"
import Editor from '@monaco-editor/react';
import { defineTheme } from "./CustomTheme";
export default function CodeEditor(){
    return(
        <div className={styles.container}>
            <div className={styles.strip}></div>
            <Editor 
            width="100%" 
            height="95%" 
            defaultLanguage="Markdown" 
            theme="myCustomTheme"
            beforeMount={(monaco) => defineTheme(monaco)}
            options={{
                fontSize: 18
            }}
            />
        </div>
    )
}
