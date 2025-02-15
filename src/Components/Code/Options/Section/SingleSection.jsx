import styles from "./Section.module.less"
import DragIcon from '/section-drag.png'
export default function SingleSection(){
    const title = "Section"
    return (
        <div className={styles.single_section_container}>
            <div className={styles.overlay}></div>
            <div className="flex justify-start items-center">
             <img src={DragIcon} alt="::" className="size-7 ml-1"/>
             <h2>{title}</h2>
            </div>
            <button>×</button>
        </div>
    );
}