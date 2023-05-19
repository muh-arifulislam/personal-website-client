import { useState } from "react";
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
import { faCalendar, faGlobe, faUser } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
function App() {
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
    </div>
  );
}

export default App;
