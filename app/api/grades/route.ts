import { NextRequest, NextResponse } from 'next/server';
import { GradeCreate } from '@/db/modules/grade/grade.interface';
import { createGrade } from '@/db/modules/grade/service/createGrade';

export async function POST(req: NextRequest): Promise<NextResponse> {
  const body: GradeCreate = await req.json();
  try {
    const grade = await createGrade(body);
    return NextResponse.json({ grade });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 400 });
  }
}
