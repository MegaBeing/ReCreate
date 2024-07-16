import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
export default function SingleOption({ title, codeState, onClick, syntax }) {
    const theme = createTheme({
        palette: {
            ochre: {
                main: '#586266',
                light: '#43494a',
                dark: '#43494a',
                contrastText: '#e3e3e3',
            },
        },
    });
    return (
        <ThemeProvider theme={theme}>
            <Button onClick={() => onClick(codeState + '\n' + syntax)} variant="contained" color='ochre'>{title}</Button>
        </ThemeProvider>
    )
}