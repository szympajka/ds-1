export const HORIZONTAL_POSITION = Object.freeze({
  LEFT: 'left',
  RIGHT: 'right',
});

export const VERTICAL_POSITION = Object.freeze({
  BOTTOM: 'bottom',
  TOP: 'top',
});

export const POSITION = Object.freeze({
  ...HORIZONTAL_POSITION,
  ...VERTICAL_POSITION,
});

export const SIZE = Object.freeze({
  LARGE: 'large',
  MEDIUM: 'medium',
  SMALL: 'small',
});