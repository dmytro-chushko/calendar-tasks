export const enum SUCCESSFUL_RESPONSE {
  UPDATED = 'Entity successfully updated',
  DELETED = 'Entity successfully deleted',
}

export const enum ROUTE {
  TEXT_LABEL = 'text-label',
  COLOR_LABEL = 'color-label',
  CARD = 'card',
  ALL = 'all',
  ORDER = 'order',
  PARAM_ID = '/:id',
}

export const enum ORDER_ACTION {
  INCREMENT = 'increment',
  DECREMENT = 'decrement',
}

export const COLOR_HEX_REGEX = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
