import { useTranslation } from 'react-i18next';

type WeekDay = string[];

export const useWeekDay = (): WeekDay => {
  const { t } = useTranslation();

  return [
    t('sunday'),
    t('monday'),
    t('tuesday'),
    t('wednesday'),
    t('thursday'),
    t('friday'),
    t('saturday'),
  ];
};
