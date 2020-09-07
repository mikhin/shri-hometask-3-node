const propTypes = {
  children: PropTypes.node.isRequired,
};

const defaultProps = {
};

const BuildDetailsLayout = (props) => {
  const { children } = props;

  return (
    <div
      className={b('build-details-layout')}
    >
      {children}
    </div>
  );
};

BuildDetailsLayout.propTypes = propTypes;
BuildDetailsLayout.defaultProps = defaultProps;

export default BuildDetailsLayout;
