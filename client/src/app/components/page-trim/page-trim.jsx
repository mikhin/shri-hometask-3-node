const propTypes = {
  children: PropTypes.node.isRequired,
};

const defaultProps = {
};

const PageTrim = (props) => {
  const { children } = props;

  return (
    <div
      className={b('page-trim')}
    >
      {children}
    </div>
  );
};

PageTrim.propTypes = propTypes;
PageTrim.defaultProps = defaultProps;

export default PageTrim;
