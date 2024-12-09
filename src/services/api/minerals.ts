import axios from 'axios';
import { API_CONFIG } from './config';
import type { MineralData, GeoLocation } from './types';

const api = axios.create({
  baseURL: API_CONFIG.USGS_API_ENDPOINT,
  timeout: 10000,
});

export async function getMineralDetails(id: string): Promise<MineralData> {
  try {
    const response = await api.get(`/minerals/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching mineral details:', error);
    throw new Error('Failed to fetch mineral details');
  }
}

export async function getMineralLocations(name: string): Promise<GeoLocation[]> {
  try {
    const response = await axios.get(`${API_CONFIG.NOMINATIM_API_ENDPOINT}/search`, {
      params: {
        q: `${name} mine east africa`,
        format: 'json',
        limit: 10
      }
    });
    
    return response.data.map((location: any) => ({
      name: location.display_name,
      coordinates: [parseFloat(location.lon), parseFloat(location.lat)],
      type: 'mine'
    }));
  } catch (error) {
    console.error('Error fetching mineral locations:', error);
    throw new Error('Failed to fetch mineral locations');
  }
}
