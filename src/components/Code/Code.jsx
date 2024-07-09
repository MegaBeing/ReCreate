import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
export default function Code() {
    return (
        <div className="code">
            <form id='download-form'action="#" method="post">
                <Button variant="outlined">download</Button>
            </form>
            <textarea id='code-area'>
            </textarea >
        </div>
    )
}