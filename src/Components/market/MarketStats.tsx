import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { MarketTrend } from '../../types/market';
import { ArrowUpRight, ArrowDownRight, DollarSign } from 'lucide-react';

interface MarketStatsProps {
  trends: MarketTrend[];
}

const MarketStats: React.FC<MarketStatsProps> = ({ trends }) => {
  const totalVolume = trends.reduce((acc, trend) => {
    const volume = parseInt(trend.volume.replace(/[^0-9]/g, ''));
    return acc + volume;
  }, 0);

  const averagePrice = trends.reduce((acc, trend) => acc + trend.price, 0) / trends.length;

  const positiveChanges = trends.filter(t => t.change > 0).length;
  const marketSentiment = (positiveChanges / trends.length) * 100;

  const chartData = trends.map(trend => ({
    name: trend.mineral,
    price: trend.price,
    change: trend.change
  }));

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">Average Price</h3>
          <DollarSign className="w-5 h-5 text-emerald-600" />
        </div>
        <p className="text-3xl font-bold mt-2">${averagePrice.toFixed(2)}</p>
        <p className="text-sm text-gray-500 mt-1">Across all minerals</p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">Total Volume</h3>
          {totalVolume > 100000 ? (
            <ArrowUpRight className="w-5 h-5 text-green-600" />
          ) : (
            <ArrowDownRight className="w-5 h-5 text-red-600" />
          )}
        </div>
        <p className="text-3xl font-bold mt-2">{totalVolume.toLocaleString()}</p>
        <p className="text-sm text-gray-500 mt-1">Units traded</p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">Market Sentiment</h3>
          {marketSentiment >= 50 ? (
            <ArrowUpRight className="w-5 h-5 text-green-600" />
          ) : (
            <ArrowDownRight className="w-5 h-5 text-red-600" />
          )}
        </div>
        <p className="text-3xl font-bold mt-2">{marketSentiment.toFixed(1)}%</p>
        <p className="text-sm text-gray-500 mt-1">Positive trend ratio</p>
      </div>

      <div className="col-span-1 md:col-span-3 bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-4">Price Comparison</h3>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="price" fill="#059669" name="Price (USD)" />
              <Bar dataKey="change" fill="#2563eb" name="Change (%)" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default MarketStats;
