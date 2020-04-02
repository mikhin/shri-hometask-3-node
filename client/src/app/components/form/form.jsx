const propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
  onSubmit: PropTypes.func,
};

const defaultProps = {
};

const Form = (props) => {
  const {
    children, title, description, onSubmit,
  } = props;

  return (
    <form
      className={b('form')}
      onSubmit={onSubmit}
    >
      {title && (
        <h2 className={b('form__title')}>{title}</h2>
      )}

      {description && (
        <p className={b('form__description')}>{description}</p>
      )}

      {children}
    </form>
  );
};

Form.propTypes = propTypes;
Form.defaultProps = defaultProps;

export default Form;
