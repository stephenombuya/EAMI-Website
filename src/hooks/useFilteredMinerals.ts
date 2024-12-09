import { useMemo } from 'react';
import { mineralData } from '../data/minerals';
import { Mineral } from '../types/mineral';

export const useFilteredMinerals = (searchTerm: string, selectedCategory: string) => {
  return useMemo(() => {
    let filteredMinerals: Mineral[] = [];

    mineralData.forEach((category) => {
      if (selectedCategory === 'all' || selectedCategory === category.name) {
        filteredMinerals = [
          ...filteredMinerals,
          ...category.minerals.filter((mineral) =>
            mineral.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            mineral.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            mineral.locations.some(location => 
              location.toLowerCase().includes(searchTerm.toLowerCase())
            )
          ),
        ];
      }
    });

    return filteredMinerals;
  }, [searchTerm, selectedCategory]);
};
