import React from "react";

const TimelineItem = ({ className, data }) => {
  return (
    <div className={`timeline-item ${className}`}>
      <h5>
        {data?.yearStart} - {data?.yearEnd}
      </h5>
      <span
        className="ms-2 d-inline-block"
        style={{ fontSize: "12px", color: "#666", opacity: "0.7" }}
      >
        {data?.institute}
      </span>
      <h4 className="fw-bolder my-2 fs-6">{data?.major}</h4>
      <div>
        <p className="mb-0" style={{ fontSize: "0.92rem" }}>
          {data?.description}
        </p>
      </div>
    </div>
  );
};

export default TimelineItem;
