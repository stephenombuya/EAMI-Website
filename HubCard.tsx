import React from 'react';
import { TransportHub } from '../../types/logistics';
import { MapPin, Package } from 'lucide-react';

interface HubCardProps {
  hub: TransportHub;
  onClick: (hub: TransportHub) => void;
}

const HubCard: React.FC<HubCardProps> = ({ hub, onClick }) => {
  return (
    <div
      className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300"
      onClick={() => onClick(hub)}
    >
      <div className="h-48 overflow-hidden">
        <img
          src={hub.image}
          alt={hub.name}
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold">{hub.name}</h3>
          <span className="px-2 py-1 bg-emerald-100 text-emerald-800 rounded-full text-xs font-medium">
            {hub.type}
          </span>
        </div>
        
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <MapPin className="w-4 h-4 mr-2" />
          <span>{hub.location}</span>
        </div>
        
        <div className="flex items-center text-sm text-gray-500 mb-4">
          <Package className="w-4 h-4 mr-2" />
          <span>{hub.capacity}</span>
        </div>
        
        <p className="text-gray-600 text-sm">{hub.description}</p>
      </div>
    </div>
  );
};

export default HubCard;