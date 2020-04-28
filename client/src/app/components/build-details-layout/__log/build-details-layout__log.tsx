import * as React from 'react';

interface propTypes {
  children: React.ReactNode,
}

const BuildDetailsLayout__Log:React.FC<propTypes> = (props) => {
  const { children } = props;

  return (
    <div
      className={b('commit-details-layout__log')}
    >
      {children}
    </div>
  );
};

export default BuildDetailsLayout__Log;
