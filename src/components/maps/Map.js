import "mapbox-gl/dist/mapbox-gl.css";
import { useState } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import { getCenter } from 'geolib';

import styles from './Map.module.css';

function Map({ locationDetails }) {
    const [selectedLocation, setSelectedLocation] = useState({});
    const coordinates = locationDetails.map((result) => ({
        longitude: result.long,
        latitude: result.lat
    }));
    const center = getCenter(coordinates);
    const [viewport, setViewport] = useState({
        width: '100%',
        height: '100%',
        latitude: center.latitude,
        longitude: center.longitude,
        zoom: 12
    });

    return (
        <ReactMapGL
            mapStyle={process.env.NEXT_PUBLIC_MAPBOX_STYLE}
            mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
            {...viewport}
            onViewportChange={(nextviewport) => setViewport(nextviewport)}
        >
            {locationDetails?.map(result => (
                <div key={result.long}>
                    <Marker
                        longitude={result.long}
                        latitude={result.lat}
                    >
                        <div className={styles.pin}></div>
                    </Marker>
                </div>
            ))}
        </ReactMapGL>
    )
}

export default Map;
