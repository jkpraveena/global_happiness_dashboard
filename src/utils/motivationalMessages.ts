const messages = [
  'Your dreams are showing you the path to your highest potential.',
  'Every dream is an opportunity to understand yourself better and grow.',
  'Your subconscious mind is guiding you towards positive transformation.',
  'This dream reflects your inner strength and capacity for growth.',
  'You\'re on a journey of self-discovery and personal development.',
];

export function getMotivationalMessage(symbolInterpretation: string): string {
  const randomIndex = Math.floor(Math.random() * messages.length);
  const message = messages[randomIndex];
  
  return `✨ ${message}`;
}