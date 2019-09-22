import React, {Component}from "react";
import Fondateur from "./fondateur";
import Rencontres from "./rencontres";
import Valeur from "./valeur";
import Atouts from "./atouts";
import Equipe from "./equipe";
import Partenaire from "./partenairs";
import Header from "../header/header";
import Footer from "../extra/footer";
import Arrow from "../extra/arrow";

import {
  BrowserRouter as Router,
  HashRouter,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom";

class Nous extends Component {

  componentDidMount(){
    window.scrollTo(0,0);
  }
    render(){
      const {language} = this.props;
        return (
          <div>
            <Header
              changeLanguage={lg => this.props.changeLanguage(lg)}
              language={language}
            />
            <div className="nous">
              {language === "fr" ? (
                <p className="sectionTitle">
                  <span>1. </span>
                  QUI SOMMES - NOUS ?
                </p>
              ) : language === "korea" ? (
                <p className="sectionTitle">
                  <span>1. </span>
                  회사소개
                </p>
              ) : (
                <p className="sectionTitle">
                  <span>1. </span>
                  ABOUT US
                </p>
              )}
              <Fondateur language={language} />
              <Rencontres language={language} />
              <Valeur language={language} />
              <Atouts language={language} />
              <Equipe language={language} />
              <Partenaire language={language} />
            </div>
            <Footer language={language} />
            <Arrow/>
          </div>
        ); 
    }
}

export default Nous;