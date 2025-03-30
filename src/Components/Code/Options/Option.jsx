import Logo from './Logo';
import styles from './Option.module.less'
import Section from './Section/Section';
import Snippits from './Snippits/Snippits';
export default function Option({ stream, inputState, activeSection, setActiveSection, addElement, deleteElement }) {
    return (
        <div className={styles.container}>
            <Logo />
            <div className="flex-1 mt-10 w-full flex flex-col justify-between items-center">
                <Section
                    stream={stream}
                    inputState={inputState}
                    activeSection={activeSection}
                    setActiveSection={setActiveSection}
                    addElement={addElement}
                    deleteElement={deleteElement}
                />
                <Snippits addElement={addElement} />
            </div>
        </div>
    );
}