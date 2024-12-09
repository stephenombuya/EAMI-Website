export interface MarketTrend {
  id: string;
  mineral: string;
  price: number;
  currency: string;
  change: number;
  volume: string;
  timestamp: string;
}

export interface MarketReport {
  id: string;
  title: string;
  summary: string;
  date: string;
  category: 'analysis' | 'forecast' | 'news';
  impact: 'high' | 'medium' | 'low';
  minerals: string[];
  image: string;
}
