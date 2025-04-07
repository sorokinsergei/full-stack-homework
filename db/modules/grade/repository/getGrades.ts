import { prisma } from '@/db/lib/prisma-client';
import { Grade } from '@/db/modules/grade/grade.interface';

export async function getGrades(): Promise<Grade[]> {
  return await prisma.$queryRaw<Grade[]>`SELECT * FROM grades;`;
}
