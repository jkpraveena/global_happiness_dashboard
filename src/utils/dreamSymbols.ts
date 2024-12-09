interface SymbolMeaning {
  meaning: string;
  positive: string;
}

const symbolDictionary: Record<string, SymbolMeaning> = {
  water: {
    meaning: 'emotions and inner feelings',
    positive: 'You\'re in touch with your emotions, which is a powerful tool for personal growth',
  },
  flying: {
    meaning: 'freedom and possibilities',
    positive: 'Your mind is exploring new heights and opportunities',
  },
  falling: {
    meaning: 'letting go or transformation',
    positive: 'You\'re ready for positive change and personal transformation',
  },
  running: {
    meaning: 'moving forward in life',
    positive: 'You have the drive to achieve your goals',
  },
  light: {
    meaning: 'clarity and insight',
    positive: 'You\'re gaining valuable insights about your life path',
  },
  dark: {
    meaning: 'exploring the unknown',
    positive: 'You\'re brave enough to face challenges and grow from them',
  },
  friend: {
    meaning: 'aspects of yourself or support',
    positive: 'You have the inner strength and support you need',
  },
  door: {
    meaning: 'new opportunities',
    positive: 'New possibilities are opening up for you',
  },
  home: {
    meaning: 'self and comfort',
    positive: 'You\'re developing a stronger sense of self',
  },
};

export function getDreamSymbols(dream: string): string {
  let interpretation = 'Key Elements in Your Dream:\n';
  let found = false;

  Object.entries(symbolDictionary).forEach(([symbol, { meaning, positive }]) => {
    if (dream.includes(symbol)) {
      found = true;
      interpretation += `• The ${symbol} in your dream represents ${meaning}. ${positive}.\n`;
    }
  });

  if (!found) {
    interpretation += '• Your dream is uniquely personal, reflecting your individual journey and growth.\n';
  }

  return interpretation;
}