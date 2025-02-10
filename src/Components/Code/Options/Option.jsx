import Logo from './Logo';
import styles from './Option.module.less'
import Section from './Section/Section';
export default function Option(){
    return (
        <div className={styles.container}>
            {/* <Logo/> */}
            <div className='mt-10 w-full'>
                <Section/>
            </div>
        </div>
    );
}