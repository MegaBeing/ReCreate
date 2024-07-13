
/**
 * Description placeholder
 *
 * @export
 * @param {{ value: any; onChange: any; }} param0
 * @param {*} param0.value
 * @param {*} param0.onChange
 * @returns {*}
 */

import NumberInput from "./components/NumberInput";
export default function Code({ value, onChange , fontSize , setFontSize}) {
    return (
        <>
            <div className="code">
            <NumberInput fontSize={fontSize} setFontSize={setFontSize}/>
                <textarea id='code-area'
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                >
                </textarea >
            </div>
        </>
    )
}