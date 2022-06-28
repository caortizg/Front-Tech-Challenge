import * as React from 'react';
import MapGl from 'react-map-gl';
import { MAP_ACCESS_TOKEN } from '../../config/entrypoint';
import mapboxgl from "mapbox-gl"; // This is a dependency of react-map-gl even if you didn't explicitly install it
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default;

const Map = (props) => {
    return (
        <MapGl
            mapStyle="mapbox://styles/mapbox/streets-v9"
            mapboxAccessToken={MAP_ACCESS_TOKEN}
            {...props}
        />
    );
}
export default Map;