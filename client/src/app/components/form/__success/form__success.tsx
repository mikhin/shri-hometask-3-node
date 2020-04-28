import * as React from "react";

interface propTypes {
  children: React.ReactNode,
}

const Form__Success: React.FC<propTypes> = (props) => {
  const { children } = props;

  return (
    <div
      className={b('form__success', props)}
    >
      {children}
    </div>
  );
};

export default Form__Success;
