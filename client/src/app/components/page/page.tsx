import * as React from "react";

interface propTypes {
  children: React.ReactNode,
  mods: object,
}

const Page: React.FC<propTypes> = (props) => {
  const { children } = props;

  return (
    <div
      className={b('page', props)}
    >
      {children}
    </div>
  );
};

export default Page;
