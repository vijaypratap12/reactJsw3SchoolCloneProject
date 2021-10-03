import React, {useEffect} from "react";
import './App.css';
import { Switch, Route } from "react-router";
import HeadNavbar from "./Navbar/HeadNavbar";
import MergeApp2 from "./MergeApp2"
import AOS from "aos";
import "aos/dist/aos.css";
import SignupLoginSection from "./LoginSection/SignupLoginSection";



function App() {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="App">
      <HeadNavbar />
      <Switch>
        <Route exact path to="/" component={MergeApp2} />
        <Route path to="/signuploginsection" component ={SignupLoginSection} />
      </Switch>
      
    </div>
  );
}

export default App;
