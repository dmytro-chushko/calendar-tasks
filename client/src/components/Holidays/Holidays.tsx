import { FC } from 'react';

import { useGetAllYearHolidaysQuery } from 'src/redux/api/holiday.api';
import { useGetCurrentDate } from 'src/redux/hooks';
import { CURRENT_COUNTRY } from 'src/utils/consts';
import { isTheSameDate } from 'src/utils/helpers';
import { useLoader } from 'src/hooks/useLoader.hook';

import { StyledParagaph } from 'src/styles/ui/typography.styled';

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

  return (currentHolidays &&
        currentHolidays.length > 0) ?
        currentHolidays.map(({ name }) => (
          <StyledParagaph key={name}>{name}</StyledParagaph>
        )) : <div style={{display: "none"}}></div>;
};
