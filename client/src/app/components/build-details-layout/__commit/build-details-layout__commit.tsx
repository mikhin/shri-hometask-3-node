import * as React from 'react';

interface propTypes {
  children: React.ReactNode,
}

const BuildDetailsLayout__Commit:React.FC<propTypes> = (props) => {
  const { children } = props;

  return (
    <div
      className={b('commit-details-layout__commit')}
    >
      {children}
    </div>
  );
};

export default BuildDetailsLayout__Commit;
