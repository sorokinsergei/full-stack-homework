import { Grade } from '@/db/modules/grade/grade.interface';
import { getGrades as getGradesQuery } from '@/db/modules/grade/repository/getGrades';

export async function getGrades(): Promise<Grade[]> {
  try {
    return await getGradesQuery();
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch grades');
  }
}
