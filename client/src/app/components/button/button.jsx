import { Link } from 'react-router-dom';

const propTypes = {
  mods: PropTypes.shape({
    theme: PropTypes.string,
  }),
  to: PropTypes.string,
  children: PropTypes.string,
  hiddenText: PropTypes.string,
  icon: PropTypes.object,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

const defaultProps = {
};

const Button = (props) => {
  const {
    to, children, hiddenText, icon: Icon, disabled, onClick,
  } = props;

  const Tag = to ? Link : 'button';

  return (
    <Tag
      className={b('button', props, { disabled })}
      to={to}
      disabled={disabled}
      onClick={onClick}
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

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
