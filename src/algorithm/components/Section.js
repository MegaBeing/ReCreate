// todo: Apply Arguments Patch
export default function Section(code,height)
{
    let words = code;
    let title = '';
    let argPos = 2;
    // console.log(code)
    let curlyCounter = 0;
    for(let i=2;i<words.length;i++)
    {
        if(words[i] == '{' || words[i] == '}')
        {
            argPos++;
            if(words[i] == '{')
                curlyCounter++;
            else
                curlyCounter--;
            continue
        }
        if(curlyCounter==0 && (words[i] == ' ' || words[i] == '\n'))
        {
            argPos++;
            break;
        }
        else{
            title = title + words[i];
            argPos++;
        }
    }
    let arg = '';
    let contentPos = argPos+1;
    for(let i = argPos+1; i<words.length;i++)
    {
        if(words[i] == '<' || words[i] == '>')
        {
            contentPos++;
            continue
        }
        if(words[i] == ' ' || words[i] == '\n')
        {
            contentPos++;
            break;
        }
        else
        {
            arg = arg + words[i];
            contentPos++;
        }
    }
    let content = '';
    for(let i=contentPos;i<words.length;i++){
        // console.log(`content:> ${words[i]}`)
        content = content + words[i];
    }
    // console.log(content.trim())
    let jscode = `doc.text('${title}',10, ${height});
    doc.text('${content.trim()}',12, ${height+10});
    `;
    // console.log(`JScode:> ${jscode}`)
    return jscode;
}