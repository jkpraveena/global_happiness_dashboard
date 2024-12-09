import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { CountryData } from '../types/happiness';

interface HappinessStatsProps {
  data: CountryData[];
}

export function HappinessStats({ data }: HappinessStatsProps) {
  const topCountries = data
    .sort((a, b) => b.score - a.score)
    .slice(0, 5);

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Top 5 Happiest Countries</h2>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={topCountries}>
            <XAxis dataKey="country" />
            <YAxis domain={[0, 10]} />
            <Tooltip />
            <Bar dataKey="score" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}