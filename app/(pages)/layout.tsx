'use client';
import { Box, ThemeProvider } from '@mui/material';
import React from 'react';
import { Navigation } from '@/app/components/Navigation/Navigation';
import { theme } from '@/app/theme';

export default function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Navigation />
        <Box sx={{ margin: 1 }}>{children}</Box>
      </Box>
    </ThemeProvider>
  );
}
