import React, { Component } from "react";
import SVGIcon from "../svgIcons/icons";
import Menubar from "./menubar";
import Boite from "./boiteaulettre";
import Flags from "./flags";
import Navigation from "./navigation";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom";

class HomeHeader extends Component {

    render() {
        return <div className="header homeheader">
            <Flags/>
            <Link to="/"> <SVGIcon name="mainmachvalueLogo" width="290px" /></Link>
            <div>
            <Link to="/contact"><Boite /></Link>
              <Menubar />
            </div>
            <Navigation/>

          </div>;
    }
}

export default HomeHeader;