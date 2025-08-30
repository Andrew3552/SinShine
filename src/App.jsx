import { Outlet, Link } from "react-router-dom";

import Header from "./components/header/Header";
import Footer from "./components/Footer/Footer";
import "./App.scss";

export default function App() {
  return (
    <div className="app-shell">
      {/* Хедер */}
      <Header/>

      {/* Основной контент */}
      <main className="app-main">
     <div className="page"> <Outlet /></div>
      </main>

      {/* Футер */}
      <Footer/>
    </div>
  );
}
