import { createTheme } from '@mui/material';
import { tg } from 'shared/hooks/useTelegram';

export const theme = createTheme({
  palette: {
    mode: tg.colorScheme,
  },
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
    MuiTextField: {
      defaultProps: {
        variant: 'standard',
      },
    },
    MuiSelect: {
      defaultProps: {
        variant: 'standard',
      },
    },
  },
});
