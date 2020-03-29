const propTypes = {
  children: PropTypes.node.isRequired,
};

const defaultProps = {
};

const Page__Footer = (props) => {
  const { children } = props;

  return (
    <div
      className={b('page__footer')}
    >
      {children}
    </div>
  );
};

Page__Footer.propTypes = propTypes;
Page__Footer.defaultProps = defaultProps;

export default Page__Footer;
