import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Header = () => {
  return (
    <div className="home-wrapper">
      <main className="home">
        <h1 className="home__lg-heading">
          Boutros <span className="secondary-text">Bekhit</span>
        </h1>
        <h2 className="home__sm-heading">
          Web Developer, Programmer, & Learning
        </h2>
        <div className="home__icons">
          <a
            href="https://www.linkedin.com/in/boutros-bekhit-954177102/"
            className="home__icon-item"
          >
            <FaLinkedin />
          </a>
          <a href="https://www.github.com/bbekhit" className="home__icon-item">
            <FaGithub />
          </a>
        </div>
      </main>
    </div>
  );
};

export default Header;
