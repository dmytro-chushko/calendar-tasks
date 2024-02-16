import { useTranslation } from 'react-i18next';
import { useGetCurrentDate } from 'src/redux/hooks';

interface IWeekDay {
  dayName: string[];
  weekArray: Date[];
};

const DAYS_IN_WEEK = 7;

export const useWeekDay = (): IWeekDay => {
  const { t } = useTranslation();
  const { year, month, date } = useGetCurrentDate();

  const dayName = [
    t('sunday'),
    t('monday'),
    t('tuesday'),
    t('wednesday'),
    t('thursday'),
    t('friday'),
    t('saturday'),
  ];

  const weekArray: Date[] = [];
  let sundayDate = date - new Date(year, month, date).getDay();

  for (let i = 0; i < DAYS_IN_WEEK; i++) {
    weekArray[i] = new Date(year, month, sundayDate++);
  }

  return { dayName, weekArray };
};
