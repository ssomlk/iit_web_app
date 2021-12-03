import "mapbox-gl/dist/mapbox-gl.css";
import { useState, useEffect } from 'react';
import ReactMapGL, { Marker, NavigationControl } from 'react-map-gl';
import { getCenter } from 'geolib';
import $ from 'jquery';

import styles from './Map.module.css';

function Map({ locationDetails }) {
    const [innerWidth, setInnerWidth] = useState(-1);
    const coordinates = locationDetails.map((result) => ({
        longitude: result.long,
        latitude: result.lat
    }));
    const center = getCenter(coordinates);
    const [viewport, setViewport] = useState({
        height: '100%',
        width: '100%',
        latitude: center.latitude,
        longitude: center.longitude,
        zoom: 12
    });

    function getWindowInnerHeight() {
        setInnerWidth($(window).innerWidth());
    }

    useEffect(() => {
        $(window).on(
            'load resize orientationchange',
            getWindowInnerHeight
        );
        getWindowInnerHeight();
        return () => {
            $(window).off('load resize orientationchange');
        }
    },[]);

    useEffect(() => {
        setViewport(state => ({
           ...state,
           width: `${innerWidth}px`
        }));
     }, [innerWidth]);

    const navControlStyle= {
        right: 10,
        top: 10
    };

    return (
        <ReactMapGL
            scrollZoom={false}
            mapStyle={process.env.NEXT_PUBLIC_MAPBOX_STYLE}
            mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
            {...viewport}
            onViewportChange={(nextviewport) => setViewport(nextviewport)}
        >
            <NavigationControl style={navControlStyle} />
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
