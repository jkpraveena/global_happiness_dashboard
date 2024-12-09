import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { CountryData } from '../types/happiness';
import { motion } from 'framer-motion';

interface YearlyTrendProps {
  country: CountryData;
}

export function YearlyTrend({ country }: YearlyTrendProps) {
  const data = country.yearlyTrend.map((value, index) => ({
    year: 2019 + index,
    value,
  }));

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-lg shadow-lg p-6"
    >
      <h2 className="text-xl font-semibold mb-4">Happiness Trend: {country.country}</h2>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis domain={[0, 10]} />
            <Tooltip />
            <Line 
              type="monotone" 
              dataKey="value" 
              stroke="#8b5cf6" 
              strokeWidth={2}
              dot={{ fill: '#8b5cf6' }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-4 text-sm text-gray-600">
        <p>Trend Analysis:</p>
        <p>• {
          data[data.length - 1].value > data[0].value 
            ? 'Positive growth in happiness levels'
            : 'Slight fluctuation in happiness scores'
        }</p>
      </div>
    </motion.div>
  );
}