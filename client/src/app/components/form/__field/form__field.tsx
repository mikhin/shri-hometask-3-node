import * as React from "react";

interface propTypes {
  mods?: object
  children: React.ReactNode,
}

const Form__Field: React.FC<propTypes> = (props) => {
  const { children } = props;

  return (
    <div
      className={b('form__field', props)}
    >
      {children}
    </div>
  );
};

export default Form__Field;
