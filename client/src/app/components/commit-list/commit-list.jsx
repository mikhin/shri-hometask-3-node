const propTypes = {
  children: PropTypes.node.isRequired,
};

const defaultProps = {};

const CommitList = (props) => {
  const {
    children,
  } = props;

  return (
    <div
      className={b('commit-list', props)}
    >
      <ul className={b('commit-list__content')}>
        {children}
      </ul>
    </div>
  );
};

CommitList.propTypes = propTypes;
CommitList.defaultProps = defaultProps;

export default CommitList;
