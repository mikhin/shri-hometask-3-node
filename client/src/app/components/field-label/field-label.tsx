import * as React from "react";

interface propTypes {
  children: React.ReactNode,
  id: string,
  mods: object,
}

const FieldLabel:React.FC<propTypes> = (props) => {
  const { children, id } = props;

  return (
    <label
      className={b('field-label', props)}
      htmlFor={id}
    >
      {children}
    </label>
  );
};

export default FieldLabel;
