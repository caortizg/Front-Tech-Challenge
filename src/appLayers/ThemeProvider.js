import React from 'react';
import { createTheme, ThemeProvider as ThemeProviderMui } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

export const ColorModeContext = React.createContext({ toggleColorMode: () => { } });

const confTheme = {
    palette: {
        mode: 'dark',
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
};
export const rootTheme = createTheme(confTheme);

const ThemeProvider = props => {
    const [mode, setMode] = React.useState(localStorage.getItem('palette_mode') || 'light');
    const colorMode = React.useMemo(() => ({
        toggleColorMode: () => {
            setMode((prevMode) => {
                const newMode = (prevMode === 'light' ? 'dark' : 'light');
                localStorage.setItem('palette_mode', newMode);
                return newMode;
            });
        },
    }), []);
    const theme = React.useMemo(() => createTheme({
        ...confTheme,
        palette: {
            ...confTheme.palette,
            mode
        },
    }), [mode]);
    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProviderMui theme={theme}>
                <CssBaseline />
                {props.children}
            </ThemeProviderMui>
        </ColorModeContext.Provider>
    );
}
export default ThemeProvider;