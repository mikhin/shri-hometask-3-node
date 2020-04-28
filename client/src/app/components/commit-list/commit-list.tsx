import * as React from "react";

interface propTypes {
  children: React.ReactNode,
}

const CommitList:React.FC<propTypes> = (props) => {
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

export default CommitList;
