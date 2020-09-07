const propTypes = {
  children: PropTypes.node.isRequired,
};

const defaultProps = {
};

const Form__Success = (props) => {
  const { children } = props;

  return (
    <div
      className={b('form__success', props)}
    >
      {children}
    </div>
  );
};

Form__Success.propTypes = propTypes;
Form__Success.defaultProps = defaultProps;

export default Form__Success;
