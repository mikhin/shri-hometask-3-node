import * as React from "react";

interface propTypes {
  children: React.ReactNode,
  title?: string,
  description?: string,
  onSubmit?: onSubmitFunction,
}

const Form:React.FC<propTypes> = (props) => {
  const {
    children, title, description, onSubmit,
  } = props;

  return (
    <form
      className={b('form')}
      onSubmit={onSubmit}
    >
      {title && (
        <h2 className={b('form__title')}>{title}</h2>
      )}

      {description && (
        <p className={b('form__description')}>{description}</p>
      )}

      {children}
    </form>
  );
};

export default Form;
