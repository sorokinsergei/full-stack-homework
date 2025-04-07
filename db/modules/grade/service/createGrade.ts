import { GradeTypeEnum } from '@/db/modules/grade/constants';
import { GradeCreate } from '@/db/modules/grade/grade.interface';
import { create } from '@/db/modules/grade/repository/create';

export async function createGrade(data: GradeCreate): Promise<void> {
  validateGrade(data);

  try {
    await create(data);
  } catch (e) {
    console.error(e);
    throw new Error(`Failed to create a new class grade`);
  }
}

function validateGrade(data: GradeCreate): void {
  if (!Number.isInteger(data.grade) || data.grade < 0 || data.grade > 100) {
    throw new Error(`Invalid grade`);
  }
  if (!Object.values(GradeTypeEnum).includes(data.class)) {
    throw new Error(`Invalid class`);
  }
}
