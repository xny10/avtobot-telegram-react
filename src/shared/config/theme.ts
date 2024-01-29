import { createTheme } from '@mui/material';
import globalCssStyles from 'app/styles/global.module.scss';

import { TG_THEME_COLORS } from './colors';

export const theme = createTheme({
  palette: {
    mode: tg.colorScheme,
    // mode: 'dark',
    primary: {
      main: TG_THEME_COLORS.button,
    },
  },
  typography: {
    allVariants: {
      color: TG_THEME_COLORS.text,
    },
  },
  components: {
    MuiChip: {
      styleOverrides: {
        root: {
          color: TG_THEME_COLORS.text,
        },
        filled: {
          background: TG_THEME_COLORS.hint,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        textPrimary: {
          color: TG_THEME_COLORS['button-text'],
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
              color: TG_THEME_COLORS.hint,
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
