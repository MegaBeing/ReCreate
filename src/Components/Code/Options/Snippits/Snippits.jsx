import { useState } from "react"
import SingleSnippits from "./SingleSnippits"
import styles from "./Snippits.module.less"
import { snippitData } from "./data"
export default function Snippits({ addElement }) {
    const [filteredSnippits, setFilteredSnippits] = useState(snippitData);
    const filterSnippit = (search) => {
        if (search) {
            const filtered = snippitData.filter((ele) => {
                const low = ele.title.toLowerCase()
                return low.includes(search.toLowerCase())
            })
            setFilteredSnippits(filtered)
        }
        else {
            setFilteredSnippits(snippitData)
        }
    }
    return (
        <div className="">
            <div className="text-center text-sm mb-4">
                Click on a section below to add
            </div>
            <div className={styles.container}>
                <input placeholder="Search" className={styles.search} onChange={(e) => filterSnippit(e.target.value)} />
                <div className={styles.snippitListContainer}>
                    {filteredSnippits.map((ele, idx) => (<SingleSnippits {...ele} key={ele.key} addElement={addElement} />))}
                </div>
            </div>
        </div>
    )
}