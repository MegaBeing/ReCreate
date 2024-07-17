import ContentEvaluation from "./helpers/Section/ContentEvaluation";

/**
 * Description placeholder
 *
 * @export
 * @param {object} SectionObject
 * @param {number} height
 * @returns {string}
 */
export default function Section(SectionObject, height,fontSize) {
    // console.log(SectionObject)
    let arg = SectionObject.arg;
    let content = SectionObject.content;
    if (arg == false || arg.type == 'normal') {
        let evaluatedContent = ContentEvaluation(content,height,fontSize);
        // console.log(evaluatedContent)
        return evaluatedContent
    }
    else if (arg.type == 'tabular') {
        /*TODO: 
            * create Tabular section 
            * width Factor
        */
    }

}