import * as React from "react";

interface propTypes {
  children: React.ReactNode,
}

const BuildHistoryLayout__CommitList:React.FC<propTypes> = (props) => {
  const { children } = props;

  return (
    <div
      className={b('commit-history-layout__commit-list')}
    >
      {children}
    </div>
  );
};

export default BuildHistoryLayout__CommitList;
