import SingleSnippits from "./SingleSnippits"
import styles from "./Snippits.module.less"
export default function Snippits(){
    return(
        <div className={styles.container}>
            <h1>Snippits</h1>
            <div className="mt-10 w-full">
                <SingleSnippits/>
                <SingleSnippits/>
                <SingleSnippits/>
            </div>
        </div>
    )
}