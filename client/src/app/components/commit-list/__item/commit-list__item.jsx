const propTypes = {
  children: PropTypes.node.isRequired,
};

const CommitList__Item = (props) => {
  const { children } = props;

  return (
    <li className={b('commit-list__item', props)}>
      {children}
    </li>
  );
};

CommitList__Item.propTypes = propTypes;

export default CommitList__Item;
