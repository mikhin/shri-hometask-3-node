const propTypes = {
  children: PropTypes.node.isRequired,
};

const defaultProps = {
};

const SettingsLayout__Form = (props) => {
  const { children } = props;

  return (
    <div
      className={b('settings-layout__form')}
    >
      {children}
    </div>
  );
};

SettingsLayout__Form.propTypes = propTypes;
SettingsLayout__Form.defaultProps = defaultProps;

export default SettingsLayout__Form;
