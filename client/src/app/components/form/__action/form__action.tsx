import * as React from 'react';

interface propTypes {
  children: React.ReactNode,
}

const Form__Action: React.FC<propTypes> = (props) => {
  const { children } = props;

  return (
    <div
      className={b('form__action')}
    >
      {children}
    </div>
  );
};

export default Form__Action;
