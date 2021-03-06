import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import SwitchBase from '../internal/SwitchBase';
import RadioButtonCheckedIcon from '../internal/svg-icons/RadioButtonChecked';
import RadioButtonUncheckedIcon from '../internal/svg-icons/RadioButtonUnchecked';
import withStyles from '../styles/withStyles';

export const styles = theme => ({
  default: {
    color: theme.palette.text.secondary,
  },
  checked: {},
  checkedPrimary: {
    color: theme.palette.primary.main,
  },
  checkedSecondary: {
    color: theme.palette.secondary.main,
  },
  disabled: {
    color: theme.palette.action.disabled,
  },
});

function Radio(props) {
  const { classes, color, ...other } = props;
  const checkedClass = classNames(classes.checked, {
    [classes.checkedPrimary]: color === 'primary',
    [classes.checkedSecondary]: color === 'secondary',
  });

  return (
    <SwitchBase
      type="radio"
      icon={<RadioButtonUncheckedIcon />}
      checkedIcon={<RadioButtonCheckedIcon />}
      classes={{
        default: classes.default,
        checked: checkedClass,
        disabled: classes.disabled,
      }}
      {...other}
    />
  );
}

Radio.propTypes = {
  /**
   * If `true`, the component is checked.
   */
  checked: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  /**
   * The icon to display when the component is checked.
   */
  checkedIcon: PropTypes.node,
  /**
   * Useful to extend the style applied to components.
   */
  classes: PropTypes.object.isRequired,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: PropTypes.oneOf(['primary', 'secondary']),
  /**
   * @ignore
   */
  defaultChecked: PropTypes.bool,
  /**
   * If `true`, the switch will be disabled.
   */
  disabled: PropTypes.bool,
  /**
   * If `true`, the ripple effect will be disabled.
   */
  disableRipple: PropTypes.bool,
  /**
   * The icon to display when the component is unchecked.
   */
  icon: PropTypes.node,
  /**
   * The id of the `input` element.
   */
  id: PropTypes.string,
  /**
   * Properties applied to the `input` element.
   */
  inputProps: PropTypes.object,
  /**
   * Use that property to pass a ref callback to the native input component.
   */
  inputRef: PropTypes.func,
  /*
   * @ignore
   */
  name: PropTypes.string,
  /**
   * Callback fired when the state is changed.
   *
   * @param {object} event The event source of the callback
   * @param {boolean} checked The `checked` value of the switch
   */
  onChange: PropTypes.func,
  /**
   * @ignore
   */
  tabIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /**
   * The input component property `type`.
   */
  type: PropTypes.string,
  /**
   * The value of the component.
   */
  value: PropTypes.string,
};

Radio.defaultProps = {
  color: 'secondary',
};

export default withStyles(styles, { name: 'MuiRadio' })(Radio);
