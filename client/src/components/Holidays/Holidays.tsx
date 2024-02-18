import { FC } from 'react';

import { useLoader } from 'src/hooks/useLoader.hook';
import { useGetAllYearHolidaysQuery } from 'src/redux/api/holiday.api';
import { useGetCurrentDate } from 'src/redux/hooks';
import { CURRENT_COUNTRY } from 'src/utils/consts';
import { isTheSameDate } from 'src/utils/helpers';

import { HolidayLabel } from './Holidays.styled';

interface IHolidaysProps {
  date: Date;
}

export const Holidays: FC<IHolidaysProps> = ({ date }) => {
  const { year } = useGetCurrentDate();
  const { data: holidays, isLoading } = useGetAllYearHolidaysQuery({
    year,
    countryCode: CURRENT_COUNTRY,
  });
  const currentHolidays =
    holidays &&
    holidays.filter(holiday => isTheSameDate(new Date(holiday.date), date));

  useLoader(isLoading);

  return currentHolidays && currentHolidays.length > 0 ? (
    currentHolidays.map(({ name }) => (
      <HolidayLabel key={name}>{name}</HolidayLabel>
    ))
  ) : (
    <div style={{ display: 'none' }}></div>
  );
};
