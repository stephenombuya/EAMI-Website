import React from 'react';
import { TrendingUp, TrendingDown, AlertTriangle } from 'lucide-react';
import { MarketTrend } from '../../types/market';

interface MarketSummaryProps {
  trends: MarketTrend[];
}

const MarketSummary: React.FC<MarketSummaryProps> = ({ trends }) => {
  const getTrendStats = () => {
    const positiveCount = trends.filter(t => t.change > 0).length;
    const negativeCount = trends.filter(t => t.change < 0).length;
    
    return {
      positiveCount,
      negativeCount,
      overallSentiment: positiveCount >= negativeCount ? 'positive' : 'negative'
    };
  };

  const stats = getTrendStats();

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4">Market Summary</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="flex items-center space-x-2">
          <TrendingUp className="w-5 h-5 text-green-600" />
          <span className="text-sm">
            {stats.positiveCount} minerals trending up
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <TrendingDown className="w-5 h-5 text-red-600" />
          <span className="text-sm">
            {stats.negativeCount} minerals trending down
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <AlertTriangle className="w-5 h-5 text-yellow-600" />
          <span className="text-sm">
            Market sentiment: {stats.overallSentiment}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MarketSummary;
