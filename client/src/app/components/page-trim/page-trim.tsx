import * as React from "react";

interface propTypes {
  children: React.ReactNode,
}

const PageTrim: React.FC<propTypes> = (props) => {
  const { children } = props;

  return (
    <div
      className={b('page-trim')}
    >
      {children}
    </div>
  );
};

export default PageTrim;
