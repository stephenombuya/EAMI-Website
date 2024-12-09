import React, { useState, lazy, Suspense } from 'react';
import { transportRoutes, transportHubs } from '../data/logistics';
import RouteCard from '../components/logistics/RouteCard';
import HubCard from '../components/logistics/HubCard';
import RouteModal from '../components/logistics/RouteModal';
import HubModal from '../components/logistics/HubModal';
import FilterBar from '../components/logistics/FilterBar';
import SearchBar from '../components/logistics/SearchBar';
import SortSelect from '../components/logistics/SortSelect';
import { useLogisticsFilter } from '../hooks/useLogisticsFilter';
import { TransportRoute, TransportHub } from '../types/logistics';
import { Train, Anchor, Map as MapIcon, List } from 'lucide-react';

// Lazy load the map component
const LogisticsMap = lazy(() => import('../components/logistics/LogisticsMap'));

const sortOptions = [
  { value: 'name', label: 'Sort by Name' },
  { value: 'type', label: 'Sort by Type' },
  { value: 'capacity', label: 'Sort by Capacity' },
];

const Logistics = () => {
  const [selectedTab, setSelectedTab] = useState<'routes' | 'hubs'>('routes');
  const [selectedRoute, setSelectedRoute] = useState<TransportRoute | null>(null);
  const [selectedHub, setSelectedHub] = useState<TransportHub | null>(null);
  const [selectedRouteType, setSelectedRouteType] = useState('all');
  const [selectedHubType, setSelectedHubType] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [viewMode, setViewMode] = useState<'list' | 'map'>('list');

  const routeTypes = ['road', 'rail', 'port'];
  const hubTypes = ['port', 'depot', 'terminal'];

  const filteredRoutes = useLogisticsFilter(
    transportRoutes,
    searchTerm,
    sortBy,
    selectedRouteType
  );

  const filteredHubs = useLogisticsFilter(
    transportHubs,
    searchTerm,
    sortBy,
    selectedHubType
  );

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-4xl font-bold">Logistics Network</h1>
            <div className="flex space-x-2">
              <button
                className={`p-2 rounded-lg ${
                  viewMode === 'list'
                    ? 'bg-emerald-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-50'
                }`}
                onClick={() => setViewMode('list')}
                title="List View"
              >
                <List className="w-5 h-5" />
              </button>
              <button
                className={`p-2 rounded-lg ${
                  viewMode === 'map'
                    ? 'bg-emerald-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-50'
                }`}
                onClick={() => setViewMode('map')}
                title="Map View"
              >
                <MapIcon className="w-5 h-5" />
              </button>
            </div>
          </div>
          
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <SearchBar
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
              placeholder={`Search ${selectedTab}...`}
            />
            <FilterBar
              selectedType={selectedTab === 'routes' ? selectedRouteType : selectedHubType}
              onTypeChange={selectedTab === 'routes' ? setSelectedRouteType : setSelectedHubType}
              types={selectedTab === 'routes' ? routeTypes : hubTypes}
              category={selectedTab === 'routes' ? 'route' : 'hub'}
            />
            <SortSelect
              value={sortBy}
              onChange={setSortBy}
              options={sortOptions}
            />
          </div>
        </div>

        {viewMode === 'map' ? (
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <Suspense fallback={<div className="w-full h-[500px] flex items-center justify-center bg-gray-100 rounded-lg">Loading map...</div>}>
              <LogisticsMap
                routes={filteredRoutes}
                hubs={filteredHubs}
                onSelectRoute={setSelectedRoute}
                onSelectHub={setSelectedHub}
              />
            </Suspense>
          </div>
        ) : (
          <>
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

            {filteredRoutes.length === 0 && filteredHubs.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">
                  No {selectedTab} found matching your criteria.
                </p>
              </div>
            )}
          </>
        )}
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
