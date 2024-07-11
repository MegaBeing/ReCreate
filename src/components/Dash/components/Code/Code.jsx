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