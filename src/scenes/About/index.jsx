import React from "react";
import image from "../../assets/images/me.jpg";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div className="px-lg-5 mt-lg-4 mt-5">
      <div className="row justify-content-between gx-4">
        <div className="col-xs-12 col-sm-8">
          {/* about section  */}
          <div>
            <h2 className="fs-1 fw-bold" style={{ lineHeight: "1.1" }}>
              About me
            </h2>
            <p
              className="my-4"
              style={{
                fontSize: "1.05rem",
                lineHeight: "1.625",
                letterSpacing: "-.01rem",
              }}
            >
              Hey, I'm Ariful Islam! I'm a Fullstack Engineer working in Remote.
              Welcome to my spot on the web for my projects, tutorials, articles
              and anything else I want to show the world. Check out the{" "}
              <Link to="/portfolio" className="underline-link">
                projects
              </Link>{" "}
              page to see a highlight of my open-source work, and the{" "}
              <Link to="/article" className="underline-link">
                Article
              </Link>{" "}
              for my tutorials and more.
            </p>
            <p className="my-4">
              You can contact me by email at{" "}
              <span
                className=""
                style={{
                  textDecoration: "underline",
                  textDecorationThickness: "2px",
                }}
              >
                <strong>hello</strong>
              </span>{" "}
              at{" "}
              <span
                className=""
                style={{
                  textDecoration: "underline",
                  textDecorationThickness: "2px",
                }}
              >
                <strong>arifulislam20234@gmail.com</strong>
              </span>{" "}
              to say hi! I always appreciate meeting new people.
            </p>
            <ul>
              <li className="mb-2 underline-link-li">
                <a href="#" className="underline-link">
                  LinkdedIn
                </a>
              </li>
              <li className="mb-2 underline-link-li">
                <a href="#" className="underline-link">
                  Twitter
                </a>
              </li>
              <li className="mb-2 underline-link-li">
                <a href="#" className="underline-link">
                  Github
                </a>
              </li>
            </ul>
          </div>
          {/* masculer section  */}
          <div className="mt-5">
            <h2
              className="fs-3 fw-bold mb-3"
              style={{
                paddingBottom: "0.5rem",
                borderBottom: "1px solid #aaa",
              }}
            >
              Miscellaneous
            </h2>
            <ul>
              <li className="underline-link-li">
                <Link to="/resume" className="underline-link">
                  Resume
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-xs-12 col-sm-4">
          <div className="ps-lg-5">
            <div className="rounded px-4 py-4 mb-3" style={{backgroundColor:"#e6e6e6"}}>
              <h4 className="fs-6 mb-4">ME</h4>
              <div>
                <img className="img-fluid rounded-3" src={image} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
