import styles from './Section.module.less'
import SingleSection from './SingleSection'
export default function Section(){
    return(
        <div className={styles.container}>
            <div className={styles.sub_container}>
                <SingleSection/>
                <SingleSection/>
                <SingleSection/>
                <SingleSection/>
                <SingleSection/>
            </div>
        </div>
    )
}