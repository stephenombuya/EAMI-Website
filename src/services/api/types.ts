export interface MineralData {
  id: string;
  name: string;
  description: string;
  properties: {
    composition: string;
    hardness: number;
    density: number;
  };
  locations: GeoLocation[];
  uses: string[];
  production: {
    amount: number;
    unit: string;
    year: number;
  };
}

export interface GeoLocation {
  name: string;
  coordinates: [number, number];
  type: 'mine' | 'deposit' | 'processing';
}

export interface SustainabilityMetric {
  projectId: string;
  environmentalImpact: 'low' | 'medium' | 'high';
  socialCompliance: boolean;
  certifications: string[];
  lastAudit: string;
}

export interface TradeOpportunity {
  id: string;
  mineral: string;
  market: string;
  volume: number;
  price: number;
  requirements: string[];
  validUntil: string;
}
