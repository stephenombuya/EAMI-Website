import React, { useState } from 'react';
import { marketTrends, marketReports } from '../data/market';
import TrendCard from '../components/market/TrendCard';
import ReportCard from '../components/market/ReportCard';
import PriceChart from '../components/market/PriceChart';
import MarketStats from '../components/market/MarketStats';
import MarketAnalytics from '../components/market/MarketAnalytics';
import SustainabilityMetrics from '../components/market/SustainabilityMetrics';
import { MarketReport } from '../types/market';
import { LineChart, FileText, TrendingUp, Shield } from 'lucide-react';

const Market = () => {
  const [selectedReport, setSelectedReport] = useState<MarketReport | null>(null);
  const [selectedMineral, setSelectedMineral] = useState(marketTrends[0].mineral);
  const [timeRange, setTimeRange] = useState('1M');
  const [activeTab, setActiveTab] = useState<'overview' | 'analytics' | 'sustainability'>('overview');

  const filteredTrends = marketTrends.filter(trend => trend.mineral === selectedMineral);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-4xl font-bold">Market Insights</h1>
            <div className="flex space-x-2">
              {['1W', '1M', '3M', '1Y', 'ALL'].map((range) => (
                <button
                  key={range}
                  onClick={() => setTimeRange(range)}
                  className={`px-3 py-1 rounded-md text-sm font-medium ${
                    timeRange === range
                      ? 'bg-emerald-600 text-white'
                      : 'bg-white text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  {range}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <div className="flex space-x-4">
              <button
                onClick={() => setActiveTab('overview')}
                className={`px-4 py-2 rounded-lg flex items-center ${
                  activeTab === 'overview'
                    ? 'bg-emerald-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-50'
                }`}
              >
                <LineChart className="w-5 h-5 mr-2" />
                Market Overview
              </button>
              <button
                onClick={() => setActiveTab('analytics')}
                className={`px-4 py-2 rounded-lg flex items-center ${
                  activeTab === 'analytics'
                    ? 'bg-emerald-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-50'
                }`}
              >
                <TrendingUp className="w-5 h-5 mr-2" />
                Analytics
              </button>
              <button
                onClick={() => setActiveTab('sustainability')}
                className={`px-4 py-2 rounded-lg flex items-center ${
                  activeTab === 'sustainability'
                    ? 'bg-emerald-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-50'
                }`}
              >
                <Shield className="w-5 h-5 mr-2" />
                Sustainability
              </button>
            </div>
          </div>

          {activeTab === 'overview' && (
            <>
              <MarketStats trends={marketTrends} />
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                {marketTrends.map((trend) => (
                  <TrendCard 
                    key={trend.id} 
                    trend={trend}
                    onClick={() => setSelectedMineral(trend.mineral)}
                    isSelected={trend.mineral === selectedMineral}
                  />
                ))}
              </div>
              <PriceChart data={filteredTrends} mineral={selectedMineral} />
            </>
          )}

          {activeTab === 'analytics' && (
            <MarketAnalytics mineralId={selectedMineral.toLowerCase()} />
          )}

          {activeTab === 'sustainability' && (
            <SustainabilityMetrics projectId={selectedMineral.toLowerCase()} />
          )}

          <div className="mt-12">
            <div className="flex items-center mb-4">
              <FileText className="w-6 h-6 text-emerald-600 mr-2" />
              <h2 className="text-2xl font-semibold">Market Reports</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {marketReports.map((report) => (
                <ReportCard
                  key={report.id}
                  report={report}
                  onClick={setSelectedReport}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {selectedReport && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative h-64">
              <img 
                src={selectedReport.image} 
                alt={selectedReport.title}
                className="w-full h-full object-cover"
              />
              <button 
                onClick={() => setSelectedReport(null)}
                className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100"
              >
                ×
              </button>
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  selectedReport.impact === 'high' 
                    ? 'bg-red-100 text-red-800' 
                    : selectedReport.impact === 'medium'
                    ? 'bg-yellow-100 text-yellow-800'
                    : 'bg-blue-100 text-blue-800'
                }`}>
                  {selectedReport.impact.toUpperCase()} IMPACT
                </span>
                <span className="text-sm text-gray-500">{selectedReport.date}</span>
              </div>
              <h2 className="text-2xl font-bold mb-4">{selectedReport.title}</h2>
              <p className="text-gray-600 mb-6">{selectedReport.summary}</p>
              <div className="flex flex-wrap gap-2">
                {selectedReport.minerals.map((mineral, index) => (
                  <span 
                    key={index}
                    className="bg-gray-100 px-3 py-1 rounded-full text-sm"
                  >
                    {mineral}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Market;
