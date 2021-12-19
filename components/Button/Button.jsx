import React from 'react';
import PropTypes from 'prop-types';

import { HORIZONTAL_POSITION, SIZE } from './enums';
import ENUM_PROP_TYPES from './enums.propTypes';

import useButton, { BUTTON_DEFAULT_PROPS } from './useButton';
import * as classes from './Button.module.scss';

const Button = (props) => {
  const {
    as: Element, children, icon, iconPosition,
  } = props;

  const { buttonProps } = useButton(props);

  return (
    <Element className={classes.button} {...buttonProps}>
      {iconPosition === HORIZONTAL_POSITION.LEFT ? icon : null}
      {children}
      {iconPosition === HORIZONTAL_POSITION.RIGHT ? icon : null}
    </Element>
  );
};

Button.defaultProps = {
  as: BUTTON_DEFAULT_PROPS.as,
  children: undefined,
  disabled: undefined,
  icon: undefined,
  iconPosition: HORIZONTAL_POSITION.RIGHT,
  onClick: undefined,
  size: SIZE.MEDIUM,
  type: BUTTON_DEFAULT_PROPS.type,
  variant: 'primary',
};

Button.propTypes = {
  /**
  * How should button be rendered?
  * You can pass a string, or eg. a `Link` component to make this button work with router.
  */
  as: PropTypes.oneOfType([
    PropTypes.oneOf(['button', 'a']),
    PropTypes.elementType,
  ]),
  /**
  * What is the content of the button?
  */
  children: PropTypes.elementType,
  /**
  * Should button be disabled?
  */
  disabled: PropTypes.bool,
  /**
  * What's the icon you want to render?
  * Please note you should use `<Icon />` component to maintain an Accessibility of the icon!
  */
  icon: PropTypes.elementType,
  /**
  * Which side should icon be placed?
  */
  iconPosition: ENUM_PROP_TYPES.HORIZONTAL_POSITION,
  /**
  * What should happen after button is clicked?
  */
  onClick: PropTypes.func,
  /**
  * How large should the button be?
  */
  size: ENUM_PROP_TYPES.SIZE,
  /**
  * What's the HTML type of the button?
  */
  type: PropTypes.oneOf(['button', 'submit']),
  /**
  * How should button look like?
  */
  variant: PropTypes.oneOf(['primary', 'secondary']),
};

export default Button;