export function capitalize(word: string): string {
  const lower = word.toLowerCase();
  return word.charAt(0).toUpperCase() + lower.slice(1);
}

export function capitalizeSentence(sentence: string): string {
  return sentence.split(' ').map(capitalize).join(' ');
}