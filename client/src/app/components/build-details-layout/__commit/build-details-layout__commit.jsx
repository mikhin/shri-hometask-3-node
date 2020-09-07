const propTypes = {
  children: PropTypes.node.isRequired,
};

const defaultProps = {
};

const BuildDetailsLayout__Commit = (props) => {
  const { children } = props;

  return (
    <div
      className={b('build-details-layout__commit')}
    >
      {children}
    </div>
  );
};

BuildDetailsLayout__Commit.propTypes = propTypes;
BuildDetailsLayout__Commit.defaultProps = defaultProps;

export default BuildDetailsLayout__Commit;
