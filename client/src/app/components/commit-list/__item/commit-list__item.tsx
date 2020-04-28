import * as React from "react";

interface propTypes {
  children: React.ReactNode,
}

const CommitList__Item:React.FC<propTypes> = (props) => {
  const { children } = props;

  return (
    <li className={b('commit-list__item', props)}>
      {children}
    </li>
  );
};

export default CommitList__Item;
