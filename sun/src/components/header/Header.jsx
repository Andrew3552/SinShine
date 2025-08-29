import { Link } from "react-router-dom";
import React, { useState } from "react";
import BurgerMenu from "./BurgerMenu/BurgerMenu";
import RightZone from "./RightZone/RightZone";
import Navigation from "./Navigation/Navigation";
import CallbackModal from "../Modal/Modal";

import "./Header.scss";

export default function Header() {
  const [open, setOpen] = useState(false);
   const [cbOpen, setCbOpen] = useState(false); // модалка

  return (
    <header className="sm-header">
      <div className="sm-header__bar">
        <BurgerMenu setOpen={setOpen} open={open} />
        <Link to="/" className="sm-brand">
          <div className="sm-brand__text">
            <p className="sm-brand__tag">Будуємо майбутнє</p>
          </div>
        </Link>
        <RightZone open={open} setOpen={setOpen} onOpenCallback={() => setCbOpen(true)}/>
      </div>
       <CallbackModal open={cbOpen} onClose={() => setCbOpen(false)} />
    </header>
  );
}
