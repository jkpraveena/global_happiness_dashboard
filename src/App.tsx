import React from 'react';
import { Globe2, LineChart, Users } from 'lucide-react';
import { WorldMap } from './components/WorldMap';
import { HappinessStats } from './components/HappinessStats';
import { FactorsBreakdown } from './components/FactorsBreakdown';
import { AgeAnalysis } from './components/AgeAnalysis';
import { YearlyTrend } from './components/YearlyTrend';
import { InsightCard } from './components/InsightCard';
import { PredictiveAnalysis } from './components/PredictiveAnalysis';
import { SentimentAnalysis } from './components/SentimentAnalysis';
import { useHappinessStore } from './store/happinessStore';
import { happinessData } from './data/mockData';
import { motion } from 'framer-motion';

const mockNewsData = [
  {
    title: 'Global Happiness Trends',
    content: 'Positive trends in global happiness levels continue to rise.',
    source: 'Global News',
  },
  {
    title: 'Social Support Impact',
    content: 'Studies show strong correlation between social support and happiness.',
    source: 'Research Daily',
  },
];

function App() {
  const { selectedCountry, setSelectedCountry } = useHappinessStore();

  const globalAverage = happinessData.reduce((acc, curr) => acc + curr.score, 0) / happinessData.length;
  const topCountry = happinessData.reduce((a, b) => a.score > b.score ? a : b);
  const mostImprovedCountry = happinessData.reduce((a, b) => {
    const aImprovement = a.yearlyTrend[a.yearlyTrend.length - 1] - a.yearlyTrend[0];
    const bImprovement = b.yearlyTrend[b.yearlyTrend.length - 1] - b.yearlyTrend[0];
    return aImprovement > bImprovement ? a : b;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Globe2 className="w-8 h-8 text-indigo-600" />
            <h1 className="text-3xl font-bold text-gray-900">Global Happiness Index</h1>
          </div>
          <div className="flex items-center gap-2">
            <LineChart className="w-5 h-5 text-indigo-600" />
            <span className="text-sm text-gray-600">Live Updates</span>
          </div>
        </div>

        {/* Insight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <InsightCard
            type="insight"
            title="Global Average Happiness"
            value={`${globalAverage.toFixed(2)} / 10`}
          />
          <InsightCard
            type="trend"
            title="Happiest Country"
            value={`${topCountry.country} (${topCountry.score.toFixed(2)})`}
          />
          <InsightCard
            type="social"
            title="Most Improved"
            value={mostImprovedCountry.country}
          />
        </div>

        {/* Main Content */}
        {/* Main Content */}
<div className="grid grid-cols-1 gap-6">
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2 }}
  >
    <HappinessStats data={happinessData} />
  </motion.div>
</div>


        {/* Detailed Analysis */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <FactorsBreakdown country={selectedCountry} />
          <AgeAnalysis country={selectedCountry} />
          <YearlyTrend country={selectedCountry} />
        </div>

        {/* Advanced Analytics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <PredictiveAnalysis country={selectedCountry} />
          <SentimentAnalysis newsData={mockNewsData} />
        </div>

        {/* Country Selector */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center gap-2 mb-4">
            <Users className="w-5 h-5 text-indigo-600" />
            <h2 className="text-xl font-semibold">Select Country</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {happinessData.map((country) => (
              <button
                key={country.country}
                onClick={() => setSelectedCountry(country)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedCountry.country === country.country
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {country.country}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;