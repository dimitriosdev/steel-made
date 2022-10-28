import React, { useState } from "react";
import { Link } from "gatsby";
import telephone from "../img/telephone-svgrepo-com.svg";
import logo from "../img/logo-icon-text-1100x256.webp";
import facebook from "../img/social/facebook.svg";
import instagram from "../img/social/instagram.svg";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <nav
      className="navbar is-fixed-top"
      role="navigation"
      aria-label="main-navigation"
    >
      <div className="container" >
        <div className="navbar-brand">
          <Link to="/" className="navbar-item has-text-white-ter" title="Logo">
            <img src={logo} alt="SteelMade" style={{ maxHeight: "3rem" }} />
          </Link>
          {/* Hamburger menu */}
          <button
            className={`navbar-burger burger ${isActive && "is-active"}`}
            aria-expanded={isActive}
            onClick={() => setIsActive(!isActive)}
          >
            <span />
            <span />
            <span />
          </button>

        </div>
        <ul id="navMenu" className={`navbar-start has-text-centered navbar-menu ${isActive && "is-active"}`}>
          {/* TODO: inline override of padding is a result of refactoring
                to a ul for accessibilty purposes, would like to see a css
                re-write that makes this unneccesary.
             */}
          <li className="navbar-item" style={{ padding: "0px" }}>
            <Link className="navbar-item" to="/">
              Αρχική
            </Link>
          </li>
          <li className="navbar-item" style={{ padding: "0px" }}>
            <Link className="navbar-item" to="/">
              Εταιρεία
            </Link>
          </li>
          <li className="navbar-item" style={{ padding: "0px" }}>
            <Link className="navbar-item" to="/">
              Υπηρεσίες
            </Link>
          </li>
          <li className="navbar-item" style={{ padding: "0px" }}>
            <Link className="navbar-item" to="/">
              Κατασκευές
            </Link>
          </li>
          <li className="navbar-item" style={{ padding: "0px" }}>
            <Link className="navbar-item" to="/">
              Επικοινωνία
            </Link>
          </li>
          <li className="navbar-end has-text-centered">
            <a
              className="navbar-item"
              href="tel:+306948308716"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <div style={{ display: "inline", verticalAlign: "top" }}>Καλέστε μας</div>
                <img style={{ width: "18px", marginLeft: "10px", marginTop: "5px" }} src={telephone} alt="phone" />
              </div>
            </a>
            <a className="navbar-item" title="facebook" href="https://facebook.com">
              <img
                src={facebook}
                alt="Facebook"
                style={{ width: "1em", height: "1em" }}
              />
            </a>
            <a className="navbar-item" title="instagram" href="https://instagram.com">
              <img
                src={instagram}
                alt="Instagram"
                style={{ width: "1em", height: "1em" }}
              />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
