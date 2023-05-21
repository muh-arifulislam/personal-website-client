import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

const Header = () => {
  function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
      <Link to={to} {...props} style={{borderBottom:`${match ? "2px solid #007ced":"none"}`,color:"#000",fontWeight:"500"}}>
        {children}
      </Link>
    );
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-light header pt-0">
      <div className="container-fluid header-content">
        <div className="d-flex justify-content-between">
          <Link to="/" className="navbar-brand d-lg-none d-flex">
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
          <Link to="/" className="navbar-brand d-lg-flex d-none py-0">
            <div className="logo-symbol">A</div>
            <div className="logo-text">Ariful Islam</div>
          </Link>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item me-lg-5">
              <CustomLink
                to="/"
                className="nav-link"
                aria-current="page"
              >
                Home
              </CustomLink>
            </li>
            <li className="nav-item me-lg-5">
              <CustomLink
                to="/me"
                className="nav-link"
                aria-current="page"
              >
                About
              </CustomLink>
            </li>
            <li className="nav-item me-lg-5">
              <CustomLink to="/resume" className="nav-link">
                Resume
              </CustomLink>
            </li>
            <li className="nav-item me-lg-5">
              <CustomLink to="/portfolio" className="nav-link">
                Project
              </CustomLink>
            </li>
            <li className="nav-item me-lg-5">
              <CustomLink to="/article" className="nav-link">
                Article
              </CustomLink>
            </li>
            <li className="nav-item">
              <CustomLink to="/contact" className="nav-link">
                Contact
              </CustomLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
