import React from 'react';
import { MapPin, Factory, Box, Activity, X } from 'lucide-react';
import { Mineral } from '../../types/mineral';

interface MineralDetailProps {
  mineral: Mineral;
  onClose: () => void;
}

const MineralDetail: React.FC<MineralDetailProps> = ({ mineral, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <img 
            src={mineral.image} 
            alt={mineral.name}
            className="w-full h-72 object-cover rounded-t-lg"
          />
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
            <h2 className="text-3xl font-bold text-white">{mineral.name}</h2>
          </div>
        </div>
        
        <div className="p-6">
          <p className="text-gray-600 mb-6">{mineral.description}</p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-2 flex items-center text-gray-800">
                <MapPin className="w-5 h-5 mr-2 text-emerald-600" />
                Locations
              </h3>
              <ul className="space-y-2">
                {mineral.locations.map((location, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-emerald-600 rounded-full mr-2"></span>
                    {location}
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2 flex items-center text-gray-800">
                <Box className="w-5 h-5 mr-2 text-emerald-600" />
                Industrial Uses
              </h3>
              <ul className="space-y-2">
                {mineral.uses.map((use, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-emerald-600 rounded-full mr-2"></span>
                    {use}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <h3 className="font-semibold mb-2 flex items-center text-gray-800">
              <Activity className="w-5 h-5 mr-2 text-emerald-600" />
              Production Data
            </h3>
            <div className="flex items-center text-gray-600">
              <Factory className="w-5 h-5 mr-2 text-emerald-600" />
              {mineral.production.amount} ({mineral.production.year})
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MineralDetail;
