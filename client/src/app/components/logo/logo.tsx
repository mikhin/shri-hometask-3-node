import { Link } from 'react-router-dom';
import * as React from "react";

interface propTypes {
  text: string,
  to: string,
  mods: object
}

const Logo:React.FC<propTypes> = ({text= 'School CI server', ...props}) => {
  const { to } = props;

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

export default Logo;
