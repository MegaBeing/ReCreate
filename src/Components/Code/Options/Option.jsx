import Logo from './Logo';
import styles from './Option.module.less'
import Section from './Section/Section';
import Snippits from './Snippits/Snippits';
export default function Option() {
    return (
        <div className={styles.container}>
            <Logo />
            <div className="flex-1 mt-10 w-full flex flex-col justify-between items-center">
                <Section />
                <Snippits />
            </div>
        </div>
    );
}