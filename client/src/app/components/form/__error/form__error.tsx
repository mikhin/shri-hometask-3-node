import * as React from "react";

interface propTypes {
  children: React.ReactNode,
}

const Form__Error: React.FC<propTypes> = (props) => {
  const { children } = props;

  return (
    <div
      className={b('form__error', props)}
    >
      {children}
    </div>
  );
};

export default Form__Error;
