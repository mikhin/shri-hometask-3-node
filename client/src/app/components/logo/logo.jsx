import { Link } from 'react-router-dom';

const propTypes = {
  text: PropTypes.string,
  to: PropTypes.string,
};

const defaultProps = {
  text: 'School CI server',
};

const Logo = (props) => {
  const { text, to } = props;

  const Tag = to ? Link : 'span';

  return (
    <Tag
      className={b('logo', props)}
      to={to}
    >
      {text}
    </Tag>
  );
};

Logo.propTypes = propTypes;
Logo.defaultProps = defaultProps;

export default Logo;
