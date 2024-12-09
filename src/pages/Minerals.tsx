import React, { useState } from 'react';
import MineralCard from '../components/minerals/MineralCard';
import MineralDetail from '../components/minerals/MineralDetail';
import MineralSearch from '../components/minerals/MineralSearch';
import CategoryFilter from '../components/minerals/CategoryFilter';
import { useFilteredMinerals } from '../hooks/useFilteredMinerals';
import { Mineral } from '../types/mineral';

const Minerals = () => {
  const [selectedMineral, setSelectedMineral] = useState<Mineral | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredMinerals = useFilteredMinerals(searchTerm, selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-6">East African Minerals</h1>
          <div className="space-y-4">
            <MineralSearch 
              searchTerm={searchTerm} 
              onSearchChange={setSearchTerm} 
            />
            <CategoryFilter 
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
            />
          </div>
        </div>

        {filteredMinerals.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMinerals.map((mineral) => (
              <MineralCard
                key={mineral.id}
                mineral={mineral}
                onClick={setSelectedMineral}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No minerals found matching your criteria.
            </p>
          </div>
        )}
      </div>

      {selectedMineral && (
        <MineralDetail
          mineral={selectedMineral}
          onClose={() => setSelectedMineral(null)}
        />
      )}
    </div>
  );
};

export default Minerals;
