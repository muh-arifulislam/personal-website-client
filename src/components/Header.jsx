import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light header pt-0">
      <div className="container-fluid header-content">
        <div className="d-flex justify-content-between">
          <Link to="/" className="navbar-brand d-lg-none d-flex" href="#">
            <div className="logo-symbol">A</div>
            <div className="logo-text">Ariful Islam</div>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <Link to="/" className="navbar-brand d-lg-flex d-none py-0" href="#">
            <div className="logo-symbol">A</div>
            <div className="logo-text">Ariful Islam</div>
          </Link>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item me-5">
              <Link
                to="/me"
                className="nav-link active"
                aria-current="page"
                href="#"
              >
                About
              </Link>
            </li>
            <li className="nav-item me-5">
              <Link to="/resume" className="nav-link" href="#">
                Resume
              </Link>
            </li>
            <li className="nav-item me-5">
              <Link to="/portfolio" className="nav-link" href="#">
                Portfolio
              </Link>
            </li>
            <li className="nav-item me-5">
              <Link to="/article" className="nav-link" href="#">
                Article
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link" href="#">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
