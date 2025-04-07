import { Prisma } from '@/db/lib/prisma';
import { prisma } from '@/db/lib/prisma-client';
import { AverageTypeEnum } from '@/db/modules/grade/constants';
import { ClassAverageGrade } from '@/db/modules/grade/grade.interface';

const typeQueryMap = {
  [AverageTypeEnum.CLASS_AVERAGES]: {
    where: Prisma.empty,
    postFilter: Prisma.empty,
  },
  [AverageTypeEnum.PASSING_AVERAGE]: {
    where: Prisma.sql`WHERE grade > 55`,
    postFilter: Prisma.empty,
  },
  [AverageTypeEnum.HIGH_PERFORM_CLASS]: {
    where: Prisma.empty,
    postFilter: Prisma.sql`HAVING AVG(grade) > 70`,
  },
};

export async function getAverageGrades(tableView: AverageTypeEnum): Promise<ClassAverageGrade[]> {
  const { where, postFilter } = typeQueryMap[tableView] ?? {};

  const query = Prisma.sql`
      SELECT class, CAST(AVG(grade) AS SMALLINT) AS grade
      FROM grades ${where}
      GROUP BY class ${postFilter};
  `;

  return await prisma.$queryRaw<ClassAverageGrade[]>(query);
}
