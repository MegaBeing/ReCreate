/*
TODO:
    * Heading
    * Table
    * Dates
    * Points
    * Link
*/

import Section from "./components/wrappers/Section.js";
import SplitIntoSections from "./helper/SplitIntoSections/SplitIntoSections.js";

/**
 * Description placeholder
 *
 * @export
 * @param {string} code
 * @param {number} fontSize
 * @returns {string}
 */
export default function Convertion(code,fontSize) {

    let sectionList = SplitIntoSections(code, '#');
    let jscode = `doc.setFontSize(${fontSize})`;
    let height = fontSize * 0.5;
    let curr;
    try {
        for (let i = 0; i < sectionList.length; i++) {
            console.log(sectionList[i])
            curr = Section(sectionList[i], height);
            height = height + (fontSize * 0.5);
            jscode = jscode + '\n' + curr;
        }
        return jscode;
    }
    catch(err){
        console.log('Problem in Rendering User Code Not Appropriate')
        return "";
    }
}