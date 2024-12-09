import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { CountryData } from '../types/happiness';
import { motion } from 'framer-motion';

interface AgeAnalysisProps {
  country: CountryData;
}

export function AgeAnalysis({ country }: AgeAnalysisProps) {
  const data = [
    { name: 'Youth (18-30)', value: country.ageGroups.youth },
    { name: 'Adult (31-60)', value: country.ageGroups.adult },
    { name: 'Senior (60+)', value: country.ageGroups.senior },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-lg shadow-lg p-6"
    >
      <h2 className="text-xl font-semibold mb-4">Age-wise Happiness Analysis: {country.country}</h2>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis dataKey="name" />
            <YAxis domain={[0, 10]} />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#6366f1" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-4 text-sm text-gray-600">
        <p>• Youth show {country.ageGroups.youth > 7 ? 'high' : 'moderate'} levels of happiness</p>
        <p>• Adults maintain {country.ageGroups.adult > 7 ? 'strong' : 'stable'} happiness scores</p>
        <p>• Seniors report {country.ageGroups.senior > 7 ? 'excellent' : 'good'} life satisfaction</p>
      </div>
    </motion.div>
  );
}