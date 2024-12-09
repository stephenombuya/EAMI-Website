import React from 'react';
import { Clock, CheckCircle, AlertTriangle, XCircle } from 'lucide-react';
import { Regulation } from '../../types/governance';

interface ComplianceTimelineProps {
  regulations: Regulation[];
}

const ComplianceTimeline: React.FC<ComplianceTimelineProps> = ({ regulations }) => {
  const sortedRegulations = [...regulations].sort(
    (a, b) => new Date(b.effectiveDate).getTime() - new Date(a.effectiveDate).getTime()
  );

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active':
        return <CheckCircle className="w-6 h-6 text-green-600" />;
      case 'pending':
        return <Clock className="w-6 h-6 text-yellow-600" />;
      case 'proposed':
        return <AlertTriangle className="w-6 h-6 text-blue-600" />;
      default:
        return <XCircle className="w-6 h-6 text-gray-600" />;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h3 className="text-xl font-semibold mb-6">Regulatory Timeline</h3>
      <div className="space-y-8">
        {sortedRegulations.map((regulation, index) => (
          <div key={regulation.id} className="relative">
            {index !== sortedRegulations.length - 1 && (
              <div className="absolute left-6 top-10 bottom-0 w-0.5 bg-gray-200" />
            )}
            <div className="flex items-start">
              <div className="flex-shrink-0 bg-white">{getStatusIcon(regulation.status)}</div>
              <div className="ml-4">
                <div className="flex items-center">
                  <h4 className="text-lg font-medium">{regulation.title}</h4>
                  <span className={`ml-3 px-2 py-1 text-xs font-medium rounded-full ${
                    regulation.impact === 'high' 
                      ? 'bg-red-100 text-red-800'
                      : regulation.impact === 'medium'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-blue-100 text-blue-800'
                  }`}>
                    {regulation.impact.toUpperCase()} IMPACT
                  </span>
                </div>
                <p className="mt-1 text-sm text-gray-600">{regulation.description}</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  <span className="text-sm text-gray-500">
                    Effective: {regulation.effectiveDate}
                  </span>
                  <span className="text-sm text-gray-500">•</span>
                  <span className="text-sm text-gray-500">
                    Authority: {regulation.authority}
                  </span>
                  <span className="text-sm text-gray-500">•</span>
                  <span className="text-sm text-gray-500">
                    Region: {regulation.country}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComplianceTimeline;
