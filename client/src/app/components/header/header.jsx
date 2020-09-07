import PageTrim from '../page-trim';
import Button from '../button';
import Logo from '../logo';

const propTypes = {
  actions: PropTypes.array,
  logoText: PropTypes.string,
  logoURL: PropTypes.string,
};

const defaultProps = {
};

const Header = (props) => {
  const { actions, logoText, logoURL } = props;

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
              {actions.map((action) => (
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

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
