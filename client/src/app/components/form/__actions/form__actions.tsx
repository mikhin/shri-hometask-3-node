import * as React from 'react';

interface propTypes {
  children: React.ReactNode,
}

const Form__Actions: React.FC<propTypes> = (props) => {
  const { children } = props;

  return (
    <div
      className={b('form__actions')}
    >
      {children}
    </div>
  );
};

export default Form__Actions;
