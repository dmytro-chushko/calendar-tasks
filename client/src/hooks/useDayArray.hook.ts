export const useDayArray = (date: Date): Date[] => {
  const dayArray: Date[] = [];
  const year = date.getFullYear();
  const month = date.getMonth();
  const monthStartsOn = new Date(year, month).getDay();
  let day = 1;

  for (let i = 0; i < 42; i++) {
    if (i < monthStartsOn) {
      dayArray[i] = new Date(year, month, i - monthStartsOn + 1);

      continue;
    }

    dayArray[i] = new Date(year, month, day++);
  }

  return dayArray;
};
