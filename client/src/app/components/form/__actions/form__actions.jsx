const propTypes = {
  children: PropTypes.node.isRequired,
};

const defaultProps = {
};

const Form__Actions = (props) => {
  const { children } = props;

  return (
    <div
      className={b('form__actions')}
    >
      {children}
    </div>
  );
};

Form__Actions.propTypes = propTypes;
Form__Actions.defaultProps = defaultProps;

export default Form__Actions;
