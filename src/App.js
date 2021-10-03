import React, {useEffect} from "react";
import './App.css';
import HeadNavbar from "./Navbar/HeadNavbar";
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
import AOS from "aos";
import "aos/dist/aos.css";




function App() {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="App">
       <ReactTooltip />
      <HeadNavbar />
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
}

export default App;
