export interface INumber {
  id: number;
  value: number;
  createdAt: Date;
}

export interface NumbersSums {
  id1: number;
  value1: number;
  id2: number | null;
  value2: number | null;
  summary: number;
}

export type NumberCreate = Pick<INumber, 'value'>;
