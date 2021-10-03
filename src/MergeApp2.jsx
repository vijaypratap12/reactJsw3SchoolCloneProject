import React from "react";
import CssSection from "./CssSection/CssSection";
import Footer from "./Footer/Footer";
import HtmlSection from "./HtmlSection/HtmlSection";
import JavaScriptSec from "./JavaScriptSection/JavaScriptSec";
import LinksMiddleContent from "./LinksMiddleContent/LinksMiddleContent";
import ReactTooltip from "react-tooltip";
import PythonSection from "./PythonSection/PythonSection";
import SqlSection from "./SqlSection/SqlSection";
import HowToSection from "./HowToSection/HowToSection";
import KickstartCareer from "./KickstartCareer/KickstartCareer";
import ScrollToTopBtn from "./ScrollToTop";
import "./MergeApp2.css";
const App2 = () => {
  return (
    <div>
      <ReactTooltip />
      <HtmlSection />
      <CssSection />
      <JavaScriptSec />
      <PythonSection />
      <SqlSection />
      <LinksMiddleContent />
      <KickstartCareer />
      <HowToSection />
      <Footer />
      <ScrollToTopBtn />
    </div>
  );
};

export default App2;
