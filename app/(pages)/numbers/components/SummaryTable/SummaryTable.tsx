import { Box, Typography } from '@mui/material';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { unstable_cache } from 'next/cache';
import * as React from 'react';
import { fetchNumbersSums } from '@/app/(pages)/numbers/actions';
import { CACHE_TAG_SUMS } from '@/app/(pages)/numbers/constants';
import { Table } from '@/app/components/table';
import { columns } from './constants';

const getCachedSums = unstable_cache(
  async () => {
    return await fetchNumbersSums();
  },
  [CACHE_TAG_SUMS + '_key'],
  { tags: [CACHE_TAG_SUMS] },
);

export default async function SummaryTable() {
  const summaries = await getCachedSums();

  return (
    <Box>
      <Typography variant={'h6'} sx={{ paddingBottom: 1, color: 'black' }}>
        Summary
      </Typography>
      <Table columns={columns}>
        {summaries.length ? (
          summaries.map((summary, index) => (
            <TableRow
              key={`${summary.id1}${index}`}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align={'left'}>{summary.id1}</TableCell>
              <TableCell align="left">{summary.value1}</TableCell>
              <TableCell align="left">{summary.id2 || '--'}</TableCell>
              <TableCell align="left">{summary.value2 || '--'}</TableCell>
              <TableCell align="left">{summary.summary}</TableCell>
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
