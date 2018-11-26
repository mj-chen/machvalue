import React, {Component}from "react";
import Fondateur from "./fondateur";
import Rencontres from "./rencontres";
import Valeur from "./valeur";
import Atouts from "./atouts";
import Equipe from "./equipe";
import Partenaire from "./partenairs";
import Header from "../header/header";
import Footer from "../extra/footer";

import {
  BrowserRouter as Router,
  HashRouter,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom";

class Nous extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hash: this.props.match,
        };
    }
    render(){
        console.log(this.props)
        return <div>
            <Header />
            <div className="nous">
              <p className="sectionTitle">
                <span>1. </span>
                QUI SOMMES NOUS?
              </p>
              <Fondateur /> 
              <Rencontres />
              <Valeur />
              <Atouts />
              <Equipe />
              <Partenaire />
            </div>
            <Footer/>
          </div>;
    }
}

export default Nous;