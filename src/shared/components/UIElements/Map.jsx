import React, { useRef, useEffect } from 'react';
import tt from '@tomtom-international/web-sdk-maps';
import '@tomtom-international/web-sdk-maps/dist/maps.css';
import './style/Map.css';

const Map = ({ center, zoom, className, style }) => {
  const mapRef = useRef();

  useEffect(() => {
    if (!mapRef.current) return;

    const map = tt.map({
      key: 'QIFgsVZMw9ywGqdJEDDpJnUkaY3TWtSQ',
      container: mapRef.current,
      center: [center.lon, center.lat],
      zoom,
    });

    const marker = new tt.Marker()
      .setLngLat([center.lon, center.lat])
      .addTo(map);

    return () => map.remove();
  }, [center, zoom]);

  return (
    <div
      ref={mapRef}
      className={`map ${className}`}
      style={style}
    ></div>
  );
};

export default Map;
