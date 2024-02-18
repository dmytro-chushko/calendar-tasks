import { modifyDateOrMonth } from '.';

export const formatYMDDate = (date: Date): string => {
  const year = date.getFullYear();
  const month = modifyDateOrMonth(date.getMonth() + 1);
  const day = modifyDateOrMonth(date.getDate());

  return `${year}-${month}-${day}`;
};
