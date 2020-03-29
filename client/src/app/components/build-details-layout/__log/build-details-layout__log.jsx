const propTypes = {
  children: PropTypes.node.isRequired,
};

const defaultProps = {
};

const BuildDetailsLayout__Log = (props) => {
  const { children } = props;

  return (
    <div
      className={b('build-details-layout__log')}
    >
      {children}
    </div>
  );
};

BuildDetailsLayout__Log.propTypes = propTypes;
BuildDetailsLayout__Log.defaultProps = defaultProps;

export default BuildDetailsLayout__Log;
