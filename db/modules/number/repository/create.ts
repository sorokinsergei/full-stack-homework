import { prisma } from '@/db/lib/prisma-client';
import { NumberCreate } from '@/db/modules/number/number.interface';

export async function create(data: NumberCreate): Promise<void> {
  await prisma.$queryRaw`INSERT INTO numbers (value) VALUES (${data.value});`;
}
