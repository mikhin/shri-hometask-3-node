import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

import PageTrim from '../page-trim';

import footerMenuItems from '../../constants/footer-menu';

const Footer = () => {
  const { t, i18n } = useTranslation();

  const changeLang = (lang) => {
    i18n.changeLanguage(lang);
  };

  const currentLang = i18next.languages[0];

  return (
    <div
      className={b('footer')}
    >
      <PageTrim>
        <div
          className={b('footer__content')}
        >
          <ul className={b('footer__menu')}>
            {footerMenuItems.map((item) => (
              <li className={b('footer__menu-item')} key={`footer-${item}`}>
                <span className={b('footer__menu-item-content')}>
                  {item}
                </span>
              </li>
            ))}
              {currentLang === 'ru'
                ? <li className={b('footer__menu-item')}>
                    <button className={b('footer__menu-item-content')} type="button" onClick={() => changeLang('en')}>
                      {t('lang')}
                    </button>
              </li>
                : <li className={b('footer__menu-item')}>
                    <button className={b('footer__menu-item-content')} type="button" onClick={() => changeLang('ru')}>
                      {t('lang')}
                    </button>
                </li>
              }
          </ul>
          <p className={b('footer__logo')}>&copy; 2020 Yuri Mikhin</p>
        </div>
      </PageTrim>
    </div>
  );
};

export default Footer;
