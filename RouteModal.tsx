import React from 'react';
import { TransportRoute } from '../../types/logistics';
import { Train, Truck, Ship, MapPin, Package, Calendar, ArrowRight } from 'lucide-react';

interface RouteModalProps {
  route: TransportRoute;
  onClose: () => void;
}

const RouteModal: React.FC<RouteModalProps> = ({ route, onClose }) => {
  const getIcon = () => {
    switch (route.type) {
      case 'rail':
        return <Train className="w-6 h-6" />;
      case 'road':
        return <Truck className="w-6 h-6" />;
      case 'port':
        return <Ship className="w-6 h-6" />;
      default:
        return null;
    }
  };

  const getStatusColor = () => {
    switch (route.status) {
      case 'operational':
        return 'bg-green-100 text-green-800';
      case 'under-construction':
        return 'bg-yellow-100 text-yellow-800';
      case 'planned':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative h-64">
          <img 
            src={route.image} 
            alt={route.name}
            className="w-full h-full object-cover"
          />
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100"
          >
            ×
          </button>
        </div>
        
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <span className="text-emerald-600 mr-3">{getIcon()}</span>
              <h2 className="text-2xl font-bold">{route.name}</h2>
            </div>
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor()}`}>
              {route.status.replace('-', ' ')}
            </span>
          </div>

          <p className="text-gray-600 mb-6">{route.description}</p>
          
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="flex items-center">
              <MapPin className="w-5 h-5 text-gray-400 mr-2" />
              <span>{route.distance}</span>
            </div>
            <div className="flex items-center">
              <Package className="w-5 h-5 text-gray-400 mr-2" />
              <span>{route.capacity}</span>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="font-semibold mb-3">Connection Points</h3>
            <div className="flex items-center flex-wrap gap-2">
              {route.connects.map((point, index) => (
                <React.Fragment key={point}>
                  <span className="bg-white px-3 py-1 rounded-full text-sm">
                    {point}
                  </span>
                  {index < route.connects.length - 1 && (
                    <ArrowRight className="w-4 h-4 text-gray-400" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RouteModal;