import { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import { initializeMap } from '../services/api/mapping';

export const useMapbox = (containerId: string) => {
  const mapRef = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (!mapRef.current) {
      mapRef.current = initializeMap(containerId);
    }

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, [containerId]);

  return mapRef.current;
};
