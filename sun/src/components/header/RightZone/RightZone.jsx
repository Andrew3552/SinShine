import React from 'react'
import "./RightZone.scss"

function RightZone() {
  return (
    <div className="sm-right">
          <div className="sm-meta">
            <div className="sm-hours">Пн - Пт: 9:00 - 18:00</div>
            <a className="sm-phone" href="tel:+380676523417">
              +38 (067) 652 34 17
            </a>
          </div>

          <button className="sm-cta">Зворотній дзвінок</button>

          <div className="sm-lang">
            <button className="is-active">UA</button>
            <span className="sep">|</span>
            <button>RU</button>
          </div>
        </div>

  )
}

export default RightZone