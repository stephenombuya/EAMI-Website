import { useQuery } from '@tanstack/react-query';
import { getSustainabilityMetrics, getTradeOpportunities } from '../services/api/sustainability';
import type { SustainabilityMetric, TradeOpportunity } from '../services/api/types';

export function useSustainabilityMetrics(projectId: string) {
  return useQuery<SustainabilityMetric, Error>({
    queryKey: ['sustainability', projectId],
    queryFn: () => getSustainabilityMetrics(projectId),
    staleTime: 24 * 60 * 60 * 1000, // Consider data fresh for 24 hours
  });
}

export function useTradeOpportunities(mineralId: string) {
  return useQuery<TradeOpportunity[], Error>({
    queryKey: ['tradeOpportunities', mineralId],
    queryFn: () => getTradeOpportunities(mineralId),
    staleTime: 60 * 60 * 1000, // Consider data fresh for 1 hour
  });
}
