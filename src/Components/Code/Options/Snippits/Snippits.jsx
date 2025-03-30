import { useState } from "react"
import SingleSnippits from "./SingleSnippits"
import styles from "./Snippits.module.less"
import { snippitData } from "./data"
export default function Snippits({ addElement }) {
    const [filteredSnippits, setFilteredSnippits] = useState(snippitData);
    return (
        <div className="">
            <div className="text-center text-sm mb-4">
                Click on a section below to add
            </div>
            <div className={styles.container}>
                <input placeholder="Search" className="rounded-full px-5 py-3 drop-shadow-xl w-full"></input>
                <div className="mt-5 w-full max-h-40 overflow-y-auto pr-3">
                    {filteredSnippits.map((ele, idx) => (<SingleSnippits {...ele} key={ele.key} addElement={addElement} />))}
                </div>
            </div>
        </div>
    )
}