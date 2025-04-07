import { NextRequest, NextResponse } from 'next/server';
import { NumberCreate } from '@/db/modules/number/number.interface';
import { createNumber } from '@/db/modules/number/service/createNumber';

export async function POST(req: NextRequest): Promise<NextResponse> {
  const body: NumberCreate = await req.json();
  try {
    const createdNumber = await createNumber(body);
    return NextResponse.json({ number: createdNumber });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 400 });
  }
}
