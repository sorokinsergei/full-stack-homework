export const runtime = 'nodejs';

import { prisma } from '@/db/lib/prisma-client';
import { NumbersSums } from '@/db/modules/number/number.interface';

export async function getSums(): Promise<NumbersSums[]> {
  return await prisma.$queryRaw<NumbersSums[]>`
      SELECT id AS "id1", value AS "value1",
             LEAD(id) OVER (ORDER BY id) AS "id2",
             LEAD(value) OVER (ORDER BY id) AS "value2",
             CAST(SUM(value) OVER (ORDER BY id ROWS BETWEEN CURRENT ROW AND 1 FOLLOWING) AS INT) AS "summary"
      from numbers;
  `;
}
