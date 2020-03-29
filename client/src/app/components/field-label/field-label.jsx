const propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string,
};

const defaultProps = {};

const FieldLabel = (props) => {
  const { children, id } = props;

  return (
    <label
      className={b('field-label', props)}
      htmlFor={id}
    >
      {children}
    </label>
  );
};

FieldLabel.propTypes = propTypes;
FieldLabel.defaultProps = defaultProps;

export default FieldLabel;
