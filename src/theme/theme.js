import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#1976d2', // Color principal (azul)
        },
        secondary: {
            main: '#ff4081', // Color secundario (rosa)
        },
        background: {
            default: '#f4f4f4', // Fondo claro
        },
    },
    typography: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        h1: {
            fontSize: '2.5rem',
            fontWeight: 600,
        },
        h2: {
            fontSize: '2rem',
            fontWeight: 500,
        },
    },
});

export default theme;
