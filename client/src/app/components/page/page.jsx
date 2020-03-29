const propTypes = {
  children: PropTypes.node.isRequired,
};

const Page = (props) => {
  const { children } = props;

  return (
    <div
      className={b('page', props)}
    >
      {children}
    </div>
  );
};

Page.propTypes = propTypes;

export default Page;
