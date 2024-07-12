
/**
 * Description placeholder
 *
 * @export
 * @param {*} code ReCreate Code
 * @param {*} index from which index does the next section starts
 * @param {*} n length of the code
 * @param {string} [delimiter='#']
 * @returns {{ singleObject: { arg: {}; content: string; }; index: any; }}
 */
export default function CreateSingleObject(code, index, n, delimiter = '#') {
    var singleObject = {};
    let collect = false;
    let content = '';
    let i = index;
    // console.log('inside CreateSingleObject')
    while (i < n && code[i] != delimiter) {
        if (code[i] == '[') {
            // console.log('inside 1')
            let value = getArguments(code, i, n);
            singleObject['arg'] = value.arg;
            i = value['index'];
            // console.log('singleObject inside CreateSingleObject')
            // console.log(singleObject)
            collect = true;
        }
        else if (collect) {
            content = content + code[i];
        }
        i++;
    }
    singleObject['content'] = content.trim();
    // console.log({
    //     'singleObject': singleObject,
    //     'index': Math.min(i+3,n-1)
    // })
    return {
        'singleObject': singleObject,
        'index': Math.min(i+3,n-1)
    };
}

/**
 * Description placeholder
 *
 * @param {*} code
 * @param {*} index
 * @param {*} n
 * @returns {{ arg: {}; index: any; }}
 */
function getArguments(code, index, n) {
    let arg = {}
    let c = index + 1;
    let argName;
    let argVal;
    while (c < n && code[c] != ']') {
        argName = '';
        argVal = '';
        //argName
        while (c < n && code[c] != ':') {
            argName = argName + code[c];
            c++;
        }
        c++;
        //argValue
        while (c < n && !(code[c] == ']' || code[c] == ',')) {
            argVal = argVal + code[c];
            c++;
        }
        arg[argName.trim()] = argVal.trim();
        if (code[c] == ',')
            c++;
    }
    // console.log('Arguments inside getArguments')
    // console.log({
    //     'arg': arg,
    //     'index': c
    // })
    return {
        'arg': arg,
        'index': c
    };

}