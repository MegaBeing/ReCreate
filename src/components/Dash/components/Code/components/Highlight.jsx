import Highlight from 'react-highlight'
export default function Highlighter({Code}){
    return (
        <Highlight language='markdown' className='highlight'>
            {Code}
        </Highlight>
    )
}