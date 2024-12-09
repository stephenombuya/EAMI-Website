import { Regulation, ComplianceGuide } from '../types/governance';

export const regulations: Regulation[] = [
  {
    id: 'reg-1',
    title: 'Mining Safety Standards 2024',
    description: 'Updated safety regulations for underground mining operations in East Africa.',
    authority: 'East African Mining Safety Board',
    country: 'Regional',
    status: 'active',
    effectiveDate: '2024-01-01',
    category: 'safety',
    impact: 'high'
  },
  {
    id: 'reg-2',
    title: 'Environmental Protection in Mining Act',
    description: 'New environmental protection measures for mining operations.',
    authority: 'Ministry of Environment',
    country: 'Kenya',
    status: 'pending',
    effectiveDate: '2024-06-01',
    category: 'environmental',
    impact: 'high'
  }
];

export const complianceGuides: ComplianceGuide[] = [
  {
    id: 'guide-1',
    title: 'Mining License Renewal Guide',
    description: 'Step-by-step guide for renewing mining licenses in East African countries.',
    steps: [
      'Submit application form',
      'Environmental impact assessment',
      'Safety compliance audit',
      'Financial statements review'
    ],
    documents: [
      'Valid business registration',
      'Tax compliance certificate',
      'Environmental audit report'
    ],
    deadline: '60 days before expiry',
    category: 'licensing'
  }
];
