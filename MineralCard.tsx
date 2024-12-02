import React from 'react';
import { MapPin, Factory } from 'lucide-react';
import { Mineral } from '../../types/mineral';

interface MineralCardProps {
  mineral: Mineral;
  onClick: (mineral: Mineral) => void;
}

const MineralCard: React.FC<MineralCardProps> = ({ mineral, onClick }) => {
  return (
    <div 
      className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300"
      onClick={() => onClick(mineral)}
    >
      <div className="h-48 overflow-hidden">
        <img 
          src={mineral.image} 
          alt={mineral.name}
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{mineral.name}</h3>
        <p className="text-gray-600 text-sm mb-4">{mineral.description}</p>
        
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <MapPin className="w-4 h-4 mr-2" />
          <span>{mineral.locations[0]}</span>
        </div>
        
        <div className="flex items-center text-sm text-gray-500">
          <Factory className="w-4 h-4 mr-2" />
          <span>{mineral.production.amount} ({mineral.production.year})</span>
        </div>
      </div>
    </div>
  );
};

export default MineralCard;