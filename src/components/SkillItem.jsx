import React from "react";

const SkillItem = ({ name, value }) => {
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-1">
        <h4 className="fs-6 mb-0">{name}</h4>
        <p className="mb-0">{value}%</p>
      </div>
      <div className="skill-container">
        <div className="skill-percentage" style={{ width: `${value}%` }}></div>
      </div>
    </div>
  );
};

export default SkillItem;
