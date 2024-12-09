import React from 'react';
import { Lightbulb, TrendingUp, Users } from 'lucide-react';
import { motion } from 'framer-motion';

interface InsightCardProps {
  title: string;
  value: string;
  type: 'trend' | 'social' | 'insight';
}

export function InsightCard({ title, value, type }: InsightCardProps) {
  const icons = {
    trend: TrendingUp,
    social: Users,
    insight: Lightbulb,
  };

  const Icon = icons[type];

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-white rounded-lg shadow-lg p-6 flex items-start gap-4"
    >
      <div className="rounded-full bg-indigo-100 p-3">
        <Icon className="w-6 h-6 text-indigo-600" />
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="text-gray-600 mt-1">{value}</p>
      </div>
    </motion.div>
  );
}