import { AverageTypeEnum } from '@/db/modules/grade/constants';

export const TableViewType = {
  ALL_DATA: 'all_data',
  ...AverageTypeEnum,
} as const;

export type ITableViewType = (typeof TableViewType)[keyof typeof TableViewType];

export const tableViewTypeColumns: Record<ITableViewType, string[]> = {
  [TableViewType.ALL_DATA]: ['Id', 'Class', 'Grade'],
  [TableViewType.CLASS_AVERAGES]: ['Class', 'Average Grade'],
  [TableViewType.PASSING_AVERAGE]: ['Class', 'Average Grade'],
  [TableViewType.HIGH_PERFORM_CLASS]: ['Class', 'Average Grade'],
};

export const tableViewTableName = {
  [TableViewType.ALL_DATA]: 'Grades',
  [TableViewType.CLASS_AVERAGES]: 'Average classes',
  [TableViewType.PASSING_AVERAGE]: 'Passing classes',
  [TableViewType.HIGH_PERFORM_CLASS]: 'High perform classes',
};
