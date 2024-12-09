import React from 'react';
import { Sparkles, Heart } from 'lucide-react';

interface InterpretationProps {
  interpretation: string | null;
  loading: boolean;
}

export function Interpretation({ interpretation, loading }: InterpretationProps) {
  if (!interpretation && !loading) return null;

  return (
    <div className="w-full max-w-2xl mt-8 p-6 rounded-lg bg-white/90 backdrop-blur-sm border border-purple-200 shadow-lg">
      <div className="flex items-center gap-2 mb-4">
        <Sparkles className="w-5 h-5 text-purple-600" />
        <h2 className="text-xl font-semibold text-purple-900">Dream Insights</h2>
        <Heart className="w-5 h-5 text-pink-500 ml-2" />
      </div>
      
      {loading ? (
        <div className="flex items-center justify-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600"></div>
        </div>
      ) : (
        <div className="space-y-4">
          {interpretation.split('\n\n').map((section, index) => (
            <div key={index} className="text-gray-700 leading-relaxed">
              {section.split('\n').map((line, lineIndex) => (
                <p key={lineIndex} className="mb-2">{line}</p>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}