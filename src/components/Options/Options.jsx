/* TODO:
    * Implement the Options Component after Algorithms 
*/
import SingleOption from "./components/SingleOption";
import { optionsData } from "./Data/OptionData";
export default function Options({ codeState, onClick, curPos }) {
    return (
        <div className="options">
            <h1>Snippets</h1>
            you can code snippets from here
            <div className="single-option-list">
                {optionsData.map((ele) => <SingleOption
                    key={ele.title}
                    codeState={codeState}
                    onClick={onClick}
                    title={ele.title}
                    syntax={ele.syntax}
                    curPos={curPos}
                />)}
            </div>
        </div>
    );
}