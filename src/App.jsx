import { Outlet, Link } from "react-router-dom";

import Header from "./components/header/Header";
import Footer from "./components/Footer/Footer";
import "./App.scss";

export default function App() {
  return (
    <>
      {/* Хедер */}
      <Header/>

      {/* Основной контент */}
      <main>
        <Outlet />
      </main>

      {/* Футер */}
      <Footer/>
    </>
  );
}
