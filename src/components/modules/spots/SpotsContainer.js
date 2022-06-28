import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import * as React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import TpDrawerWithToolbarLeftTransparent from '../../templates/TpDrawerWithToolbarLeftTransparent';
import SpotsMap from './SpotsMap';
import { Box } from '@mui/system';
import SpotsFilters from './SpotsFilters';
import { iniSpotsAsync, selectFilteredData, selectFilters } from './spotsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

export default function SpotsContainer() {
    const filters = useSelector(selectFilters);
    const data = useSelector(selectFilteredData);
    const dispatch = useDispatch();
    const { t } = useTranslation();

    React.useEffect(() => {
        dispatch(iniSpotsAsync())
    }, [true]);

    return (<>
        <Box sx={{ display: 'flex', width: "100%", height: "100%", position: "fixed" }}>
            <SpotsMap />
        </Box>
        <TpDrawerWithToolbarLeftTransparent
            ToolbarTitle={t("spots.spot_filters")}
            ToolbarContent={({ handleDrawerOpen, open, ...props }) => {
                return (
                    <Box >
                        <AppBar position="static" sx={{ width: "auto" }} enableColorOnDark>
                            <Toolbar variant="dense">
                                <IconButton edge="start" color="inherit" aria-label="menu"
                                    onClick={handleDrawerOpen}
                                    sx={{ mr: 2, ...(open && { display: 'none' }) }}
                                >
                                    <MenuIcon />
                                </IconButton>
                                <Typography variant="h6" color="inherit" component="div">
                                    {t("spots.results_title_1").replace('{{n}}', (data && data.length || '')).replace('{{place}}', (filters.city && filters.city.name))}
                                </Typography>
                            </Toolbar>
                        </AppBar>
                    </Box>
                );
            }}
            DrawerContent={(
                <Box sx={{ padding: 1 }}>
                    <SpotsFilters />
                </Box>
            )}
        >
        </TpDrawerWithToolbarLeftTransparent>
    </>);
}
