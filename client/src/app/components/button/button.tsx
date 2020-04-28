import * as React from "react";
import { Link } from 'react-router-dom';

interface propTypes {
  children?: React.ReactNode,
  mods?: object,
  to?: string,
  hiddenText?: string,
  icon?: React.ElementType,
  disabled?: boolean,
  onClick?: CallbackFunction,
  mix?: string,
  type?: 'button' | 'submit' | 'reset',
}

const Button:React.FC<propTypes> = (props) => {
  const {
    type, to, children, hiddenText, icon: Icon, disabled, onClick,
  } = props;

  const Tag = to ? Link : 'button';

  return (
    <Tag
      className={b('button', props, { disabled })}
      to={to}
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {Icon && (
        <div
          className={b('button__icon-canvas')}>
          <Icon className={b('button__icon')}/>
        </div>
      )}

      <span className={b('button__text')}>{children}</span>

      {hiddenText && (
        <span className={b('button__hidden-text')}>{hiddenText}</span>
      )}
    </Tag>
  );
};

export default Button;
