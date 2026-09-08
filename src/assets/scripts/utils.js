export function capitalizeLetter (word) {
  const firstLetter = word.charAt(0).toUpperCase();
  return `${firstLetter}${word.slice(1)}`;

}

export function randomIndex (arr) {
  return Math.floor(Math.random() * arr.length);
}

