import * as React from 'react';

interface propTypes {
  children: React.ReactNode,
}

const BuildHistoryLayout:React.FC<propTypes> = (props) => {
  const { children } = props;

  return (
    <div
      className={b('commit-history-layout')}
    >
      {children}
    </div>
  );
};

export default BuildHistoryLayout;
