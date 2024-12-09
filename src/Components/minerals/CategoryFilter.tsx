import React from 'react';
import { mineralData } from '../../data/minerals';

interface CategoryFilterProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ selectedCategory, onCategoryChange }) => {
  return (
    <div className="flex flex-wrap gap-2">
      <button
        className={`px-4 py-2 rounded-full text-sm font-medium ${
          selectedCategory === 'all'
            ? 'bg-emerald-600 text-white'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }`}
        onClick={() => onCategoryChange('all')}
      >
        All
      </button>
      {mineralData.map((category) => (
        <button
          key={category.name}
          className={`px-4 py-2 rounded-full text-sm font-medium ${
            selectedCategory === category.name
              ? 'bg-emerald-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
          onClick={() => onCategoryChange(category.name)}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
