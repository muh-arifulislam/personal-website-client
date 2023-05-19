import React from "react";

const PageTittle = ({ title, subtitle }) => {
  return (
    <div className="page-title">
      <h1>{title}</h1>
      <div className="page-subtitle">
        <h4>{subtitle}</h4>
      </div>
    </div>
  );
};

export default PageTittle;
