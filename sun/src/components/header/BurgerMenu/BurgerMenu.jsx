
import "./BurgerMenu.scss"

function BurgerMenu( {open, setOpen} ) {
    
  return (
    <button
  className={`sm-burger ${open ? "is-open" : ""}`}
  onClick={() => setOpen(v => !v)}
  aria-label={open ? "Закрити меню" : "Меню"}
  aria-expanded={open}
  aria-controls="primary-nav"
>
  <span className="sm-burger__line" />
  <span className="sm-burger__line" />
  <span className="sm-burger__line" />
</button>
  )
}

export default BurgerMenu