import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReceipt } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
const ProjectItem = ({ data, isGrid }) => {
  const navigate = useNavigate();
  const [hover, setHover] = useState(false);
  const { title, thumb, id } = data;
  return (
    <div className={`${isGrid && "col-xs-12 col-sm-6 "}`}>
      <div
        onClick={() => navigate(`/portfolio/${id}`)}
        className=""
        style={{ cursor: "pointer" }}
      >
        <div
          onMouseOver={() => setHover(true)}
          onMouseOut={() => setHover(false)}
          className="position-relative overflow-hidden"
        >
          <img
            className="img-fluid rounded-3"
            style={{
              transition: "all 0.3s ease-out",
              transform: `scale(${hover ? "1.2" : "1"})`,
            }}
            src={thumb}
            alt=""
          />
          <div
            className="px-2 rounded-3 bg-white position-absolute"
            style={{ top: "20px", left: "20px" }}
          >
            <span className="fw-semibold">{title}</span>
          </div>
          <div
            className="position-absolute"
            style={{ bottom: "20px", width: "100%" }}
          >
            <div
              className="w-100 d-flex justify-content-between align-items-end"
              style={{
                padding: "0 20px",
                transition: "all 0.3s ease-out",
                opacity: `${hover ? "1" : "0"}`,
              }}
            >
              <span
                className="px-2 bg-white rounded rounded-3"
                style={{ fontSize: "14px" }}
              >
                Detailed
              </span>
              <span className="bg-white px-2 py-1 rounded rounded-3">
                <FontAwesomeIcon
                  style={{ color: "#7066ff" }}
                  size="lg"
                  icon={faReceipt}
                ></FontAwesomeIcon>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
