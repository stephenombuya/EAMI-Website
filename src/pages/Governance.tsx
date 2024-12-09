import React, { useState } from 'react';
import { regulations, complianceGuides } from '../data/governance';
import RegulationCard from '../components/governance/RegulationCard';
import ComplianceTimeline from '../components/governance/ComplianceTimeline';
import { Regulation } from '../types/governance';
import { Shield, BookOpen, Filter } from 'lucide-react';

const Governance = () => {
  const [selectedRegulation, setSelectedRegulation] = useState<Regulation | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImpact, setSelectedImpact] = useState('all');

  const categories = ['environmental', 'safety', 'licensing', 'trade'];
  const impacts = ['high', 'medium', 'low'];

  const filteredRegulations = regulations.filter(reg => {
    const categoryMatch = selectedCategory === 'all' || reg.category === selectedCategory;
    const impactMatch = selectedImpact === 'all' || reg.impact === selectedImpact;
    return categoryMatch && impactMatch;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-6">Mining Governance</h1>
          
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="flex items-center mb-4">
              <Filter className="w-5 h-5 text-emerald-600 mr-2" />
              <h3 className="text-lg font-semibold">Filter Regulations</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setSelectedCategory('all')}
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      selectedCategory === 'all'
                        ? 'bg-emerald-600 text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    All
                  </button>
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        selectedCategory === category
                          ? 'bg-emerald-600 text-white'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Impact Level</label>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setSelectedImpact('all')}
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      selectedImpact === 'all'
                        ? 'bg-emerald-600 text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    All
                  </button>
                  {impacts.map((impact) => (
                    <button
                      key={impact}
                      onClick={() => setSelectedImpact(impact)}
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        selectedImpact === impact
                          ? 'bg-emerald-600 text-white'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      {impact.charAt(0).toUpperCase() + impact.slice(1)}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <ComplianceTimeline regulations={filteredRegulations} />
          
          <div className="mb-8">
            <div className="flex items-center mb-4">
              <Shield className="w-6 h-6 text-emerald-600 mr-2" />
              <h2 className="text-2xl font-semibold">Regulations & Policies</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredRegulations.map((regulation) => (
                <RegulationCard
                  key={regulation.id}
                  regulation={regulation}
                  onClick={setSelectedRegulation}
                />
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center mb-4">
              <BookOpen className="w-6 h-6 text-emerald-600 mr-2" />
              <h2 className="text-2xl font-semibold">Compliance Guides</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {complianceGuides.map((guide) => (
                <div 
                  key={guide.id}
                  className="bg-white rounded-lg shadow-md p-6"
                >
                  <h3 className="text-xl font-semibold mb-4">{guide.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{guide.description}</p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">Required Steps:</h4>
                      <ul className="list-disc list-inside text-sm text-gray-600">
                        {guide.steps.map((step, index) => (
                          <li key={index}>{step}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-2">Required Documents:</h4>
                      <ul className="list-disc list-inside text-sm text-gray-600">
                        {guide.documents.map((doc, index) => (
                          <li key={index}>{doc}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="pt-2">
                      <span className="text-sm font-medium">Deadline: </span>
                      <span className="text-sm text-gray-600">{guide.deadline}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {selectedRegulation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  selectedRegulation.status === 'active'
                    ? 'bg-green-100 text-green-800'
                    : selectedRegulation.status === 'pending'
                    ? 'bg-yellow-100 text-yellow-800'
                    : 'bg-blue-100 text-blue-800'
                }`}>
                  {selectedRegulation.status.toUpperCase()}
                </span>
                <button 
                  onClick={() => setSelectedRegulation(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ×
                </button>
              </div>
              
              <h2 className="text-2xl font-bold mb-4">{selectedRegulation.title}</h2>
              <p className="text-gray-600 mb-6">{selectedRegulation.description}</p>
              
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-medium">Authority:</span>
                  <p className="text-gray-600">{selectedRegulation.authority}</p>
                </div>
                <div>
                  <span className="font-medium">Country:</span>
                  <p className="text-gray-600">{selectedRegulation.country}</p>
                </div>
                <div>
                  <span className="font-medium">Category:</span>
                  <p className="text-gray-600">{selectedRegulation.category}</p>
                </div>
                <div>
                  <span className="font-medium">Effective Date:</span>
                  <p className="text-gray-600">{selectedRegulation.effectiveDate}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Governance;
