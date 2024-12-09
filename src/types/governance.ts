export interface Regulation {
  id: string;
  title: string;
  description: string;
  authority: string;
  country: string;
  status: 'active' | 'pending' | 'proposed';
  effectiveDate: string;
  category: 'environmental' | 'safety' | 'licensing' | 'trade';
  impact: 'high' | 'medium' | 'low';
}

export interface ComplianceGuide {
  id: string;
  title: string;
  description: string;
  steps: string[];
  documents: string[];
  deadline: string;
  category: string;
}
