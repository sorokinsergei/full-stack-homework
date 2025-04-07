import { AverageTypeEnum } from '@/db/modules/grade/constants';
import { ClassAverageGrade } from '@/db/modules/grade/grade.interface';
import { getAverageGrades as getAverageGradesQuery } from '@/db/modules/grade/repository/getAverageGrades';

export async function getAverageGrades(tableView: AverageTypeEnum): Promise<ClassAverageGrade[]> {
  try {
    return await getAverageGradesQuery(tableView);
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch average grades');
  }
}
