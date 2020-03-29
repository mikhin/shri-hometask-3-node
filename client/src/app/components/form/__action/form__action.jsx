const propTypes = {
  children: PropTypes.node.isRequired,
};

const defaultProps = {
};

const Form__Action = (props) => {
  const { children } = props;

  return (
    <div
      className={b('form__action')}
    >
      {children}
    </div>
  );
};

Form__Action.propTypes = propTypes;
Form__Action.defaultProps = defaultProps;

export default Form__Action;
