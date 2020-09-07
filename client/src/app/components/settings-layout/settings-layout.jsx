const propTypes = {
  children: PropTypes.node.isRequired,
};

const defaultProps = {
};

const SettingsLayout = (props) => {
  const { children } = props;

  return (
    <div
      className={b('settings-layout')}
    >
      {children}
    </div>
  );
};

SettingsLayout.propTypes = propTypes;
SettingsLayout.defaultProps = defaultProps;

export default SettingsLayout;
