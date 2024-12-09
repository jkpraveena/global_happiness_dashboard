const adviceList = [
  {
    theme: 'reflection',
    advice: 'Take a moment today to reflect on what makes you feel strong and capable.',
  },
  {
    theme: 'action',
    advice: 'Consider one small step you can take today towards your goals.',
  },
  {
    theme: 'mindfulness',
    advice: 'Practice mindfulness to stay connected with your inner wisdom.',
  },
  {
    theme: 'gratitude',
    advice: 'Express gratitude for your journey and the growth opportunities ahead.',
  },
  {
    theme: 'connection',
    advice: 'Share your aspirations with someone who supports your growth.',
  },
];

export function getGrowthAdvice(symbolInterpretation: string): string {
  const randomIndex = Math.floor(Math.random() * adviceList.length);
  const { advice } = adviceList[randomIndex];
  
  return `💫 Growth Opportunity: ${advice}`;
}