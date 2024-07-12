
/**
 * Description placeholder
 *
 * @export
 * @param {{ value: any; onChange: any; }} param0
 * @param {*} param0.value
 * @param {*} param0.onChange
 * @returns {*}
 */
export default function Code({value, onChange}) {
    return (
        <div className="code">
            <textarea id='code-area'
                value={value}
                onChange={(e) => onChange(e.target.value)}
            >
            </textarea >
        </div>
    )
}