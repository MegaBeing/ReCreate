import CreateSingleObject from "./components/CreateSingleObject";

/**
 * Description placeholder
 *
 * @export
 * @param {*} code ReCreate Code
 * @param {string} [delimiter='#'] 
 * @returns {
 * [
 *      {arg: {}; content: string; } ,
 * ...]
 * }
 */
export default function SplitIntoSections(code, delimiter = '#') {
    try {
        let n = code.length;
        let sectionList = [];
        let singleObject;
        let i = 0;
        while (i < n) {
            if (code[i] == delimiter) {
                // console.log('inside 1')
                if (i + 1 < n && code[i + 1] == 's') {
                    // console.log('inside 2')
                    if (i + 2 < n) {
                        let value = CreateSingleObject(code, i + 2, n, delimiter);
                        singleObject = value.singleObject;
                        i = value.index;
                        sectionList.push(singleObject);
                        continue;
                    }
                    else
                        throw "Problem while creating multiple sections"
                }
            }
            i++;
        }
        return sectionList;
    }
    catch (err) {
        console.log(err);
    }

}

