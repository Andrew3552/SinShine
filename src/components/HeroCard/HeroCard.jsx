

/**
 * Универсальная карточка.
 * props:
 *  - icon?: JSX (SVG/иконка). Если не передавать — карточка одноколоночная.
 *  - title?: string
 *  - items?: string[]  (если нужен список)
 *  - children?: React.ReactNode (произвольный контент вместо items)
 *  - className?: string
 */
export default function HeroCard({ icon, title, items, children, className = "" }) {
  const hasIcon = Boolean(icon);

  return (
    <div
      className={[
        "hero-card",                     // общие классы (для повторного использования)
        "home-hero__card",               // совместимость с существующими стилями Home
        !hasIcon && "hero-card--plain",  // режим без иконки
        className,
      ].filter(Boolean).join(" ")}
    >
      {hasIcon && (
        <span className="hero-card__icon home-hero__icon" aria-hidden="true">
          {icon}
        </span>
      )}

      <div className="hero-card__content">
        {title && <h3 className="hero-card__title">{title}</h3>}

        {Array.isArray(items) ? (
          <ul className="hero-card__list">
            {items.map((t, i) => <li key={i}>{t}</li>)}
          </ul>
        ) : (
          children
        )}
      </div>
    </div>
  );
}
