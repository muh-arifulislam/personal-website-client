import React from "react";

const SectionTitle = ({ children }) => {
  return (
    <div className="mb-4">
      <h4 className="position-relative d-inline-block pb-2 block-title">
        {children}  
      </h4>
    </div>
  );
};

export default SectionTitle;
