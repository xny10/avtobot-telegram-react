import { createTheme } from '@mui/material';
import globalCssStyles from 'app/styles/global.module.scss';
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
      styleOverrides: {
        root: (config) => ({
          input: {
            '&::placeholder': {
              color: 'var(--tg-theme-hint-color)',
            },
            '&:focus::placeholder': {
              color: config.theme.palette.primary.main,
            },
          },
        }),
      },
    },
    MuiSelect: {
      defaultProps: {
        variant: 'standard',
        MenuProps: {
          classes: {
            paper: globalCssStyles.select_menu_paper,
          },
        },
      },
    },
  },
});
