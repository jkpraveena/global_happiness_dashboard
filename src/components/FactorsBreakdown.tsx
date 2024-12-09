import React from 'react';
import { RadarChart, PolarGrid, PolarAngleAxis, Radar, ResponsiveContainer } from 'recharts';
import { CountryData } from '../types/happiness';

interface FactorsBreakdownProps {
  country: CountryData;
}

export function FactorsBreakdown({ country }: FactorsBreakdownProps) {
  const factors = [
    { name: 'GDP', value: country.gdpPerCapita },
    { name: 'Social Support', value: country.socialSupport },
    { name: 'Health', value: country.healthyLife },
    { name: 'Freedom', value: country.freedom },
    { name: 'Generosity', value: country.generosity },
    { name: 'Low Corruption', value: country.corruption },
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Happiness Factors: {country.country}</h2>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart data={factors}>
            <PolarGrid />
            <PolarAngleAxis dataKey="name" />
            <Radar dataKey="value" fill="#8884d8" fillOpacity={0.6} />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}