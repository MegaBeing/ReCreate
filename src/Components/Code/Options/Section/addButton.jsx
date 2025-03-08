import styles from "./Section.module.less"
export default function AddButton({addElement, objKey, isAbove}){
    return(
        <div className={styles.addButtonContainer}>
            <div onClick={() => addElement(objKey,isAbove)}>+</div>
        </div>
    )
}