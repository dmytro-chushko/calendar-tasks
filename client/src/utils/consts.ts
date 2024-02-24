export const enum AppRoute {
  MONTH = '/',
  WEEK = '/week',
}

export const enum ReducerPath {
  IS_LOADING = 'loader-status',
  CURRENT_MONTH = 'current-month',
  HOLIDAY_API = 'holiday-api',
  TASK_API = 'task-api',
  TEXT_LABEL_API = 'text-label-api',
  COLOR_LABEL_API = 'color-label-api',
}

export const enum HolidayApi {
  API_HOST = 'https://date.nager.at',
  YEAR_HOLIDAY = 'api/v3/PublicHolidays',
}

export const CURRENT_COUNTRY = 'UA';

export const enum QueryUrl {
  TASK = 'task',
  TEXT_LABEL = 'text-label',
  ASSIGN_TEXT_LABEL = 'assign-text-label',
  UNASSIGN_TEXT_LABEL = 'unassign-text-label',
  COLOR_LABEL = 'color-label',
  ASSIGN_COLOR_LABEL = 'assign-color-label',
  UNASSIGN_COLOR_LABEL = 'unassign-color-label',
  REASSIGN_DATE = 'reassign-date',
  REASSIGN_ORDER = 'reassign-order',
}

export const enum MaxChar {
  DESCRIPTION = 10,
}

export const enum DebounceTime {
  DESCRIPTION = 500,
}

export const enum TextLabelMode {
  CONFIG = 'configuring',
  ASSIGN = 'assigning',
}
