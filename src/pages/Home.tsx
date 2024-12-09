import React from 'react';
import Hero from '../components/Hero';
import { Activity, Users, Globe2, Shield } from 'lucide-react';

const features = [
  {
    icon: Activity,
    title: 'Market Analysis',
    description: 'Real-time insights into mineral markets and price trends',
  },
  {
    icon: Users,
    title: 'Stakeholder Network',
    description: 'Connect with key players in the East African mining sector',
  },
  {
    icon: Globe2,
    title: 'Geographic Mapping',
    description: 'Detailed mapping of mineral deposits and mining operations',
  },
  {
    icon: Shield,
    title: 'Compliance Guide',
    description: 'Stay informed about mining regulations and compliance',
  },
];

const Home = () => {
  return (
    <div>
      <Hero />
      
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition duration-300"
                >
                  <Icon className="w-12 h-12 text-emerald-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
