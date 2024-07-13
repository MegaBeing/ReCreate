import Heading from "../../components/text/Heading";

export default function ContentEvaluation(content,height,fontSize){
    let contentLines = content.split('\n')
    let n = contentLines.length
    let jscode = '';
    for(let i=0;i<n;i++)
    {
        if(contentLines[i][0] == '>'){
            //Heading
            let headingCode = Heading(contentLines[i],height,fontSize);
            jscode = jscode + '\n' + headingCode;
            height = height + (fontSize * 0.7);
        }
        else
        {
            let contentCode = `doc.setFontSize(${fontSize}).setFont(undefined,'normal');
            doc.text('${contentLines[i]}',18,${height});`;
            jscode = jscode + '\n' + contentCode;
            height = height + (fontSize * 0.4);
        }
    }
    return {
        'jscode': jscode.trim(),
        'height': height
    };
    
}
