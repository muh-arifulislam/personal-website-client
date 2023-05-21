import React, { useEffect, useState } from "react";
import PageTittle from "../../components/PageTittle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faGithub,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faCalendar,
  faGlobe,
  faReceipt,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import ProjectItem from "../../components/ProjectItem";
import SkeletonLoader from "../../components/SkeletonLoader";
import Offcanvas from "../../components/Offcanvas";
const Porfolio = () => {
  const [hover, setHover] = useState(false);
  const [projects, setProjects] = useState([]);
  const [project, setProject] = useState({});
  useEffect(() => {
    fetch("projects.json")
      .then((res) => res.json())
      .then((data) => {
        setTimeout(() => {
          setProjects(data);
        }, 1000);
      });
  }, []);
  return (
    <div className="position-relative">
      <PageTittle title="Portfolio" subtitle=""></PageTittle>
      <div>
        <div className="row g-4">
          {projects.length === 0 ? (
            <>
              <SkeletonLoader></SkeletonLoader>
              <SkeletonLoader></SkeletonLoader>
            </>
          ) : (
            projects.map((project, idx) => (
              <ProjectItem
                id="offcanvasProjects"
                isGrid={true}
                data={project}
                setProject={setProject}
                key={idx}
              ></ProjectItem>
            ))
          )}
        </div>
      </div>
      {/* Offcanvas  */}
      <Offcanvas project={project} id="offcanvasProjects"></Offcanvas>
    </div>
  );
};

export default Porfolio;
