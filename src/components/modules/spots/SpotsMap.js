import * as React from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import Map from '../../map/Map';
import { MapProvider, GeolocateControl, Marker, NavigationControl, ScaleControl, useMap } from 'react-map-gl';
import { useSelector } from 'react-redux';
import { groupByCoordinates, selectFilteredData } from './spotsSlice';
import SpotsDialog from './SpotsDialog';

const calculateMidpoint = (points) => {
    let maxLo = null; let minLo = null;
    let maxLa = null; let minLa = null;
    points.forEach(cor => {
        maxLo = (maxLo === null && cor[0]) || (maxLo > cor[0] ? maxLo : cor[0]);
        minLo = (minLo === null && cor[0]) || (minLo < cor[0] ? minLo : cor[0]);
        maxLa = (maxLa === null && cor[1]) || (maxLa > cor[1] ? maxLa : cor[1]);
        minLa = (minLa === null && cor[1]) || (minLa < cor[1] ? minLa : cor[1]);
    });
    const longitude = (minLo + (maxLo - minLo) / 2)
    const latitude = (minLa + (maxLa - minLa) / 2)
    return [longitude, latitude]
}


function NavigateButton({ center, zoom }) {
    const { myMapA } = useMap();
    myMapA && myMapA.flyTo({ center, zoom });
    return null
}

export default function App() {
    const data = useSelector(selectFilteredData);
    const [idsSelectedSpot, setIdsSelectedSpot] = React.useState(null);

    const zoom = 13
    const midpoint = data && data.length && calculateMidpoint(data.map(spot => spot.location.coordinates)) || null;
    const dataGroupByLocation = groupByCoordinates(data);

    const handleClickOpen = (spotIds) => {
        setIdsSelectedSpot(spotIds);
    };

    const handleClose = () => {
        setIdsSelectedSpot(null);
    };

    return (
        <MapProvider>
            <Map id="myMapA" initialViewState={{ longitude: -99.19923449999999, latitude: 19.4378895, zoom }} >
                <GeolocateControl style={{ marginTop: "100px" }} />
                <NavigationControl />
                <ScaleControl />
                {dataGroupByLocation.map(groupedSpots => {
                    const ids = groupedSpots.map(v => v.id);
                    return (<Marker
                        key={`spot_${ids.join('_')}`}
                        longitude={groupedSpots[0].location.coordinates[0]}
                        latitude={groupedSpots[0].location.coordinates[1]}
                        anchor="bottom"
                        onClick={() => handleClickOpen(ids)}
                    />)
                })}
                <SpotsDialog onClose={handleClose} open={!!idsSelectedSpot && !!idsSelectedSpot.length} spotIds={idsSelectedSpot || []} />
            </Map>
            {midpoint && <NavigateButton center={midpoint} zoom={zoom} />}
        </MapProvider>
    )
}