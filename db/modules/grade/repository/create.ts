import { prisma } from '@/db/lib/prisma-client';
import { GradeCreate } from '@/db/modules/grade/grade.interface';

export async function create(data: GradeCreate): Promise<void> {
  await prisma.$queryRaw`INSERT INTO grades (class, grade) VALUES (${data.class}::grade_type_enum, ${data.grade});`;
}
