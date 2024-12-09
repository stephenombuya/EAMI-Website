import React from 'react';
import { MapPin, Factory, Box, Activity } from 'lucide-react';
import { Mineral } from '../../types/mineral';

interface MineralDetailProps {
  mineral: Mineral;
  onClose: () => void;
}

const MineralDetail: React.FC<MineralDetailProps> = ({ mineral, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative h-64">
          <img 
            src={mineral.image} 
            alt={mineral.name}
            className="w-full h-full object-cover"
          />
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg"
          >
            ×
          </button>
        </div>
        
        <div className="p-6">
          <h2 className="text-3xl font-bold mb-4">{mineral.name}</h2>
          <p className="text-gray-600 mb-6">{mineral.description}</p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-2 flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                Locations
              </h3>
              <ul className="list-disc list-inside text-gray-600">
                {mineral.locations.map((location, index) => (
                  <li key={index}>{location}</li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2 flex items-center">
                <Box className="w-5 h-5 mr-2" />
                Industrial Uses
              </h3>
              <ul className="list-disc list-inside text-gray-600">
                {mineral.uses.map((use, index) => (
                  <li key={index}>{use}</li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <h3 className="font-semibold mb-2 flex items-center">
              <Activity className="w-5 h-5 mr-2" />
              Production Data
            </h3>
            <div className="flex items-center text-gray-600">
              <Factory className="w-5 h-5 mr-2" />
              {mineral.production.amount} ({mineral.production.year})
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MineralDetail;
