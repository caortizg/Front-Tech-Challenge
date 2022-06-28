import * as React from 'react';
import MapGl from 'react-map-gl';
import { MAP_ACCESS_TOKEN } from '../../config/entrypoint';

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