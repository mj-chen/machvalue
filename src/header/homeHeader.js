import React, { Component } from "react";
import SVGIcon from "../svgIcons/icons";
import {Menubar, menubarRef} from "./menubar";
import Boite from "./boiteaulettre";
import Flags from "./flags";
import {Navigation, navRef} from "./navigation";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom";


class HomeHeader extends Component {

  constructor(props) {
    super(props);
  }

  toggleMenu() {
    // Animation of menu bar
    menubarRef.current.classList.toggle('change');
    //open menu
    navRef.current.classList.toggle('hidden');
  }

  navigateTo = (el, adjust = -170) => {
    el.scrollIntoView();
    window.scrollBy(0, adjust);
    menubarRef.current.classList.remove("change");
    navRef.current.classList.add("hidden");
  }

    render() {
        return (
          <div className="header homeheader">
            <Flags
              changeLanguage={lg => this.props.changeLanguage(lg)}
            />
            <Link to="/">
              {" "}
              <SVGIcon name="mainmachvalueLogo" width="290px" />
            </Link>
            <div>
              <Link to="/contact">
                <Boite />
              </Link>
              <Menubar
                ref={menubarRef}
                toggleMenu={() => this.toggleMenu()}
              />
            </div>
            <Navigation
              changeLanguage={(lg) => this.props.changeLanguage(lg)}
              language={this.props.language}
              navigateTo={(el, adjust) => this.navigateTo(el, adjust)}
            />
          </div>
        );
    }
}

export default HomeHeader;