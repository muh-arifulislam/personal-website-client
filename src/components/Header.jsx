import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light header pt-0">
      <div class="container-fluid header-content">
        <div className="d-flex justify-content-between">
          <Link to="/" class="navbar-brand d-lg-none d-flex" href="#">
            <div className="logo-symbol">A</div>
            <div className="logo-text">Ariful Islam</div>
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
          <Link to="/" class="navbar-brand d-lg-flex d-none py-0" href="#">
            <div className="logo-symbol">A</div>
            <div className="logo-text">Ariful Islam</div>
          </Link>
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item me-5">
              <Link
                to="/me"
                class="nav-link active"
                aria-current="page"
                href="#"
              >
                About
              </Link>
            </li>
            <li class="nav-item me-5">
              <Link to="/resume" class="nav-link" href="#">
                Resume
              </Link>
            </li>
            <li class="nav-item me-5">
              <Link to="/portfolio" class="nav-link" href="#">
                Portfolio
              </Link>
            </li>
            <li class="nav-item me-5">
              <Link to="/article" class="nav-link" href="#">
                Article
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/contact" class="nav-link" href="#">
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
