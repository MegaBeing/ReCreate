/*
TODO:
    * Table
    * Dates
*/

import Section from "./components/wrappers/Section.js";
import SplitIntoSections from "./helper/AlgorithmHelpers/SplitIntoSections.js";

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
    // console.log(sectionList)
    let height = 10;
    let curr;
    for (let i = 0; i < sectionList.length; i++) {
        // console.log(sectionList[i])
        curr = Section(sectionList[i], height,fontSize);
        // console.log(curr)
        height = curr.height + (fontSize * 0.2);
        jscode = jscode + '\n' + curr.jscode;
    }
    return jscode;
    // try {
    //     for (let i = 0; i < sectionList.length; i++) {
    //         // console.log(sectionList[i])
    //         curr = Section(sectionList[i], height,fontSize);
    //         // console.log(curr)
    //         height = curr.height + (fontSize * 0.2);
    //         jscode = jscode + '\n' + curr.jscode;
    //     }
    //     return jscode;
    // }
    // catch(err){
    //     console.log('Problem in Rendering User Code Not Appropriate')
    //     return "";
    // }
}