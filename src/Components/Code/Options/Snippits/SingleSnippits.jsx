import styles from "./Snippits.module.less"
export default function SingleSnippits({ title, code, output, addElement }) {
    return (
        <div className={styles.single_snippit_container} onClick={() => addElement('', true, code, output)}>
            <div className={styles.backDrop}>+</div>
            <h2>{title}</h2>
        </div>
    );
}