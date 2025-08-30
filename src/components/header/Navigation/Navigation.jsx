import { Link } from "react-router-dom";
import "./Navigation.scss";

function Navigation({ open, setOpen }) {
  return (
    <>
      <div
        className={`sm-overlay ${open ? "is-open" : ""}`}
        onClick={() => setOpen(false)}
        aria-hidden={!open}
      />
      <nav
        id="primary-nav"
        className={`sm-nav ${open ? "is-open" : ""}`}
        aria-hidden={!open}
      >
        <div className="sm-nav__contact">
          <a
            className="sm-contact__row sm-contact__mail"
            href="mailto:info@solarmarket.ua"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v.4l-10 6-10-6V6Zm0 2.7V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.7l-9.4 5.6a2 2 0 0 1-2.2 0L2 8.7Z"
                fill="rgb(85, 85, 85)"
              />
            </svg>
            <span className="sm-contact__text">info@solarmarket.ua</span>
          </a>
        </div>

        <div className="sm-nav__inner">
          <Link to="/" end onClick={() => setOpen(false)}>
            Домашня
          </Link>
          <Link to="/sunEnergy" onClick={() => setOpen(false)}>
            Cонячна енергетика
          </Link>
          <Link to="/about" onClick={() => setOpen(false)}>
            Загальне будівництво
          </Link>
          {/* <Link to="/contact" onClick={() => setOpen(false)}>Контакти</Link> */}
        </div>

        <div className="sm-socials">
          <a
            href="https://t.me/solarmarket"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Telegram"
            className="sm-social tg"
          >
            {/* TG */}
            <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
              <path
                d="M9.04 15.44 8.9 19a1 1 0 0 0 1.7.7l2.04-1.98 3.78 2.78a1 1 0 0 0 1.57-.62l3-14a1 1 0 0 0-1.33-1.15L3.37 9.2a1 1 0 0 0 .06 1.9l4.96 1.65 9.15-5.77-8.5 8.45Z"
                fill="currentColor"
              />
            </svg>
          </a>
          <a
            href="https://wa.me/380676523417"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="sm-social wa"
          >
            {/* WA */}
            <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
              <path
                d="M20 3.9A10 10 0 0 0 4.2 18.2L3 22l3.9-1a10 10 0 0 0 13.1-17Z m-7.1 15.6a8 8 0 0 1-4.1-1.1l-.3-.2-2.4.6.6-2.3-.2-.3A8 8 0 1 1 12.9 19.5Zm4.4-4c-.2-.1-1.4-.7-1.6-.7s-.4-.1-.6.1-.7.7-.8.9-.3.2-.6.1a6.6 6.6 0 0 1-2-1.2 7.4 7.4 0 0 1-1.4-1.7c-.2-.3 0-.4.1-.6l.2-.3.1-.2c.1-.2 0-.3 0-.5l-.7-1.6c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.8.4s-1 1-1 2.4 1.1 2.8 1.3 3 .2.4.5.7a9 9 0 0 0 3 2c.4.2.8.3 1 .4s.6 0 1 .1 1 0 1.5-.3 1-.8 1.1-1.6c.1-.8 0-1.5 0-1.6s-.2-.2-.4-.3Z"
                fill="currentColor"
              />
            </svg>
          </a>
          <a
            href="viber://chat?number=%2B380676523417"
            aria-label="Viber"
            className="sm-social viber"
          >
            {/* Viber */}
            <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
              <path
                d="M18.5 2h-13A3.5 3.5 0 0 0 2 5.5v13A3.5 3.5 0 0 0 5.5 22h6.9l.2-.1 3.2-2.2H18.5A3.5 3.5 0 0 0 22 16.2V5.5A3.5 3.5 0 0 0 18.5 2Zm-1.2 14.6c-.2.3-.6.5-1 .5h-.1c-2 0-4.3-1-6-2.7-1.6-1.6-2.6-3.6-2.6-5.5 0-.4.2-.8.5-1 .3-.3.8-.4 1.2-.2l1.6.7c.3.1.5.4.6.7.1.5.3 1 .5 1.5.1.3 0 .6-.2.8l-.8.8a7.7 7.7 0 0 0 3 3l.8-.8c.2-.2.5-.3.8-.2.5.2 1 .4 1.5.5.3.1.6.3.7.6l.7 1.6c.2.4.1.8-.2 1.1Z"
                fill="currentColor"
              />
            </svg>
          </a>
        </div>
      </nav>
    </>
  );
}

export default Navigation;
