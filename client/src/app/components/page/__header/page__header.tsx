import * as React from "react";

interface propTypes {
  children: React.ReactNode,
}

const Page__Header: React.FC<propTypes> = (props) => {
  const { children } = props;

  return (
    <div
      className={b('page__header')}
    >
      {children}
    </div>
  );
};

export default Page__Header;
