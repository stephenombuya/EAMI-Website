import React from 'react';
import { TransportRoute } from '../../types/logistics';
import { Train, Truck, Ship, ArrowRight } from 'lucide-react';

interface RouteCardProps {
  route: TransportRoute;
  onClick: (route: TransportRoute) => void;
}

const RouteCard: React.FC<RouteCardProps> = ({ route, onClick }) => {
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
    <div
      className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300"
      onClick={() => onClick(route)}
    >
      <div className="h-48 overflow-hidden">
        <img
          src={route.image}
          alt={route.name}
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center">
            <span className="text-emerald-600">{getIcon()}</span>
            <h3 className="text-lg font-semibold ml-2">{route.name}</h3>
          </div>
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor()}`}>
            {route.status.replace('-', ' ')}
          </span>
        </div>
        
        <p className="text-gray-600 text-sm mb-4">{route.description}</p>
        
        <div className="flex items-center justify-between text-sm text-gray-500">
          <span>{route.distance}</span>
          <div className="flex items-center">
            <span>{route.connects[0]}</span>
            <ArrowRight className="w-4 h-4 mx-1" />
            <span>{route.connects[route.connects.length - 1]}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RouteCard;
