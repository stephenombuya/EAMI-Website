import React from 'react';
import { Shield, Calendar } from 'lucide-react';
import { Regulation } from '../../types/governance';

interface RegulationCardProps {
  regulation: Regulation;
  onClick: (regulation: Regulation) => void;
}

const RegulationCard: React.FC<RegulationCardProps> = ({ regulation, onClick }) => {
  const getStatusColor = () => {
    switch (regulation.status) {
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'proposed':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div 
      className="bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow duration-300"
      onClick={() => onClick(regulation)}
    >
      <div className="flex items-center justify-between mb-4">
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor()}`}>
          {regulation.status.toUpperCase()}
        </span>
        <span className="text-sm text-gray-500 flex items-center">
          <Calendar className="w-4 h-4 mr-1" />
          {regulation.effectiveDate}
        </span>
      </div>

      <h3 className="text-xl font-semibold mb-2">{regulation.title}</h3>
      <p className="text-gray-600 text-sm mb-4">{regulation.description}</p>

      <div className="flex items-center justify-between text-sm text-gray-500">
        <div className="flex items-center">
          <Shield className="w-4 h-4 mr-2" />
          <span>{regulation.authority}</span>
        </div>
        <span className="bg-gray-100 px-2 py-1 rounded-full">
          {regulation.country}
        </span>
      </div>
    </div>
  );
};

export default RegulationCard;
