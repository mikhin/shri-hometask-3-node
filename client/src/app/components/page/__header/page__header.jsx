const propTypes = {
  children: PropTypes.node.isRequired,
};

const defaultProps = {
};

const Page__Header = (props) => {
  const { children } = props;

  return (
    <div
      className={b('page__header')}
    >
      {children}
    </div>
  );
};

Page__Header.propTypes = propTypes;
Page__Header.defaultProps = defaultProps;

export default Page__Header;
