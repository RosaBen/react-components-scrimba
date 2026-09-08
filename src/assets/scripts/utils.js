export function capitalizeLetter (word) {
  const firstLetter = word.charAt(0).toUpperCase();
  return `${firstLetter}${word.slice(1)}`;

}


