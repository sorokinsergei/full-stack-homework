import {
  ITableViewType,
  TableViewType,
} from '@/app/(pages)/grades/components/GradesTable/constants';

export async function getViewType(
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>,
): Promise<ITableViewType> {
  const rawView = (await searchParams).view?.toString() || '';
  const isViewProvided = (Object.values(TableViewType) as string[]).includes(rawView);

  return isViewProvided ? (rawView as ITableViewType) : TableViewType.ALL_DATA;
}
