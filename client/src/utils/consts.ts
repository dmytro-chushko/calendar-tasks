export const enum AppRoute {
  MONTH = '/',
  WEEK = '/week',
}

export const enum ReducerPath {
  IS_LOADING = 'loader-status',
  CURRENT_MONTH = 'current-month',
  HOLIDAY_API = 'holiday-api',
  TASK_API = 'task-api',
}

export const enum HolidayApi {
  API_HOST = 'https://date.nager.at',
  YEAR_HOLIDAY = 'api/v3/PublicHolidays',
}

export const CURRENT_COUNTRY = 'UA';

export const enum QueryUrl {
  TASK = 'task',
}

export const enum MaxChar {
  DESCRIPTION = 10,
}

export const enum DebounceTime {
  DESCRIPTION = 500,
}
