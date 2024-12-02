import React from 'react';
import { Filter } from 'lucide-react';

interface FilterBarProps {
  selectedType: string;
  onTypeChange: (type: string) => void;
  types: string[];
  category: 'route' | 'hub';
}

const FilterBar: React.FC<FilterBarProps> = ({ selectedType, onTypeChange, types, category }) => {
  return (
    <div className="flex items-center space-x-4 mb-6 bg-white p-4 rounded-lg shadow-sm">
      <div className="flex items-center text-gray-500">
        <Filter className="w-5 h-5 mr-2" />
        <span className="text-sm font-medium">Filter by {category} type:</span>
      </div>
      <div className="flex space-x-2">
        <button
          className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
            selectedType === 'all'
              ? 'bg-emerald-600 text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
          onClick={() => onTypeChange('all')}
        >
          All
        </button>
        {types.map((type) => (
          <button
            key={type}
            className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
              selectedType === type
                ? 'bg-emerald-600 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
            onClick={() => onTypeChange(type)}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterBar;