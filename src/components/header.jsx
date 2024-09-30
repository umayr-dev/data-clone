import React from "react";
import { Headerdata } from "../data";
function Header() {
  return (
    <>
      <div className="container">
        <div className="header">
          <img src="/images/logo.webp" alt="" />
          <div className="header-navbar">
            {Headerdata.map((item) => {
              return (
                <a
                  key={item.id}
                  className="header-navbar__button"
                  href={item.slug}
                >
                  {item.title}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
