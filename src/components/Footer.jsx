import React from "react";

const Footer = () => {
  return (
    <footer
      className="mt-5 border border-start-0 border-end-0 border-bottom-0"
      style={{
        marginLeft: "-80px",
        marginRight: "-80px",
        marginBottom: "-60px",
        fontSize: "14px",
        color: "#aaa",
      }}
    >
      <div
        className="d-flex flex-lg-row flex-column justify-content-between align-items-center"
        style={{ padding: "15px 70px" }}
      >
        <div>
          <a
            href="https://www.facebook.com/muh.arifulislam/"
            target="_blank"
            rel="noreferrer"
            className="me-4 text-decoration-none"
            style={{ color: "#aaa" }}
          >
            Facebook
          </a>
          <a
            href="https://twitter.com/muh_arifulislam"
            target="_blank"
            rel="noreferrer"
            className="me-4 text-decoration-none"
            style={{ color: "#aaa" }}
          >
            Twitter
          </a>
          <a
            href="https://www.linkedin.com/in/muh-arifulislam/"
            target="_blank"
            rel="noreferrer"
            className="me-4 text-decoration-none"
            style={{ color: "#aaa" }}
          >
            LinkedIn
          </a>
        </div>
        <div className="mt-lg-0 mt-2">
          2023 | All rights reserved. Ariful Islam
        </div>
      </div>
    </footer>
  );
};

export default Footer;
