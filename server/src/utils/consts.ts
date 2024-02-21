export const enum AppRoute {
  TEXT_LABEL = 'text-label',
  COLOR_LABEL = 'color-label',
  TASK = 'task',
  BY_DATE = 'by-date',
  ALL = 'all',
  ORDER = 'order',
  PARAM_ID = '/:id',
  ASSNG_TEXT_LABEL = 'assign-text-label',
  UNASSIGN_TEXT_LABEL = 'unassign-text-label',
}

export const enum ApiName {
  COLOR_LABEL = 'Color label',
  TEXT_LABEL = 'Text label',
  TASK = 'Task',
}

export const enum OrderAction {
  INCREMENT = 'increment',
  DECREMENT = 'decrement',
}

export const COLOR_HEX_REGEX = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;

export const DATE_REGEX = /^\d{4}-\d{2}-\d{2}$/;
