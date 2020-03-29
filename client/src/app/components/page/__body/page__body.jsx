const propTypes = {
  children: PropTypes.node.isRequired,
};

const defaultProps = {
};

const Page__Body = (props) => {
  const { children } = props;

  return (
    <div
      className={b('page__body')}
    >
      {children}
    </div>
  );
};

Page__Body.propTypes = propTypes;
Page__Body.defaultProps = defaultProps;

export default Page__Body;
