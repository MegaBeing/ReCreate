import Heading from "../../components/text/Heading";
import Points from "../../components/text/Points";

export default function ContentEvaluation(content,height,fontSize){
    let contentLines = content.split('\n')
    let n = contentLines.length
    let jscode = '';
    let LPoint = false;
    for(let i=0;i<n;i++)
    {
        if(contentLines[i][0] == '>'){
            //Heading
            let headingCode = Heading(contentLines[i],height,fontSize);
            jscode = jscode + '\n' + headingCode;
            height = height + (fontSize * 0.7);
        }
        else if(contentLines[i][0] == '*')
        {
            //Points
            let pointCode = Points(contentLines[i],height,fontSize)
            jscode = jscode + '\n' + pointCode;
            height = height + (fontSize * 0.35);
            LPoint = true;
        }
        else
        {
            if(LPoint)
            {
                height = height + (fontSize * 0.2);
                LPoint = !LPoint
            }
            let contentCode = `doc.setFontSize(${fontSize}).setFont(undefined,'normal');
            doc.text('${contentLines[i]}',18,${height},{maxWidth:175});`;
            jscode = jscode + '\n' + contentCode;
            height = height + (fontSize * 0.4);
        }
    }
    return {
        'jscode': jscode.trim(),
        'height': height
    };
    
}
