import { getMotivationalMessage } from './motivationalMessages';
import { getDreamSymbols } from './dreamSymbols';
import { getGrowthAdvice } from './growthAdvice';

export function analyzeDream(dream: string): string {
  const dreamLower = dream.toLowerCase();
  const symbols = getDreamSymbols(dreamLower);
  const motivationalMessage = getMotivationalMessage(symbols);
  const advice = getGrowthAdvice(symbols);

  return `${motivationalMessage}\n\n${symbols}\n\n${advice}`;
}