import React from 'react';
import { useSustainabilityMetrics } from '../../hooks/useSustainability';
import { Leaf, Users, Award, Calendar } from 'lucide-react';

interface SustainabilityMetricsProps {
  projectId: string;
}

const SustainabilityMetrics: React.FC<SustainabilityMetricsProps> = ({ projectId }) => {
  const { data: metrics, isLoading } = useSustainabilityMetrics(projectId);

  if (isLoading) {
    return (
      <div className="animate-pulse bg-white rounded-lg p-6">
        <div className="h-32 bg-gray-200 rounded"></div>
      </div>
    );
  }

  if (!metrics) return null;

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'low':
        return 'text-green-600 bg-green-100';
      case 'medium':
        return 'text-yellow-600 bg-yellow-100';
      case 'high':
        return 'text-red-600 bg-red-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-semibold mb-6">Sustainability Overview</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <div className="p-3 rounded-full bg-emerald-100">
              <Leaf className="w-6 h-6 text-emerald-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Environmental Impact</p>
              <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getImpactColor(metrics.environmentalImpact)}`}>
                {metrics.environmentalImpact.toUpperCase()}
              </span>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="p-3 rounded-full bg-blue-100">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Social Compliance</p>
              <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                metrics.socialCompliance ? 'text-green-600 bg-green-100' : 'text-red-600 bg-red-100'
              }`}>
                {metrics.socialCompliance ? 'COMPLIANT' : 'NON-COMPLIANT'}
              </span>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <div className="p-3 rounded-full bg-purple-100">
              <Award className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Certifications</p>
              <div className="flex flex-wrap gap-2 mt-1">
                {metrics.certifications.map((cert, index) => (
                  <span key={index} className="px-2 py-1 bg-gray-100 rounded-full text-xs">
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="p-3 rounded-full bg-orange-100">
              <Calendar className="w-6 h-6 text-orange-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Last Audit</p>
              <p className="font-medium">{new Date(metrics.lastAudit).toLocaleDateString()}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SustainabilityMetrics;
