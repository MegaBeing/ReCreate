import styles from './Section.module.less'
import SingleSection from './SingleSection'
export default function Section({ stream, inputState, setActiveSection, activeSection, addElement, deleteElement}) {
    return (
        <div className={styles.container}>
            <div className={styles.sub_container}>
                {stream.map((ele, index) => {
                    return <SingleSection
                        title={inputState[ele].title}
                        key={ele}
                        objKey={ele}
                        index={index}
                        isActive={activeSection == ele}
                        setActiveSection={setActiveSection}
                        addElement={addElement}
                        deleteElement={deleteElement}
                    />
                }
                )}
            </div>
        </div>
    )
}