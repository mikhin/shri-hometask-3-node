const propTypes = {
  children: PropTypes.node.isRequired,
};

const defaultProps = {
};

const Form__error = (props) => {
  const { children } = props;

  return (
    <div
      className={b('form__error', props)}
    >
      {children}
    </div>
  );
};

Form__error.propTypes = propTypes;
Form__error.defaultProps = defaultProps;

export default Form__error;
