import React, { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <header className="header">
        <div
          className={`menu-btn ${show ? "close" : ""}`}
          onClick={() => setShow(!show)}
        >
          <div className={`menu-btn__line ${show ? "close" : ""}`}></div>
          <div className={`menu-btn__line ${show ? "close" : ""}`}></div>
          <div className={`menu-btn__line ${show ? "close" : ""}`}></div>
        </div>
        <nav className={`menu ${show ? "show" : ""}`}>
          <div className={`menu__portrait ${show ? "show" : ""}`}>
            <div className="photo"></div>
          </div>
          <ul className={`menu__items ${show ? "show" : ""}`}>
            <li
              className={`menu__item ${show ? "show" : ""}`}
              onClick={() => setShow(false)}
            >
              <Link to="/" className="menu__link">
                Home
              </Link>
            </li>
            <li
              className={`menu__item ${show ? "show" : ""}`}
              onClick={() => setShow(false)}
            >
              <Link to="/" className="menu__link">
                Work
              </Link>
            </li>
            <li
              className={`menu__item ${show ? "show" : ""}`}
              onClick={() => setShow(false)}
            >
              <Link to="/" className="menu__link">
                About
              </Link>
            </li>
            <li
              className={`menu__item ${show ? "show" : ""}`}
              onClick={() => setShow(false)}
            >
              <Link to="/contact" className="menu__link">
                Contact Me
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Nav;
