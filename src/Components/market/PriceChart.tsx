import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { MarketTrend } from '../../types/market';

interface PriceChartProps {
  data: MarketTrend[];
  mineral: string;
}

const PriceChart: React.FC<PriceChartProps> = ({ data, mineral }) => {
  const chartData = data.map(item => ({
    timestamp: new Date(item.timestamp).toLocaleDateString(),
    price: item.price,
    volume: parseInt(item.volume.replace(/,/g, '')),
  }));

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4">{mineral} Price Trend</h3>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="timestamp" />
            <YAxis yAxisId="left" />
            <YAxis yAxisId="right" orientation="right" />
            <Tooltip />
            <Legend />
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="price"
              stroke="#059669"
              name="Price (USD)"
              dot={false}
            />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="volume"
              stroke="#2563eb"
              name="Volume"
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PriceChart;
