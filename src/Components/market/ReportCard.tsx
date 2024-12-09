import React from 'react';
import { Calendar, Layers } from 'lucide-react';
import { MarketReport } from '../../types/market';

interface ReportCardProps {
  report: MarketReport;
  onClick: (report: MarketReport) => void;
}

const ReportCard: React.FC<ReportCardProps> = ({ report, onClick }) => {
  return (
    <div 
      className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300"
      onClick={() => onClick(report)}
    >
      <div className="h-48 overflow-hidden">
        <img 
          src={report.image} 
          alt={report.title}
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
            report.impact === 'high' 
              ? 'bg-red-100 text-red-800' 
              : report.impact === 'medium'
              ? 'bg-yellow-100 text-yellow-800'
              : 'bg-blue-100 text-blue-800'
          }`}>
            {report.impact.toUpperCase()} IMPACT
          </span>
          <span className="text-sm text-gray-500 flex items-center">
            <Calendar className="w-4 h-4 mr-1" />
            {report.date}
          </span>
        </div>
        
        <h3 className="text-xl font-semibold mb-2">{report.title}</h3>
        <p className="text-gray-600 text-sm mb-4">{report.summary}</p>
        
        <div className="flex items-center text-sm text-gray-500">
          <Layers className="w-4 h-4 mr-2" />
          <div className="flex flex-wrap gap-2">
            {report.minerals.map((mineral, index) => (
              <span 
                key={index}
                className="bg-gray-100 px-2 py-1 rounded-full"
              >
                {mineral}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportCard;
