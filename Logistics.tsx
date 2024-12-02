import React, { useState } from 'react';
import { transportRoutes, transportHubs } from '../data/logistics';
import RouteCard from '../components/logistics/RouteCard';
import HubCard from '../components/logistics/HubCard';
import RouteModal from '../components/logistics/RouteModal';
import HubModal from '../components/logistics/HubModal';
import FilterBar from '../components/logistics/FilterBar';
import { TransportRoute, TransportHub } from '../types/logistics';
import { Train, Anchor } from 'lucide-react';

const Logistics = () => {
  const [selectedTab, setSelectedTab] = useState<'routes' | 'hubs'>('routes');
  const [selectedRoute, setSelectedRoute] = useState<TransportRoute | null>(null);
  const [selectedHub, setSelectedHub] = useState<TransportHub | null>(null);
  const [selectedRouteType, setSelectedRouteType] = useState('all');
  const [selectedHubType, setSelectedHubType] = useState('all');

  const routeTypes = ['road', 'rail', 'port'];
  const hubTypes = ['port', 'depot', 'terminal'];

  const filteredRoutes = transportRoutes.filter(
    route => selectedRouteType === 'all' || route.type === selectedRouteType
  );

  const filteredHubs = transportHubs.filter(
    hub => selectedHubType === 'all' || hub.type === selectedHubType
  );

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-6">Logistics Network</h1>
          
          <div className="flex space-x-4 mb-6">
            <button
              className={`flex items-center px-4 py-2 rounded-lg ${
                selectedTab === 'routes'
                  ? 'bg-emerald-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-50'
              }`}
              onClick={() => setSelectedTab('routes')}
            >
              <Train className="w-5 h-5 mr-2" />
              Transport Routes
            </button>
            <button
              className={`flex items-center px-4 py-2 rounded-lg ${
                selectedTab === 'hubs'
                  ? 'bg-emerald-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-50'
              }`}
              onClick={() => setSelectedTab('hubs')}
            >
              <Anchor className="w-5 h-5 mr-2" />
              Transport Hubs
            </button>
          </div>

          {selectedTab === 'routes' && (
            <FilterBar
              selectedType={selectedRouteType}
              onTypeChange={setSelectedRouteType}
              types={routeTypes}
              category="route"
            />
          )}

          {selectedTab === 'hubs' && (
            <FilterBar
              selectedType={selectedHubType}
              onTypeChange={setSelectedHubType}
              types={hubTypes}
              category="hub"
            />
          )}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {selectedTab === 'routes' &&
            filteredRoutes.map((route) => (
              <RouteCard
                key={route.id}
                route={route}
                onClick={setSelectedRoute}
              />
            ))}
          {selectedTab === 'hubs' &&
            filteredHubs.map((hub) => (
              <HubCard
                key={hub.id}
                hub={hub}
                onClick={setSelectedHub}
              />
            ))}
        </div>
      </div>

      {selectedRoute && (
        <RouteModal
          route={selectedRoute}
          onClose={() => setSelectedRoute(null)}
        />
      )}

      {selectedHub && (
        <HubModal
          hub={selectedHub}
          onClose={() => setSelectedHub(null)}
        />
      )}
    </div>
  );
};

export default Logistics;