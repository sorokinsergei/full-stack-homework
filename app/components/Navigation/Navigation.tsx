'use client';

import { Box, Tabs, Tab } from '@mui/material';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useMemo } from 'react';
import { tabs } from '@/app/components/Navigation/contants';

export const Navigation = () => {
  const pathname = usePathname();

  const currentTabIndex = useMemo(() => {
    return tabs.findIndex((tab) => pathname.startsWith(tab.path));
  }, [pathname]);

  return (
    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <Tabs value={currentTabIndex} aria-label="navigation tabs">
        {tabs.map((tab, index) => (
          <Tab
            key={index}
            label={tab.label}
            component={Link}
            href={tab.query ? `${tab.path}?${tab.query}` : tab.path}
          />
        ))}
      </Tabs>
    </Box>
  );
};
