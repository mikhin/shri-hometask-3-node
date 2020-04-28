import * as React from "react";
import PageTrim from '../page-trim';

import footerMenuItems from '../../constants/footer-menu';

const Footer:React.FC = () => (
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
          </ul>
          <p className={b('footer__logo')}>&copy; 2020 Yuri Mikhin</p>
        </div>
      </PageTrim>
    </div>
);

export default Footer;
