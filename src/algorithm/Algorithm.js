import Section from "./components/Section.js";
// todo: Apply Heading
export default function Convertion(code) {
    let lines = code.split('#')
    let jscode = "";
    let height = 10;
    for (let i = 1; i < lines.length; i++) {
        let curr = "";
        // console.log(lines[i]);
        if (lines[i][0] === 'S') {
            // console.log(`inside the if \n${lines[i][0]}`)
            curr = Section(lines[i], height);
        }
        else if (lines[i][0] === '/') {
            height=height + 20;
        }
        jscode += curr + '\n';
    }
    return jscode;
}