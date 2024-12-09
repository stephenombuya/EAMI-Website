import { MarketTrend, MarketReport } from '../types/market';

export const marketTrends: MarketTrend[] = [
  {
    id: 'gold-trend',
    mineral: 'Gold',
    price: 1925.50,
    currency: 'USD',
    change: 0.75,
    volume: '125,000 oz',
    timestamp: '2024-03-15T10:00:00Z'
  },
  {
    id: 'tanzanite-trend',
    mineral: 'Tanzanite',
    price: 650.00,
    currency: 'USD',
    change: -1.20,
    volume: '1,500 carats',
    timestamp: '2024-03-15T10:00:00Z'
  }
];

export const marketReports: MarketReport[] = [
  {
    id: 'report-1',
    title: 'East African Gold Market Analysis 2024',
    summary: 'Comprehensive analysis of gold production and demand trends in East Africa, highlighting key growth areas and market challenges.',
    date: '2024-03-10',
    category: 'analysis',
    impact: 'high',
    minerals: ['Gold', 'Silver'],
    image: 'https://images.unsplash.com/photo-1610375461246-83df859d849d?w=800'
  },
  {
    id: 'report-2',
    title: 'Gemstone Market Forecast Q2 2024',
    summary: 'Detailed forecast of gemstone market trends, focusing on tanzanite and ruby demand in international markets.',
    date: '2024-03-12',
    category: 'forecast',
    impact: 'medium',
    minerals: ['Tanzanite', 'Ruby'],
    image: 'https://images.unsplash.com/photo-1551122089-4e3e72477432?w=800'
  }
];
