import { TransportRoute, TransportHub } from '../types/logistics';

export const transportRoutes: TransportRoute[] = [
  {
    id: 'sgr-mombasa-nairobi',
    name: 'Mombasa-Nairobi Standard Gauge Railway',
    type: 'rail',
    description: 'Modern standard gauge railway connecting the Port of Mombasa to Nairobi, facilitating efficient mineral transport.',
    distance: '485 km',
    capacity: '22 million tonnes annually',
    status: 'operational',
    connects: ['Port of Mombasa', 'Nairobi ICD'],
    image: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=800'
  },
  {
    id: 'northern-corridor',
    name: 'Northern Corridor',
    type: 'road',
    description: 'Major road network connecting East African countries for mineral transportation.',
    distance: '1,700 km',
    capacity: '30 million tonnes annually',
    status: 'operational',
    connects: ['Mombasa', 'Kampala', 'Kigali'],
    image: 'https://images.unsplash.com/photo-1545459720-aac8509eb02c?w=800'
  }
];

export const transportHubs: TransportHub[] = [
  {
    id: 'mombasa-port',
    name: 'Port of Mombasa',
    type: 'port',
    location: 'Mombasa, Kenya',
    capacity: '1.4 million TEUs annually',
    description: 'East Africa\'s largest and most advanced port, crucial for mineral exports.',
    facilities: ['Bulk Terminals', 'Container Terminals', 'Storage Facilities', 'Mineral Processing'],
    image: 'https://images.unsplash.com/photo-1571150055672-23d2c6f0a475?w=800'
  },
  {
    id: 'nairobi-icd',
    name: 'Nairobi Inland Container Depot',
    type: 'depot',
    location: 'Nairobi, Kenya',
    capacity: '450,000 TEUs annually',
    description: 'Major inland container depot handling mineral cargo for regional distribution.',
    facilities: ['Container Handling', 'Customs Clearance', 'Storage', 'Rail Connection'],
    image: 'https://images.unsplash.com/photo-1494412685616-a5d310fbb07d?w=800'
  }
];