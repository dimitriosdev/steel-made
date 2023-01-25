import * as React from "react";
// import { Link } from "gatsby";

import logo from "../img/logo-icon-text-256x256.webp";
import facebook from "../img/social/facebook.svg";
import instagram from "../img/social/instagram.svg";

const Footer = () => {

  return (
    <footer className="footer has-background-black has-text-white-ter">

      <div className="content has-text-centered has-background-black has-text-white-ter">
        <div className="container has-background-black has-text-white-ter">
          <div style={{ maxWidth: "100vw" }} className="columns">
            <div className="column">
              <img
                src={logo}
                alt="Kaldi"
                style={{ height: "100px" }}
              />
              <div className="content">
                <div style={{ padding: "0.5em 0.75em"}}>Γιαπουτζής Ευθύμης</div>
                <div style={{ padding: "0.5em 0.75em"}}><a href="mailto:info@steelmade.gr">info@steelmade.gr</a></div>
                <div style={{ padding: "0.5em 0.75em"}}><a href="tel:+306948308716">6948308716</a></div>
              </div>
            </div>
            <div className="column is-4">
              {/* <section className="menu">
                <ul className="menu-list" style={{ paddingLeft: "20%" }}>
                  <li>
                    <Link to="/" className="navbar-item">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link className="navbar-item" to="/about">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link className="navbar-item" to="/products">
                      Products
                    </Link>
                  </li>
                  <li>
                    <Link className="navbar-item" to="/contact/examples">
                      Form Examples
                    </Link>
                  </li>
                  <li>
                    <a
                      className="navbar-item"
                      href="/admin/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Admin
                    </a>
                  </li>
                </ul>
              </section> */}
            </div>
            <div className="column is-4 social">
              <div style={{ padding: "1.2em" }}>
                Social channels
              </div>
              <div style={{ padding: "0.5em 0.75em" }}>
                <a title="facebook" href="https://facebook.com">
                  <img
                    src={facebook}
                    alt="Facebook"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
                <a title="instagram" href="https://instagram.com">
                  <img
                    src={instagram}
                    alt="Instagram"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
