import { useState } from 'react';
import ReactMapGL from 'react-map-gl';

function Map() {
  const [viewport, setViewport] = useState({
    width: '100vh',
    height: '100vh',
    latitude: 37.7577, // Initial latitude
    longitude: -122.4376, // Initial longitude
    zoom: 8, // Initial zoom level
  });

  return (
    <ReactMapGL
      {...viewport}
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
      onViewportChange={(viewport) => setViewport(viewport)}
    />
  );
}

export default Map;
