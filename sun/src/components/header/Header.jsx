import { Link } from "react-router-dom";
import React, { useState } from "react";
import BurgerMenu from "./BurgerMenu/BurgerMenu";
import RightZone from "./RightZone/RightZone";
import Navigation from "./Navigation/Navigation";

import "./Header.scss";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sm-header">
      <div className="sm-header__bar">
        <BurgerMenu setOpen={setOpen} open={open} />
        <Link to="/" className="sm-brand">
          <div className="sm-brand__text">
            <div className="sm-brand__name">
              SOLAR
              <br />
              MARKET
            </div>
            <div className="sm-brand__tag">СОНЯЧНІ ЕЛЕКТРОСТАНЦІЇ</div>
          </div>
        </Link>
        <RightZone />
      </div>
      <Navigation open={open} setOpen={setOpen} />
    </header>
  );
}
