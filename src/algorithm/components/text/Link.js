export default function Link(code, height, fontSize) {
    let linkObj = TextAndUrl(code);

    return `doc.setFont(undefined,'normal').setFontSize(${fontSize})
    doc.setTextColor(20, 106, 227);  
    doc.textWithLink('${linkObj.text}',18,${height},{url:'${linkObj.url}'})
    // let textWidth = doc.getTextWidth(${linkObj.text});
    // doc.line(15,${height+(fontSize * 0.2)},15 + textWidth, ${height+(fontSize * 0.2)});
    doc.setTextColor(0, 0, 0);`;
}

function TextAndUrl(code) {
    let n = code.length;
    let text = '';
    let url = '';
    let i = 0;
    let textWidth = 0;
    while (i < n) {
        if (code[i] == '[') {
            i++;
            while (i < n && code[i] != ']') {
                text = text + code[i];
                i++;
            }
            continue
        }
        else if (code[i] == '(') {
            i++;
            while (i < n && code[i] != ')') {
                url = url + code[i];
                i++;
            }
            continue
        }
        i++;
    }
    console.log({
        'text': text,
        'url': url,
    })
    return {
        'text': text,
        'url': url,
    }
}