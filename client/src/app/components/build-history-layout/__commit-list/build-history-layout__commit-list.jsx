const propTypes = {
  children: PropTypes.node.isRequired,
};

const defaultProps = {
};

const BuildHistoryLayout__CommitList = (props) => {
  const { children } = props;

  return (
    <div
      className={b('build-history-layout__commit-list')}
    >
      {children}
    </div>
  );
};

BuildHistoryLayout__CommitList.propTypes = propTypes;
BuildHistoryLayout__CommitList.defaultProps = defaultProps;

export default BuildHistoryLayout__CommitList;
