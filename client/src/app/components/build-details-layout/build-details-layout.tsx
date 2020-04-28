import * as React from 'react';

interface propTypes {
  children: React.ReactNode,
}

const BuildDetailsLayout: React.FC<propTypes> = (props) => {
  const { children } = props;

  return (
    <div
      className={b('commit-details-layout')}
    >
      {children}
    </div>
  );
};

export default BuildDetailsLayout;
