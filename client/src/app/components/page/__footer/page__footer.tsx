import * as React from "react";

interface propTypes {
  children: React.ReactNode,
}

const Page__Footer: React.FC<propTypes> = (props) => {
  const { children } = props;

  return (
    <div
      className={b('page__footer')}
    >
      {children}
    </div>
  );
};

export default Page__Footer;
