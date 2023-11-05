import { createTheme } from '@mui/material';

export const theme = createTheme({
  typography: {
    allVariants: {
      color: 'var(--tg-theme-text-color)',
    },
  },
  components: {
    MuiChip: {
      styleOverrides: {
        root: {
          background: 'var(--tg-theme-hint-color)',
        },
      },
    },
  },
});
