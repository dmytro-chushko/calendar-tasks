import { useTranslation } from 'react-i18next';

interface IUseMonth {
  monthName: string[];
  isTheFirstOrLastDay: (date: Date) => boolean;
  getShortMonthName: (month: string) => string;
}

const DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

export const useMonth = (): IUseMonth => {
  const { t } = useTranslation();

  const monthName = [
    t('january'),
    t('february'),
    t('march'),
    t('april'),
    t('may'),
    t('june'),
    t('july'),
    t('august'),
    t('september'),
    t('october'),
    t('november'),
    t('december'),
  ];

  const isTheFirstOrLastDay = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const isLeapYear = !(year % 4 || (!(year % 100) && year % 400));

    if (date.getDate() === 1) return true;

    if (
      date.getDate() ===
      (isLeapYear && month === 1
        ? DAYS_IN_MONTH[month] + 1
        : DAYS_IN_MONTH[month])
    )
      return true;

    return false;
  };

  const getShortMonthName = (month: string) =>
    month.split('').slice(0, 3).join('');

  return {
    monthName,
    isTheFirstOrLastDay,
    getShortMonthName,
  };
};
