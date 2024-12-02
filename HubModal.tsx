import React from 'react';
import { TransportHub } from '../../types/logistics';
import { MapPin, Package, List, Building } from 'lucide-react';

interface HubModalProps {
  hub: TransportHub;
  onClose: () => void;
}

const HubModal: React.FC<HubModalProps> = ({ hub, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative h-64">
          <img 
            src={hub.image} 
            alt={hub.name}
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
            <h2 className="text-2xl font-bold">{hub.name}</h2>
            <span className="px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium">
              {hub.type}
            </span>
          </div>

          <p className="text-gray-600 mb-6">{hub.description}</p>
          
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="flex items-center">
              <MapPin className="w-5 h-5 text-gray-400 mr-2" />
              <span>{hub.location}</span>
            </div>
            <div className="flex items-center">
              <Package className="w-5 h-5 text-gray-400 mr-2" />
              <span>{hub.capacity}</span>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-4">
            <div className="flex items-center mb-3">
              <Building className="w-5 h-5 text-gray-400 mr-2" />
              <h3 className="font-semibold">Facilities</h3>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {hub.facilities.map((facility) => (
                <div 
                  key={facility}
                  className="flex items-center bg-white px-3 py-2 rounded-lg"
                >
                  <List className="w-4 h-4 text-emerald-600 mr-2" />
                  <span className="text-sm">{facility}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HubModal;