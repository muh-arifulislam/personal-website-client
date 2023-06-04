import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./scenes/Home/index";
import StateContext from "./state/StateContext";
import Footer from "./components/Footer";
import Resume from "./scenes/Resume";
import Contact from "./scenes/Contact/Index";
import Portfolio from "./scenes/Portfolio/index";
import Article from "./scenes/Article/index";
import About from "./scenes/About/index";
import ArticleDescr from "./scenes/ArticleDescr/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUp,
  faCalendar,
  faGlobe,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import ProjectDescr from "./scenes/ProjectDescr";
function App() {
  const [scrollBtn, setScrollBtn] = useState(false);
  const [bgPositionX, setBgPositionX] = useState(0);
  const [bgPositionY, setBgPositionY] = useState(0);
  const moveBgPosition = (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const moveX = (mouseX - centerX) / 40;
    const moveY = (mouseY - centerY) / 40;
    setBgPositionX(moveX);
    setBgPositionY(moveY);
  };
  useEffect(() => {
    if (window.scrollY > 100) {
      setScrollBtn(true);
    } else {
      setScrollBtn(false);
    }
  }, [window.scrollY]);
  return (
    <div className="App position-relative" onMouseMove={moveBgPosition}>
      <div className="page-container">
        <Header></Header>
        <StateContext.Provider value={[bgPositionX, bgPositionY]}>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/me" element={<About></About>}></Route>
            <Route path="/resume" element={<Resume></Resume>}></Route>
            <Route path="/portfolio" element={<Portfolio></Portfolio>}></Route>
            <Route
              path="/portfolio/:id"
              element={<ProjectDescr></ProjectDescr>}
            ></Route>
            <Route path="/article" element={<Article></Article>}></Route>
            <Route
              path="/article/:title"
              element={<ArticleDescr></ArticleDescr>}
            ></Route>
            <Route path="/contact" element={<Contact></Contact>}></Route>
          </Routes>
        </StateContext.Provider>
        <Footer></Footer>
      </div>
      {/* background qube animation */}
      <div
        className="position-fixed left-0 right-0 bottom-0"
        style={{ zIndex: "-1", width: "100%", height: "100vh" }}
      >
        <div
          className="w-100 h-100 position-relative"
          style={{
            transform: `translateX(${bgPositionX / 3}px) translateY(${
              bgPositionY / 3
            }px)`,
          }}
        >
          <div className="position-absolute background-qube background-qube-tl"></div>
          <div className="position-absolute background-qube background-qube-tr"></div>
          <div className="position-absolute background-qube background-qube-br"></div>
        </div>
      </div>
      {/* scroll to top button  */}
      <div
        className={`scroll-to-top ${scrollBtn && "show"}`}
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      >
        <FontAwesomeIcon icon={faArrowUp}></FontAwesomeIcon>
      </div>
    </div>
  );
}

export default App;
