export function insertDots(stringifiedNumber: string) {
  const chars = stringifiedNumber.split('').reverse();
  const newChars = [];
  for (let i = 0; i < chars.length; i += 1) {
    if (i % 3 === 0 && i !== 0) newChars.push('.');
    newChars.push(chars[i]);
  }
  return newChars.reverse().join('');
}
