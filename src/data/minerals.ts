import { MineralCategory } from '../types/mineral';

export const mineralData: MineralCategory[] = [
  {
    name: 'Precious Metals',
    minerals: [
      {
        id: 'gold',
        name: 'Gold',
        description: 'Highly valued precious metal found in various regions across East Africa, particularly in greenstone belts.',
        locations: ['Lake Victoria Goldfields', 'Western Kenya', 'Northern Tanzania', 'South Western Ethiopia'],
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
        description: 'Valuable precious metal with both industrial and decorative applications, often found alongside gold deposits.',
        locations: ['Migori Gold Belt', 'Kakamega', 'Central Tanzania', 'Ethiopian Highlands'],
        uses: ['Electronics', 'Solar Panels', 'Photography', 'Jewelry'],
        image: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=800',
        production: {
          amount: '850,000 ounces',
          year: 2023
        }
      },
      {
        id: 'platinum',
        name: 'Platinum',
        description: 'Rare precious metal valued for its catalytic properties and resistance to corrosion.',
        locations: ['Tanzanian Shield', 'Southern Ethiopia', 'Western Uganda'],
        uses: ['Catalytic Converters', 'Jewelry', 'Laboratory Equipment', 'Electronics'],
        image: 'https://images.unsplash.com/photo-1607344645866-009c320b63e0?w=800',
        production: {
          amount: '15,000 ounces',
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
        description: 'Important mineral used in various industrial applications, extracted from mineral sands.',
        locations: ['Kwale County, Kenya', 'Coastal Region', 'Mozambique Border'],
        uses: ['Aerospace', 'Medical Implants', 'Paint Production', 'Construction'],
        image: 'https://images.unsplash.com/photo-1533106958148-daaeab8b83fe?w=800',
        production: {
          amount: '500,000 tonnes',
          year: 2023
        }
      },
      {
        id: 'graphite',
        name: 'Graphite',
        description: 'Essential mineral for modern technology and industrial applications, particularly in battery production.',
        locations: ['Merelani, Tanzania', 'Southern Kenya', 'Northern Mozambique'],
        uses: ['Batteries', 'Lubricants', 'Steel Making', 'Nuclear Reactors'],
        image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=800',
        production: {
          amount: '250,000 tonnes',
          year: 2023
        }
      },
      {
        id: 'rare-earth',
        name: 'Rare Earth Elements',
        description: 'Critical elements for high-tech industries and renewable energy technologies.',
        locations: ['Ngualla, Tanzania', 'Wigu Hill', 'Southern Kenya'],
        uses: ['Permanent Magnets', 'Electric Vehicles', 'Wind Turbines', 'Electronics'],
        image: 'https://images.unsplash.com/photo-1569163139599-0f4517e36f51?w=800',
        production: {
          amount: '30,000 tonnes',
          year: 2023
        }
      },
      {
        id: 'copper',
        name: 'Copper',
        description: 'Essential base metal for electrical and construction industries.',
        locations: ['Kilembe Mine, Uganda', 'Western Kenya', 'Northern Tanzania'],
        uses: ['Electrical Wiring', 'Construction', 'Electronics', 'Renewable Energy'],
        image: 'https://images.unsplash.com/photo-1555598871-e49b57123306?w=800',
        production: {
          amount: '75,000 tonnes',
          year: 2023
        }
      },
      {
        id: 'nickel',
        name: 'Nickel',
        description: 'Important metal for stainless steel production and battery technology.',
        locations: ['Dutwa, Tanzania', 'Western Uganda', 'Southern Ethiopia'],
        uses: ['Stainless Steel', 'Batteries', 'Electronics', 'Plating'],
        image: 'https://images.unsplash.com/photo-1534094912471-f66b21053faa?w=800',
        production: {
          amount: '45,000 tonnes',
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
        image: 'https://images.unsplash.com/photo-1551406483-3731d1997540?w=800',
        production: {
          amount: '12,000 carats',
          year: 2023
        }
      },
      {
        id: 'ruby',
        name: 'Ruby',
        description: 'Precious gemstone known for its deep red color and durability.',
        locations: ['Tsavo National Park, Kenya', 'Longido, Tanzania', 'Montepuez, Mozambique'],
        uses: ['Fine Jewelry', 'Watches', 'Industrial Applications'],
        image: 'https://images.unsplash.com/photo-1602491674275-316d95560fb1?w=800',
        production: {
          amount: '25,000 carats',
          year: 2023
        }
      },
      {
        id: 'sapphire',
        name: 'Sapphire',
        description: 'Precious gemstone occurring in various colors, most valued in blue.',
        locations: ['Umba Valley, Tanzania', 'Eastern Kenya', 'Northern Madagascar'],
        uses: ['Jewelry', 'Watch Components', 'Industrial Applications'],
        image: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=800',
        production: {
          amount: '18,000 carats',
          year: 2023
        }
      }
    ]
  },
  {
    name: 'Energy Minerals',
    minerals: [
      {
        id: 'uranium',
        name: 'Uranium',
        description: 'Radioactive element used primarily for nuclear power generation.',
        locations: ['Mkuju River, Tanzania', 'Northern Kenya', 'Central Uganda'],
        uses: ['Nuclear Power', 'Medical Isotopes', 'Research'],
        image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800',
        production: {
          amount: '400 tonnes',
          year: 2023
        }
      },
      {
        id: 'coal',
        name: 'Coal',
        description: 'Fossil fuel used for power generation and industrial processes.',
        locations: ['Mui Basin, Kenya', 'Ngaka, Tanzania', 'Southern Ethiopia'],
        uses: ['Power Generation', 'Steel Production', 'Cement Manufacturing'],
        image: 'https://images.unsplash.com/photo-1589596619062-068730a17040?w=800',
        production: {
          amount: '1.5 million tonnes',
          year: 2023
        }
      }
    ]
  },
  {
    name: 'Construction Minerals',
    minerals: [
      {
        id: 'limestone',
        name: 'Limestone',
        description: 'Sedimentary rock essential for cement production and construction.',
        locations: ['Hima, Uganda', 'Mombasa, Kenya', 'Tanga, Tanzania'],
        uses: ['Cement Production', 'Construction', 'Agriculture', 'Steel Making'],
        image: 'https://images.unsplash.com/photo-1598505248596-2217167ee023?w=800',
        production: {
          amount: '8 million tonnes',
          year: 2023
        }
      },
      {
        id: 'gypsum',
        name: 'Gypsum',
        description: 'Mineral used in construction and agriculture.',
        locations: ['Kilifi, Kenya', 'Lake Natron, Tanzania', 'Eastern Ethiopia'],
        uses: ['Drywall Manufacturing', 'Cement Production', 'Agriculture', 'Paint Production'],
        image: 'https://images.unsplash.com/photo-1557767995-4c103d14531f?w=800',
        production: {
          amount: '2.5 million tonnes',
          year: 2023
        }
      }
    ]
  },
  {
    name: 'Strategic Minerals',
    minerals: [
      {
        id: 'lithium',
        name: 'Lithium',
        description: 'Critical mineral for battery production and renewable energy storage.',
        locations: ['Southern Tanzania', 'Northern Kenya', 'Ethiopia Rift Valley'],
        uses: ['Batteries', 'Glass Production', 'Lubricants', 'Pharmaceuticals'],
        image: 'https://images.unsplash.com/photo-1642731323702-8d2e2287b3d0?w=800',
        production: {
          amount: '20,000 tonnes',
          year: 2023
        }
      },
      {
        id: 'cobalt',
        name: 'Cobalt',
        description: 'Essential mineral for rechargeable batteries and aerospace applications.',
        locations: ['Kilembe, Uganda', 'Western Tanzania', 'Southern Ethiopia'],
        uses: ['Batteries', 'Superalloys', 'Magnets', 'Catalysts'],
        image: 'https://images.unsplash.com/photo-1612175474287-84c71bcd47b5?w=800',
        production: {
          amount: '5,000 tonnes',
          year: 2023
        }
      },
      {
        id: 'vanadium',
        name: 'Vanadium',
        description: 'Metal used in steel strengthening and energy storage.',
        locations: ['Northern Tanzania', 'Western Kenya', 'Uganda Border Region'],
        uses: ['Steel Alloys', 'Energy Storage', 'Catalysts', 'Electronics'],
        image: 'https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=800',
        production: {
          amount: '8,000 tonnes',
          year: 2023
        }
      }
    ]
  }
];
