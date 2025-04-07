'use client';
import {
  capitalize,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { useRouter } from 'next/navigation';
import * as React from 'react';
import { ReactNode } from 'react';
import {
  ITableViewType,
  TableViewType,
} from '@/app/(pages)/grades/components/GradesTable/constants';
import { paths } from '@/app/components/Navigation/contants';

interface FiltersProps {
  viewType: ITableViewType;
}

export const Filters = ({ viewType }: FiltersProps) => {
  const router = useRouter();

  const handleChangeType = (event: SelectChangeEvent<ITableViewType | null>, _child: ReactNode) => {
    const type = event.target.value as ITableViewType;

    router.push(`${paths.grades}?view=${type}`);
  };

  return (
    <FormControl sx={{ minWidth: 200, width: 'auto' }}>
      <InputLabel id="class-name-label">Table view</InputLabel>
      <Select
        labelId="table-view-label"
        id="view-type"
        value={viewType}
        label="Table view"
        onChange={handleChangeType}
      >
        {Object.values(TableViewType).map((viewType) => (
          <MenuItem key={viewType} value={viewType}>
            {capitalize(viewType).replaceAll('_', ' ')}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
