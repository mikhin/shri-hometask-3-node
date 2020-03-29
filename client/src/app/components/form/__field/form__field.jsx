const propTypes = {
  children: PropTypes.node.isRequired,
};

const defaultProps = {
};

const Form__Field = (props) => {
  const { children } = props;

  return (
    <div
      className={b('form__field', props)}
    >
      {children}
    </div>
  );
};

Form__Field.propTypes = propTypes;
Form__Field.defaultProps = defaultProps;

export default Form__Field;
