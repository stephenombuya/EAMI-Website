import { MineralCategory } from '../types/mineral';

export const mineralData: MineralCategory[] = [
  {
    name: 'Precious Metals',
    minerals: [
      {
        id: 'gold',
        name: 'Gold',
        description: 'Highly valued precious metal found in various regions across East Africa.',
        locations: ['Lake Victoria Goldfields', 'Western Kenya', 'Northern Tanzania'],
        uses: ['Jewelry', 'Electronics', 'Investment', 'Medical Devices'],
        image: 'https://images.unsplash.com/photo-1610375461246-83df859d849d?w=800',
        production: {
          amount: '1.2 million ounces',
          year: 2023
        }
      },
      {
        id: 'silver',
        name: 'Silver',
        description: 'Valuable precious metal with both industrial and decorative applications.',
        locations: ['Migori Gold Belt', 'Kakamega', 'Central Tanzania'],
        uses: ['Electronics', 'Solar Panels', 'Photography', 'Jewelry'],
        image: 'https://images.unsplash.com/photo-1617142108319-66c7ab45c711?w=800',
        production: {
          amount: '850,000 ounces',
          year: 2023
        }
      }
    ]
  },
  {
    name: 'Industrial Minerals',
    minerals: [
      {
        id: 'titanium',
        name: 'Titanium',
        description: 'Important mineral used in various industrial applications.',
        locations: ['Kwale County, Kenya', 'Coastal Region'],
        uses: ['Aerospace', 'Medical Implants', 'Paint Production', 'Construction'],
        image: 'https://images.unsplash.com/photo-1535732759880-bbd5c7265e3f?w=800',
        production: {
          amount: '500,000 tonnes',
          year: 2023
        }
      },
      {
        id: 'graphite',
        name: 'Graphite',
        description: 'Essential mineral for modern technology and industrial applications.',
        locations: ['Merelani, Tanzania', 'Southern Kenya'],
        uses: ['Batteries', 'Lubricants', 'Steel Making', 'Nuclear Reactors'],
        image: 'https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?w=800',
        production: {
          amount: '250,000 tonnes',
          year: 2023
        }
      }
    ]
  },
  {
    name: 'Gemstones',
    minerals: [
      {
        id: 'tanzanite',
        name: 'Tanzanite',
        description: 'Rare blue gemstone found only in Tanzania, highly valued in jewelry.',
        locations: ['Merelani Hills, Tanzania'],
        uses: ['Jewelry', 'Investment', 'Collectors Items'],
        image: 'https://images.unsplash.com/photo-1551122089-4e3e72477432?w=800',
        production: {
          amount: '12,000 carats',
          year: 2023
        }
      },
      {
        id: 'ruby',
        name: 'Ruby',
        description: 'Precious gemstone known for its deep red color and durability.',
        locations: ['Tsavo National Park, Kenya', 'Longido, Tanzania'],
        uses: ['Fine Jewelry', 'Watches', 'Industrial Applications'],
        image: 'https://images.unsplash.com/photo-1584715642381-6f1c4b452b1c?w=800',
        production: {
          amount: '25,000 carats',
          year: 2023
        }
      }
    ]
  }
];