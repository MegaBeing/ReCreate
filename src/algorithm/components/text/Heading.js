export default function Heading(headingContent,height,fontSize){
    let n = headingContent.length;
    let content = '';
    for(let i=2;i<n;i++){
        content = content + headingContent[i];
    }
    let jscode = `doc.setFontSize(${fontSize * 1.4})
    doc.text('${content.trim()}',10,${height})`;
    return jscode;
}