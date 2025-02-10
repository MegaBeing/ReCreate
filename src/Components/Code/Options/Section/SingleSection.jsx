import styles from "./Section.module.less"
import DragIcon from '/section-drag.png'
export default function SingleSection(){
    const title = "Section"
    return (
        <div className={styles.single_section_container}>
             <img src={DragIcon} alt="::" />
             <h2>{title}</h2>
        </div>
    );
}