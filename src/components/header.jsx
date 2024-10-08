import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="container">
        <div className="header">
          <Link to='/'> <img src="/images/logo.webp" alt="" /> </Link>
          <div className="header-navbar">
                <Link to='/' className="header-navbar__button">Asosiy</Link>
                <Link to='/bizhaqimizda' className="header-navbar__button">Biz haqimizda</Link>
                <Link to='/kurslar' className="header-navbar__button">Kurslar</Link>
                <Link to='/tashriflar' className="header-navbar__button">Tashriflar</Link>
                <Link to='/yutuqlar' className="header-navbar__button">Yutuqlar</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
