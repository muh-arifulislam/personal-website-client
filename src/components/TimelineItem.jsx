import React from "react";

const TimelineItem = ({ className }) => {
  return (
    <div className={`timeline-item ${className}`}>
      <h5>2009</h5>
      <span
        className="ms-2 d-inline-block"
        style={{ fontSize: "12px", color: "#666", opacity: "0.7" }}
      >
        University of Studies
      </span>
      <h4 className="fw-bolder my-2 fs-6">UX Design</h4>
      <div>
        <p className="mb-0" style={{ fontSize: "0.92rem" }}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus fugiat
          ad cum aut veniam aspernatur labore impedit facilis.
        </p>
      </div>
    </div>
  );
};

export default TimelineItem;
