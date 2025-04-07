import { TableViewType } from '@/app/(pages)/grades/components/GradesTable/constants';

export const paths = {
  numbers: '/numbers',
  grades: '/grades',
};

export const tabs = [
  { label: 'Numbers', path: paths.numbers },
  { label: 'Grades', path: paths.grades, query: `view=${TableViewType.ALL_DATA}` },
];
