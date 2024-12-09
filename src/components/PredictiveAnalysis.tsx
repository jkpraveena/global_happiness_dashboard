import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { CountryData } from '../types/happiness';
import { motion } from 'framer-motion';
import { predictHappinessScore } from '../utils/ml';

interface PredictiveAnalysisProps {
  country: CountryData;
}

export function PredictiveAnalysis({ country }: PredictiveAnalysisProps) {
  const [prediction, setPrediction] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getPrediction() {
      setLoading(true);
      try {
        const score = await predictHappinessScore(
          country.gdpPerCapita,
          country.socialSupport,
          country.healthyLife,
          country.freedom
        );
        setPrediction(score);
      } catch (error) {
        console.error('Prediction failed:', error);
      }
      setLoading(false);
    }
    getPrediction();
  }, [country]);

  const data = [
    ...country.yearlyTrend.map((value, index) => ({
      year: 2019 + index,
      value,
      type: 'Historical',
    })),
    ...(prediction
      ? [
          {
            year: 2023,
            value: prediction,
            type: 'Predicted',
          },
        ]
      : []),
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-lg shadow-lg p-6"
    >
      <h2 className="text-xl font-semibold mb-4">Future Happiness Prediction</h2>
      {loading ? (
        <div className="flex items-center justify-center h-[300px]">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
        </div>
      ) : (
        <>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
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
          {prediction && (
            <div className="mt-4 text-sm text-gray-600">
              <p>Predicted Happiness Score for 2023: {prediction.toFixed(2)}</p>
              <p>
                {prediction > country.yearlyTrend[country.yearlyTrend.length - 1]
                  ? 'Positive trend expected'
                  : 'Maintaining stable happiness levels'}
              </p>
            </div>
          )}
        </>
      )}
    </motion.div>
  );
}