export default function Points(code, height, fontSize) {
    let n = code.length;
    let content = '';
    for(let i=2;i<n;i++){
        content = content + code[i];
    }
    let jscode = `doc.setFontSize(${fontSize * 0.8}).setFont(undefined,'normal')
    doc.circle(23, ${height-(fontSize * 0.08)},1,'F');
    doc.text('${content.trim()}',26,${height})`;
    return jscode;
}