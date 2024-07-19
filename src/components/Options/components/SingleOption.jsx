import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
export default function SingleOption({ title, codeState, onClick, syntax, curPos }) {
    const theme = createTheme({
        palette: {
            ochre: {
                main: '#000000',
            },
        },
    });
    return (
        <ThemeProvider theme={theme}>
            <Button onClick={() => {
                let bef = codeState.substr(0,curPos)
                let af = codeState.substr(curPos)
                onClick(bef + syntax + af)
            }} variant="outlined" color='ochre'>{title}</Button>
        </ThemeProvider>
    )
}