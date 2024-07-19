
/**
 * Description placeholder
 *
 * @export
 * @param {{ value: any; onChange: any; }} param0
 * @param {*} param0.value
 * @param {*} param0.onChange
 * @returns {*}
 */

import { useRef } from "react";
import NumberInput from "./components/NumberInput";
import Highlighter from "./components/Highlight";
export default function Code({ value, onChange, fontSize, setFontSize, setCurPos }) {
    const textAreaRef = useRef();
    const handleSelect = () => {
        if (textAreaRef.current) {
            const cursorPos = textAreaRef.current.selectionStart;
            setCurPos(cursorPos);
        }
    };
    return (
        <div className="code">
            <NumberInput fontSize={fontSize} setFontSize={setFontSize} />
            <textarea
                ref={textAreaRef}
                id='code-area'
                value={value}
                onSelect={() => handleSelect()}
                onChange={(e) => {
                    onChange(e.target.value)
                }}
                spellCheck={false}
            >
            </textarea >
            <Highlighter Code={value}/>
        </div>
    )
}