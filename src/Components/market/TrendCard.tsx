import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { MarketTrend } from '../../types/market';

interface TrendCardProps {
  trend: MarketTrend;
  onClick?: () => void;
  isSelected?: boolean;
}

const TrendCard: React.FC<TrendCardProps> = ({ trend, onClick, isSelected = false }) => {
  const isPositive = trend.change >= 0;

  return (
    <div 
      className={`bg-white rounded-lg shadow-md p-6 cursor-pointer transition-all duration-300 ${
        isSelected ? 'ring-2 ring-emerald-500' : 'hover:shadow-lg'
      }`}
      onClick={onClick}
    >
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">{trend.mineral}</h3>
        <div className={`flex items-center ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
          {isPositive ? <TrendingUp className="w-5 h-5 mr-1" /> : <TrendingDown className="w-5 h-5 mr-1" />}
          <span>{Math.abs(trend.change)}%</span>
        </div>
      </div>
      
      <div className="space-y-2">
        <div className="flex justify-between">
          <span className="text-gray-600">Price</span>
          <span className="font-medium">{trend.currency} {trend.price.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Volume</span>
          <span>{trend.volume}</span>
        </div>
      </div>
    </div>
  );
};

export default TrendCard;
