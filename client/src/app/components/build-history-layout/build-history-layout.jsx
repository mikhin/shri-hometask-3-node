const propTypes = {
  children: PropTypes.node.isRequired,
};

const defaultProps = {
};

const BuildHistoryLayout = (props) => {
  const { children } = props;

  return (
    <div
      className={b('build-history-layout')}
    >
      {children}
    </div>
  );
};

BuildHistoryLayout.propTypes = propTypes;
BuildHistoryLayout.defaultProps = defaultProps;

export default BuildHistoryLayout;
