import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import { Icon, LatLngExpression } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { TransportRoute, TransportHub } from '../../types/logistics';

interface LogisticsMapProps {
  routes: TransportRoute[];
  hubs: TransportHub[];
  onSelectRoute?: (route: TransportRoute) => void;
  onSelectHub?: (hub: TransportHub) => void;
}

// Define map locations
const locations = {
  'Port of Mombasa': [-4.043477, 39.659769],
  'Nairobi ICD': [-1.319167, 36.925833],
  'Kampala': [0.347596, 32.582520],
  'Kigali': [-1.970579, 30.104429]
} as const;

// Create custom icons
const hubIcon = new Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

const LogisticsMap: React.FC<LogisticsMapProps> = ({ routes, hubs, onSelectRoute, onSelectHub }) => {
  const getRouteCoordinates = (route: TransportRoute): LatLngExpression[] => {
    return route.connects
      .map(location => locations[location as keyof typeof locations])
      .filter(Boolean) as LatLngExpression[];
  };

  const getHubCoordinates = (hub: TransportHub): LatLngExpression | null => {
    const locationName = hub.location.split(',')[0].trim();
    return locations[locationName as keyof typeof locations] || null;
  };

  return (
    <MapContainer
      center={[-1.5, 35]}
      zoom={6}
      className="w-full h-[500px] rounded-lg shadow-md"
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {/* Render Routes */}
      {routes.map((route) => {
        const coordinates = getRouteCoordinates(route);
        return coordinates.length > 1 ? (
          <React.Fragment key={route.id}>
            <Polyline
              positions={coordinates}
              color={route.type === 'rail' ? '#059669' : '#2563eb'}
              weight={3}
              opacity={0.8}
              eventHandlers={{
                click: () => onSelectRoute?.(route)
              }}
            >
              <Popup>
                <div className="text-sm">
                  <h3 className="font-semibold">{route.name}</h3>
                  <p className="text-gray-600">{route.type}</p>
                  <p className="text-gray-600">{route.distance}</p>
                </div>
              </Popup>
            </Polyline>
          </React.Fragment>
        ) : null;
      })}

      {/* Render Hubs */}
      {hubs.map((hub) => {
        const coordinates = getHubCoordinates(hub);
        if (!coordinates) return null;
        
        return (
          <Marker
            key={hub.id}
            position={coordinates}
            icon={hubIcon}
            eventHandlers={{
              click: () => onSelectHub?.(hub)
            }}
          >
            <Popup>
              <div className="text-sm">
                <h3 className="font-semibold">{hub.name}</h3>
                <p className="text-gray-600">{hub.type}</p>
                <p className="text-gray-600">{hub.capacity}</p>
              </div>
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
};

export default LogisticsMap;
