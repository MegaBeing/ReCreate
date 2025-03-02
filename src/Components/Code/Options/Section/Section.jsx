import styles from './Section.module.less'
import SingleSection from './SingleSection'
export default function Section({sectionsObj, setActiveSection, activeSection}) {
    return (
        <div className={styles.container}>
            <div className={styles.sub_container}>
                {Object.keys(sectionsObj).map((ele) => {
                    return <SingleSection
                    title={sectionsObj[ele]}
                    key={ele}
                    isActive={activeSection == ele}
                    setActiveSection={setActiveSection}
                />}
                )}
            </div>
        </div>
    )
}