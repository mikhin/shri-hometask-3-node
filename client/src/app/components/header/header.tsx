import PageTrim from '../page-trim';
import Button from '../button';
import Logo from '../logo';
import * as React from "react";

interface propTypes {
  actions: Array<object>,
  logoText: string,
  logoURL: string,
}

interface Action {
  text: string,
  mods: object,
  url: string,
  onClick: CallbackFunction,
  hiddenText: string,
  icon: React.ElementType,
}

const Header: React.FC<propTypes> = (props) => {
  const {actions, logoText, logoURL} = props;

  return (
      <div
          className={b('header')}
      >
        <PageTrim>
          <div className={b('header__content')}>
          <div className={b('header__logo')}>
             <Logo
               mods={{
                 type: logoURL ? 'link' : undefined,
               }}
               text={logoText}
               to={logoURL}
             />
          </div>
          {actions && (
            <ul className={b('header__actions')}>
              {actions.map((action: Action) => (
                <li className={b('header__action-item')} key={`header=${action.text}`}>
                  <Button
                    mods={{
                      theme: 'navigation',
                      ...action.mods,
                    }}
                    to={action.url}
                    onClick={action.onClick}
                    hiddenText={action.hiddenText}
                    icon={action.icon}
                  >
                    {action.text}
                  </Button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </PageTrim>
    </div>
  );
};

export default Header;
