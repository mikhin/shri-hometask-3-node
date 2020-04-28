import * as React from "react";

interface propTypes {
  children: React.ReactNode,
}

const SettingsLayout__Form: React.FC<propTypes> = (props) => {
  const { children } = props;

  return (
    <div
      className={b('settings-layout__form')}
    >
      {children}
    </div>
  );
};

export default SettingsLayout__Form;
