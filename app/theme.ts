import { createTheme } from '@mui/material';

export const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          height: 32,
          minHeight: 32,
          backgroundColor: '#479aed',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiInputBase-root': {
            height: 32,
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          '& .MuiInputBase-root': {
            height: 32,
          },
        },
        select: {
          height: 32,
          display: 'flex',
          alignItems: 'center',
          paddingTop: 0,
          paddingBottom: 0,
        },
      },
    },
    MuiNativeSelect: {
      styleOverrides: {
        root: {
          '& .MuiInputBase-root': {
            height: 32,
          },
        },
        select: {
          height: 32,
          paddingTop: 0,
          paddingBottom: 0,
          display: 'flex',
          alignItems: 'center',
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          transform: 'translate(14px, 5px) scale(1)',
          '&.MuiInputLabel-shrink': {
            transform: 'translate(14px, -6px) scale(0.75)',
          },
        },
      },
    },
  },
});
