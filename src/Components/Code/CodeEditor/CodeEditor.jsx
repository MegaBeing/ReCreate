import styles from "./CodeEditor.module.less"
import Editor from '@monaco-editor/react';
import { defineTheme } from "./CustomTheme";
import Loader from "../../../Loader/Loader";
import Select from "react-select";
import { useRef, useState } from "react";
import { sizeOptions, stripStyle } from "./const";
export default function CodeEditor({ activeSection, inputState, setInputState, setOutputState, addElement }) {
    const timeoutRef = useRef(null);
    const [fontSize, setFontSize] = useState(10)
    const API_URL = import.meta.env.VITE_API_URL
    const compile = async (value) => {
        try {
            const response = await fetch(`${API_URL}/compile/`, {
                method: 'POST',
                body: JSON.stringify({
                    string: value,
                    fontSize: fontSize,
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            if (response.ok) {
                const data = await response.json()
                setOutputState(prev => ({ ...prev, [activeSection]: [...data.content] }))
            }
        }
        catch (error) {
            console.log(error);
        }
    }
    const onMonacoChange = (value, event) => {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => {
            if (activeSection !== "") {
                setInputState((prev) => ({
                    ...prev,
                    [activeSection]: { title: inputState[activeSection].title, code: value }
                }));
            }
            else {
                addElement('', true, value, [value])
            }
            compile(value)
        }, 250);
    };
    return (
        <div className={styles.container}>
            <div className={styles.strip}>
                <Select
                    options={sizeOptions}
                    placeholder="Size"
                    defaultInputValue={`${fontSize}`}
                    styles={stripStyle}
                    onChange={(e) => {
                        setFontSize(e.value)
                    }}
                />
            </div>
            <Editor
                width="100%"
                height="95%"
                defaultLanguage="markdown"
                theme="myCustomTheme"
                loading={<Loader />}
                value={inputState[activeSection]?.code || ""}
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
