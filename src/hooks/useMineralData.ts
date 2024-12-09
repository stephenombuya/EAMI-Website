import { useQuery } from '@tanstack/react-query';
import { getMineralDetails, getMineralLocations } from '../services/api/minerals';
import type { MineralData, GeoLocation } from '../services/api/types';

export function useMineralDetails(id: string) {
  return useQuery<MineralData, Error>({
    queryKey: ['mineral', id],
    queryFn: () => getMineralDetails(id),
    staleTime: 5 * 60 * 1000, // Consider data fresh for 5 minutes
  });
}

export function useMineralLocations(name: string) {
  return useQuery<GeoLocation[], Error>({
    queryKey: ['mineralLocations', name],
    queryFn: () => getMineralLocations(name),
    staleTime: 30 * 60 * 1000, // Consider data fresh for 30 minutes
  });
}
