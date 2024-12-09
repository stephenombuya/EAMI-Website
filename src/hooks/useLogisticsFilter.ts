import { useMemo } from 'react';
import { TransportRoute, TransportHub } from '../types/logistics';

export const useLogisticsFilter = (
  items: TransportRoute[] | TransportHub[],
  searchTerm: string,
  sortBy: string,
  filterType: string
) => {
  return useMemo(() => {
    let filtered = [...items];

    // Apply type filter
    if (filterType !== 'all') {
      filtered = filtered.filter((item) => item.type === filterType);
    }

    // Apply search
    if (searchTerm) {
      filtered = filtered.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Apply sorting
    switch (sortBy) {
      case 'name':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'type':
        filtered.sort((a, b) => a.type.localeCompare(b.type));
        break;
      case 'capacity':
        filtered.sort((a, b) => a.capacity.localeCompare(b.capacity));
        break;
      default:
        break;
    }

    return filtered;
  }, [items, searchTerm, sortBy, filterType]);
};
