import { useState } from "react"

export default function NumberInput({ fontSize, setFontSize }) {
    return (
        <div className="number-input">
            <button onClick={() => setFontSize(fontSize - 1)}>-</button>
            <input type="text" name="size" id="size" Value={fontSize} readOnly/>
            <button onClick={() => setFontSize(fontSize + 1)}>+</button>
        </div>
    )
}
