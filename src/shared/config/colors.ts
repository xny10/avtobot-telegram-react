export const COLORS = {
  blue: '#2AABEE',
  lightgray: '#8C8C8C',
  gray: '#333333',
} as const;

const DocumentCSSProperties = getComputedStyle(document.documentElement);

export const TG_THEME_COLORS = {
  bg: DocumentCSSProperties.getPropertyValue('--tg-theme-bg-color'),
  text: DocumentCSSProperties.getPropertyValue('--tg-theme-text-color'),
  hint: DocumentCSSProperties.getPropertyValue('--tg-theme-hint-color'),
  link: DocumentCSSProperties.getPropertyValue('--tg-theme-link-color'),
  button: DocumentCSSProperties.getPropertyValue('--tg-theme-button-color'),
  'button-text': DocumentCSSProperties.getPropertyValue('--tg-theme-button-text-color'),
  'secondary-bg': DocumentCSSProperties.getPropertyValue('--tg-theme-secondary-bg-color'),
};
