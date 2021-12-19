import PropTypes from 'prop-types';

const HORIZONTAL_POSITION = PropTypes.oneOf(['left', 'right']);

const VERTICAL_POSITION = PropTypes.oneOf(['top', 'bottom']);

const POSITION = PropTypes.oneOfType([HORIZONTAL_POSITION, VERTICAL_POSITION]);

const SIZE = PropTypes.oneOf(['small', 'medium', 'large']);

export default {
  HORIZONTAL_POSITION,
  POSITION,
  SIZE,
  VERTICAL_POSITION,
};