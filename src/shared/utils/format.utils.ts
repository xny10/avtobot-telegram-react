export function formatNumber(num: number, separator = '.') {
  return num.toString().replace(/(?!\b)(\d{3}(?=(\d{3})*\b))/g, `${separator}$1`);
}
