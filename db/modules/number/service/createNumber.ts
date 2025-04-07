import { NumberCreate } from '@/db/modules/number/number.interface';
import { create } from '@/db/modules/number/repository/create';

export async function createNumber(data: NumberCreate): Promise<void> {
  validateData(data);

  try {
    await create(data);
  } catch (e) {
    console.error(e);
    throw new Error(`Failed to create a new number`);
  }
}

function validateData(data: NumberCreate): void {
  if (!Number.isInteger(data.value)) {
    throw new Error(`Invalid number`);
  }
}
