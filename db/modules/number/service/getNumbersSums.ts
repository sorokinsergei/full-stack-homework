export const runtime = 'nodejs';

import { NumbersSums } from '@/db/modules/number/number.interface';
import { getSums } from '@/db/modules/number/repository/getSums';

export async function getNumbersSums(): Promise<NumbersSums[]> {
  try {
    return await getSums();
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch numbers sums');
  }
}
