import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { motion } from 'framer-motion';
import Sentiment from 'sentiment';

const sentiment = new Sentiment();

interface SentimentAnalysisProps {
  newsData: {
    title: string;
    content: string;
    source: string;
  }[];
}

export function SentimentAnalysis({ newsData }: SentimentAnalysisProps) {
  const sentimentScores = newsData.map((news) => ({
    source: news.source,
    score: sentiment.analyze(news.content).score,
  }));

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-lg shadow-lg p-6"
    >
      <h2 className="text-xl font-semibold mb-4">News Sentiment Analysis</h2>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={sentimentScores}>
            <XAxis dataKey="source" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="score" fill="#8b5cf6" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}