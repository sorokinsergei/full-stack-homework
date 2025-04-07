'use server';

import { revalidateTag } from 'next/cache';
import { CACHE_TAG_GRADES } from '@/app/(pages)/grades/constants';
import { AverageTypeEnum } from '@/db/modules/grade/constants';
import { getAverageGrades } from '@/db/modules/grade/service/getAverageGrades';
import { getGrades } from '@/db/modules/grade/service/getGrades';

export async function fetchGrades() {
  return await getGrades();
}

export async function fetchAverageGrades(tableView: AverageTypeEnum) {
  return await getAverageGrades(tableView);
}

export async function handleRefreshGradesTable() {
  revalidateTag(CACHE_TAG_GRADES);
}
