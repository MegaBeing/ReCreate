import styles from "./Snippits.module.less"
export default function SingleSnippits(){
    const title = "Snippit"
    return (
        <div className={styles.single_snippit_container}>
            <h2>{title}</h2>
        </div>
    );
}