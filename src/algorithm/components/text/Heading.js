export default function Heading(headingContent,height,fontSize){
    let n = headingContent.length;
    let content = '';
    for(let i=2;i<n;i++){
        content = content + headingContent[i];
    }
    let jscode = `doc.setFontSize(${fontSize * 1.4}).setFont(undefined,'bold')
    doc.text('${content.trim()}',10,${height});
    doc.line(10,${height+(fontSize * 0.2)},200,${height+(fontSize * 0.2)})`;
    return jscode;
}