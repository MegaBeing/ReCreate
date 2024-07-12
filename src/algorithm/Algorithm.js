/*
TODO:
    * Section 
    * Heading
    * Table
    * Code Splitter
*/

import Section from "./components/wrappers/Section.js"; 
import SplitIntoSections from "./helper/SplitIntoSections/SplitIntoSections.js";

/**
 * Function Convertion
 *
 * @export
 * @param {*} code ReCreate Code
 * @returns {string} JavaScript code
 */

export default function Convertion(code) {
    let sectionList = SplitIntoSections(code,'#');
    // console.log(sectionList[0])
    let jscode = "";
    let height = 10;
    /* FIXME:
        
    */
    let curr;
    for (let i = 0; i < sectionList.length; i++) {
        curr = Section(sectionList[i],height);
        height = height+10;
        jscode = jscode + '\n' + curr;
    }
    return jscode;
}