import React, { useState } from "react";
import logo from "../assets/images/client-logo.png";
const Certificate = ({ data, setModalItem }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      onClick={() => setModalItem(data)}
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
      className="col-xs-12 col-sm-6"
      style={{ cursor: "pointer" }}
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
    >
      <div
        className={`${hover ? "shadow-lg" : "shadow-sm"}`}
        style={{
          position: "relative",
          display: "table",
          tableLayout: "fixed",
          width: "100%",
          border: "2px solid #e5e5e5",
          borderRadius: "8px",
          transition: "all 0.2s ease",
        }}
      >
        <div
          className="certi-logo"
          style={{
            display: "table-cell",
            width: "120px",
            height: "100%",
            backgroundColor: "#f5f5f5",
            padding: "25px",
            verticalAlign: "middle",
            borderTopLeftRadius: "8px",
            borderBottomLeftRadius: "8px",
          }}
        >
          <img src={logo} className="d-block w-100" alt="" />
        </div>
        <div
          className="certi-content"
          style={{
            width: "100%",
            display: "table-cell",
            padding: "20px 25px",
            verticalAlign: "middle",
          }}
        >
          <h4 className="fs-6 mb-1">{data?.title}</h4>
          <p className="mb-0">Membership ID: {data?.stId}</p>
          <h5 className="fs-6 mb-0">{data?.date}</h5>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
