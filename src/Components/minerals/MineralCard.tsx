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
      className="group bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300"
      onClick={() => onClick(mineral)}
    >
      <div className="relative h-56 overflow-hidden">
        <img 
          src={mineral.image} 
          alt={mineral.name}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <h3 className="absolute bottom-4 left-4 text-xl font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {mineral.name}
        </h3>
      </div>
      <div className="p-4">
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{mineral.description}</p>
        
        <div className="space-y-2">
          <div className="flex items-center text-sm text-gray-500">
            <MapPin className="w-4 h-4 mr-2 text-emerald-600" />
            <span className="truncate">{mineral.locations[0]}</span>
          </div>
          
          <div className="flex items-center text-sm text-gray-500">
            <Factory className="w-4 h-4 mr-2 text-emerald-600" />
            <span>{mineral.production.amount} ({mineral.production.year})</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MineralCard;
