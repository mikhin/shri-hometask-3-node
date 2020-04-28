import * as React from "react";

interface propTypes {
  children: React.ReactNode,
}

const Page__Body: React.FC<propTypes> = (props) => {
  const { children } = props;

  return (
    <div
      className={b('page__body')}
    >
      {children}
    </div>
  );
};

export default Page__Body;
