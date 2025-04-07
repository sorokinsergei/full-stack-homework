import { GradeTypeEnum } from './constants';

export interface Grade {
  id: number;
  class: GradeTypeEnum;
  grade: number;
  createdAt: Date;
}

export interface ClassAverageGrade {
  class: GradeTypeEnum;
  grade: number;
}

export type GradeCreate = Pick<Grade, 'class' | 'grade'>;
