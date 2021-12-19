export const BUTTON_DEFAULT_PROPS = Object.freeze({
  as: 'button',
  rel: 'noreferrer noopener',
  type: 'button',
});

const useButton = (props) => {
  const {
    as = BUTTON_DEFAULT_PROPS.as,
    disabled,
    onClick,
    rel = BUTTON_DEFAULT_PROPS.rel,
    type = BUTTON_DEFAULT_PROPS.type,
    target,
    id,
    href,
  } = props;

  let customProps = {};

  if (as === 'button') {
    customProps = {
      disabled,
      type,
    };
  } else {
    customProps = {
      'aria-disabled': disabled || undefined,
      href: disabled ? undefined : href,
      rel,
      role: 'button',
      tabIndex: disabled ? undefined : 0,
      target,
    };
  }

  return {
    buttonProps: {
      ...customProps,
      'aria-controls': props['aria-controls'],
      'aria-describedby': props['aria-describedby'],
      'aria-expanded': props['aria-expanded'],
      'aria-haspopup': props['aria-haspopup'],
      'aria-label': props['aria-label'],
      'aria-labelledby': props['aria-labelledby'],
      'aria-pressed': props['aria-pressed'],
      id,
      onClick,
    },
  };
};

export default useButton;
