import axios from 'axios';
import { API_CONFIG } from './config';
import type { SustainabilityMetric, TradeOpportunity } from './types';

const api = axios.create({
  baseURL: API_CONFIG.UNEP_API_ENDPOINT,
  timeout: 10000,
});

export async function getSustainabilityMetrics(projectId: string): Promise<SustainabilityMetric> {
  try {
    const response = await api.get(`/mining/sustainability/${projectId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching sustainability metrics:', error);
    throw new Error('Failed to fetch sustainability metrics');
  }
}

export async function getTradeOpportunities(mineralId: string): Promise<TradeOpportunity[]> {
  try {
    const response = await axios.get(`${API_CONFIG.ITC_API_ENDPOINT}/trade/opportunities`, {
      params: { mineralId }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching trade opportunities:', error);
    throw new Error('Failed to fetch trade opportunities');
  }
}
