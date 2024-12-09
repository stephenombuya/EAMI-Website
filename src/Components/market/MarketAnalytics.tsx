import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import { useTradeOpportunities } from '../../hooks/useSustainability';
import { TrendingUp, TrendingDown, DollarSign } from 'lucide-react';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

interface MarketAnalyticsProps {
  mineralId: string;
}

const MarketAnalytics: React.FC<MarketAnalyticsProps> = ({ mineralId }) => {
  const { data: opportunities, isLoading } = useTradeOpportunities(mineralId);

  if (isLoading) {
    return (
      <div className="animate-pulse bg-white rounded-lg p-6">
        <div className="h-64 bg-gray-200 rounded"></div>
      </div>
    );
  }

  const chartData = {
    labels: opportunities?.map(opp => new Date(opp.validUntil).toLocaleDateString()) || [],
    datasets: [
      {
        label: 'Price Trend',
        data: opportunities?.map(opp => opp.price) || [],
        fill: true,
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        tension: 0.4
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Price Trends Over Time'
      }
    },
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };

  const averagePrice = opportunities?.reduce((acc, curr) => acc + curr.price, 0) || 0;
  const totalVolume = opportunities?.reduce((acc, curr) => acc + curr.volume, 0) || 0;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Average Price</h3>
            <DollarSign className="w-6 h-6 text-emerald-600" />
          </div>
          <p className="text-3xl font-bold mt-2">${(averagePrice / (opportunities?.length || 1)).toFixed(2)}</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Total Volume</h3>
            <TrendingUp className="w-6 h-6 text-emerald-600" />
          </div>
          <p className="text-3xl font-bold mt-2">{totalVolume.toLocaleString()} units</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Active Opportunities</h3>
            <TrendingDown className="w-6 h-6 text-emerald-600" />
          </div>
          <p className="text-3xl font-bold mt-2">{opportunities?.length || 0}</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <Line data={chartData} options={options} />
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-4">Trade Opportunities</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Market</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Volume</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Valid Until</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {opportunities?.map((opp) => (
                <tr key={opp.id}>
                  <td className="px-6 py-4 whitespace-nowrap">{opp.market}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{opp.volume.toLocaleString()}</td>
                  <td className="px-6 py-4 whitespace-nowrap">${opp.price.toFixed(2)}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{new Date(opp.validUntil).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MarketAnalytics;
