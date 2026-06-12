const WORDS_PER_MINUTE = 200;

export function getWordCount(text: string): number {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

export function getReadingTime(text: string): number {
  const words = getWordCount(text);
  return Math.max(1, Math.ceil(words / WORDS_PER_MINUTE));
}

export function formatReadingTime(minutes: number): string {
  return `${minutes} min read`;
}
