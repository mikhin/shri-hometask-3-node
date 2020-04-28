import * as React from "react";

interface propTypes {
  children: React.ReactNode,
}

const SettingsLayout: React.FC<propTypes> = (props) => {
  const { children } = props;

  return (
    <div
      className={b('settings-layout')}
    >
      {children}
    </div>
  );
};

export default SettingsLayout;
