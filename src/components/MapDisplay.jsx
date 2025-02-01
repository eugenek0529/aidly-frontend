import React, { useEffect, useRef } from 'react';
import * as maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import './MapDisplay.css';

// Example location prop type:
// locations = [
//   { id: 1, lat: 34.0522, lng: -118.2437, title: "Event Name" },
//   ...
// ]

function MapDisplay({ locations = [] }) {
  const mapContainer = useRef(null); // refs the DOM element where map will be rendered
  const map = useRef(null); // holds actual maplibre map instance
  const markers = useRef({}); // keeps track of all markers currently on the map

  useEffect(() => {
    // map initialization
    const MAPTILER_KEY = import.meta.env.VITE_MAPTILER_KEY;
    
    if (!MAPTILER_KEY || map.current) return;

    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: `https://api.maptiler.com/maps/streets/style.json?key=${MAPTILER_KEY}`,
      center: [-118.2437, 34.0522],
      zoom: 10
    });

    map.current.addControl(new maplibregl.NavigationControl(), 'top-right');

    const handleResize = () => {
      if (map.current) {
        map.current.resize();
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (!map.current) return;

    Object.values(markers.current).forEach(marker => marker.remove());
    markers.current = {};

    locations.forEach(location => {
      const el = document.createElement('div');
      el.className = 'map-marker';

      const popup = new maplibregl.Popup({ offset: 25 })
        .setHTML(`<h3>${location.title}</h3>`);

      const marker = new maplibregl.Marker(el)
        .setLngLat([location.lng, location.lat])
        .setPopup(popup)
        .addTo(map.current);

      markers.current[location.id] = marker;
    });

    if (locations.length > 0) {
      const bounds = new maplibregl.LngLatBounds();
      locations.forEach(location => {
        bounds.extend([location.lng, location.lat]);
      });
      
      map.current.fitBounds(bounds, {
        padding: 50,
        maxZoom: 15
      });
    }
  }, [locations]);

  return (
    <div className="map-container-wrapper">
      <div ref={mapContainer} className="map-container" />
    </div>
  );
}

export default MapDisplay;