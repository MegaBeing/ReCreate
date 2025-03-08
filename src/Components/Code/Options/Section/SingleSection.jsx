import AddButton from "./addButton";
import styles from "./Section.module.less"
import DragIcon from '/section-drag.png'
export default function SingleSection({ title, isActive, setActiveSection, objKey, index, addElement, deleteElement}) {
    return (
        <div className="w-full">
            {!index && <AddButton addElement={addElement} objKey={objKey} isAbove={true}/>}
            <div className={`${styles.single_section_container} ${isActive && styles.active}`} onClick={() => setActiveSection(objKey)}>
                <div className="flex justify-start items-center">
                    <img src={DragIcon} alt="::" className="size-7 ml-1" />
                    <h2 contentEditable="true">{title}</h2>
                </div>
                <button onClick={() => deleteElement(objKey)}>×</button>
            </div>
            <AddButton addElement={addElement} objKey={objKey} isAbove={false}/>
        </div>
    );
}