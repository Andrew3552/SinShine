import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";

export default function Footer() {
  const year = new Date().getFullYear();


  return (
    <footer className="sm-footer">
      <div className="sm-footer__container">
        {/* BRAND + SOCIAL */}
        <div className="sm-footer__brand">
          <Link to="/" className="sm-footer__logo">
            <span className="mark">*</span> SOLAR<br/>MARKET
          </Link>

          {/* <div className="sm-footer__socials">
            <a href="https://t.me/solarmarket" target="_blank" rel="noreferrer" aria-label="Telegram" className="sm-social">
              <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                <path d="M9.1 14.9 9 18.8a1 1 0 0 0 1.7.7l2.1-2 3.8 2.8a1 1 0 0 0 1.6-.6l3-14a1 1 0 0 0-1.3-1.2L3.4 9.2a1 1 0 0 0 .1 1.9l5 1.6 9.1-5.8-8.5 8.4Z" fill="currentColor"/>
              </svg>
            </a>
            <a href="viber://chat?number=%2B380676523417" aria-label="Viber" className="sm-social">
              <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                <path d="M18.5 2h-13A3.5 3.5 0 0 0 2 5.5v13A3.5 3.5 0 0 0 5.5 22h6.9l3.4-2.3h2.7A3.5 3.5 0 0 0 22 16.2V5.5A3.5 3.5 0 0 0 18.5 2Zm-1.2 14.6c-.2.3-.6.5-1 .5h-.1c-2 0-4.3-1-6-2.7-1.6-1.6-2.6-3.6-2.6-5.5 0-.4.2-.8.5-1s.8-.4 1.2-.2l1.6.7c.3.1.5.4.6.7.1.5.3 1 .5 1.5.1.3 0 .6-.2.8l-.8.8a7.7 7.7 0 0 0 3 3l.8-.8c.2-.2.5-.3.8-.2.5.2 1 .4 1.5.5.3.1.6.3.7.6l.7 1.6c.2.4.1.8-.2 1.1Z" fill="currentColor"/>
              </svg>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className="sm-social">
              <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                <path d="M13 10h3l.5-3H13V5.2c0-.9.3-1.5 1.6-1.5H16V1.1C15.6 1 14.7 1 13.7 1 11.6 1 10 2.4 10 5v2H7v3h3v9h3v-9Z" fill="currentColor"/>
              </svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="sm-social">
              <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm5 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm6.5-.8a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4Z" fill="currentColor"/>
              </svg>
            </a>
          </div> */}

          {/* опциональный бейджик разработчика */}
          {/* <div className="sm-footer__by">by adcore</div> */}
        </div>

        {/* COLUMNS */}
        <nav className="sm-footer__col">
          <h4 className="sm-footer__title">НАПРЯМИ</h4>
          <ul className="sm-footer__links">
            <li><Link to="/sunEnergy">Сонячна енргетика</Link></li>
            <li><Link to="/about">Загальне будівництво</Link></li>
          </ul>
        </nav>

        <nav className="sm-footer__col">
          <h4 className="sm-footer__title">КОМПАНІЯ</h4>
          <ul className="sm-footer__links">
            <li><Link to="/">Про компанію</Link></li>
            <li><Link to="/projects">Наші проєкти</Link></li>
            <li><Link to="/contact">Контакти</Link></li>
            <li><Link to="/privacy">Політика конфіденційності</Link></li>
          </ul>
        </nav>

        <div className="sm-footer__col sm-footer__subcol">
          {/* <h4 className="sm-footer__title">ПІДПИСКА</h4>
          <form className="sm-sub" onSubmit={onSubscribe}>
            <label htmlFor="sub-email" className="sr-only">Email</label>
            <input id="sub-email" type="email" placeholder="Email" required />
            <button aria-label="Підписатися">›</button>
          </form> */}

          <div className="sm-foot-contact">
            <a className="sm-foot-link" href="tel:+380676523417">+38 (067) 652 34 17</a>
            <a className="sm-foot-link" href="mailto:info@solarmarket.com.ua">info@solarmarket.com.ua</a>
            <div className="sm-foot-hours">
              <div>Пн - Пт: 9:00 - 18:00</div>
              <div>Сб - Нд: вихідний</div>
            </div>
          </div>
        </div>
      </div>

      <div className="sm-footer__bar">
        Всі права захищені {year} © Solar Market
      </div>
    </footer>
  );
}
