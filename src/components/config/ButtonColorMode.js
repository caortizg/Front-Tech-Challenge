import Brightness7Icon from '@mui/icons-material/Brightness7';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import { IconButton } from '@mui/material';
import React from 'react';
import { ColorModeContext } from '../../appLayers/ThemeProvider';
import { useTheme } from '@emotion/react';

const ButtonColorMode = () => {
    const theme = useTheme();
    const colorMode = React.useContext(ColorModeContext);
    return (
        <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
            {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
    );
}

export default ButtonColorMode;