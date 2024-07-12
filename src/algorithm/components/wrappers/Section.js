
/**
 * Description placeholder
 *
 * @export
 * @param {object} SectionObject
 * @param {number} height
 * @returns {string}
 */
export default function Section(SectionObject, height) {
    console.log(SectionObject)
    let arg = SectionObject.arg;
    let content = SectionObject.content;
    if (arg.type == 'tabular') {
        /*TODO: 
            * create Tabular section 
            * width Factor
        */
    }
    else if(arg.type == 'normal'){
        /*TODO:
            * arguments helper
            * arguments evaluation
            * arguments implement on jscode
        */      
        let jscode = `doc.text('${content}',5,${height})`
        console.log(jscode)
        return jscode
    }
    
}