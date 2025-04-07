'use server';
import { revalidateTag } from 'next/cache';
import { CACHE_TAG_SUMS } from '@/app/(pages)/numbers/constants';
import { NumbersSums } from '@/db/modules/number/number.interface';
import { getNumbersSums } from '@/db/modules/number/service/getNumbersSums';

export async function fetchNumbersSums(): Promise<NumbersSums[]> {
  return await getNumbersSums();
}

export async function handleRefreshSumsTable() {
  revalidateTag(CACHE_TAG_SUMS);
}
