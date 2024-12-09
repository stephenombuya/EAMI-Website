import mapboxgl from 'mapbox-gl';
import { API_CONFIG } from './config';

mapboxgl.accessToken = API_CONFIG.MAPBOX_TOKEN;

export const initializeMap = (container: string) => {
  return new mapboxgl.Map({
    container,
    style: 'mapbox://styles/mapbox/satellite-streets-v12',
    center: [35, -1.5], // Center on East Africa
    zoom: 5,
  });
};

export const addMineralLayer = (map: mapboxgl.Map, data: any) => {
  map.addLayer({
    id: 'mineral-deposits',
    type: 'circle',
    source: {
      type: 'geojson',
      data,
    },
    paint: {
      'circle-radius': 8,
      'circle-color': '#FF0000',
      'circle-opacity': 0.7,
    },
  });
};

export const addTransportationLayer = (map: mapboxgl.Map, routes: any) => {
  map.addLayer({
    id: 'transportation-routes',
    type: 'line',
    source: {
      type: 'geojson',
      data: routes,
    },
    paint: {
      'line-color': '#0080FF',
      'line-width': 3,
      'line-opacity': 0.8,
    },
  });
};
