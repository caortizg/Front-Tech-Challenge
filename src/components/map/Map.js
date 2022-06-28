import * as React from 'react';
import MapGl from 'react-map-gl';
import { MAP_ACCESS_TOKEN } from '../../config/entrypoint';
import mapboxgl from "mapbox-gl"; // This is a dependency of react-map-gl even if you didn't explicitly install it
import { useTheme } from '@emotion/react';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default;

const Map = (props) => {
    const theme = useTheme();
    const idStyle = theme.palette.mode === 'dark' ? 'dark-v10' : 'streets-v9';
    return (
        <MapGl
            mapStyle={`mapbox://styles/mapbox/${idStyle}`}
            mapboxAccessToken={MAP_ACCESS_TOKEN}
            {...props}
        />
    );
}
export default Map;