import { Box, Typography } from '@mui/material';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { unstable_cache } from 'next/cache';
import * as React from 'react';
import { fetchAverageGrades, fetchGrades } from '@/app/(pages)/grades/actions';
import { Filters } from '@/app/(pages)/grades/components/GradesTable/Filters';
import { CACHE_TAG_GRADES } from '@/app/(pages)/grades/constants';
import { Table } from '@/app/components/table';
import { AverageTypeEnum } from '@/db/modules/grade/constants';
import { ClassAverageGrade, Grade } from '@/db/modules/grade/grade.interface';
import {
  TableViewType,
  tableViewTypeColumns,
  ITableViewType,
  tableViewTableName,
} from './constants';

const getCachedGrades = unstable_cache(
  async (tableView: ITableViewType): Promise<Array<ClassAverageGrade | Grade>> => {
    console.debug('getCachedGrades called: ', { tableView });
    if (tableView === TableViewType.ALL_DATA) {
      return await fetchGrades();
    } else {
      return await fetchAverageGrades(tableView as AverageTypeEnum);
    }
  },
  [CACHE_TAG_GRADES + '_key'],
  { tags: [CACHE_TAG_GRADES] },
);

interface GradesTableProps {
  viewType: ITableViewType;
}

export default async function GradesTable({ viewType }: GradesTableProps) {
  const grades = await getCachedGrades(viewType);

  return (
    <Box>
      <Box
        sx={{ flexGrow: 1, display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}
      >
        <Typography variant={'h6'} sx={{ paddingBottom: 1, color: 'black' }}>
          {tableViewTableName[viewType]}
        </Typography>
        <Filters viewType={viewType} />
      </Box>
      <Table columns={tableViewTypeColumns[viewType]}>
        {grades.length ? (
          grades.map((grade, index) => (
            <TableRow
              key={`${grade.class}${index}`}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              {viewType === TableViewType.ALL_DATA && (
                <TableCell align={'left'}>{(grade as Grade).id}</TableCell>
              )}
              <TableCell align="left">{grade.class}</TableCell>
              <TableCell align="left">{grade.grade}</TableCell>
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell>No data</TableCell>
          </TableRow>
        )}
      </Table>
    </Box>
  );
}
