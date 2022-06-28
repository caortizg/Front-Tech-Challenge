import React from 'react';
import { createTheme, ThemeProvider as ThemeProviderMui } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';



export const rootTheme = createTheme({
    palette: {
        mode: 'light',
        background: {
            default: "#FFFFFF"
        },
        primary: {
            light: '#ffe7a5',
            main: '#dcb575',
            dark: '#a88548',
            contrastText: '#000000',
        },
        secondary: {
            light: '#929e96',
            main: '#647068',
            dark: '#3a453e',
            contrastText: '#ffffff',
        },
    },
    typography: {
        useNextVariants: true,
    },
});

const ThemeProvider = props => {
    return (
        <ThemeProviderMui theme={rootTheme}>
            <CssBaseline />
            {props.children}
        </ThemeProviderMui>
    );
}
export default ThemeProvider;