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
      language:this.props.language,
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.language !== prevProps.language) {
      this.setState({
        language: this.props.language,
      })
    }
  }
 
    render(){
        return(
            <div>
            <Header changeLanguage={(lg) => this.props.changeLanguage(lg)} language={this.state.language}/>
                <div className="nous">{
                  this.state.language === 'fr' ?
                <p className="sectionTitle">
                  <span>1. </span>
                  QUI SOMMES - NOUS ?
                </p>:
                <p className="sectionTitle">
                  <span>1. </span>
                  ABOUT US
                </p>
                }
                <Fondateur language={this.state.language} />
                <Rencontres language={this.state.language} />
                <Valeur language={this.state.language} />
                <Atouts language={this.state.language} />
                <Equipe language={this.state.language}/>
                <Partenaire language={this.state.language} />
              </div>
            <Footer language={this.state.language}/>
            </div> 
        ) 
    }
}

export default Nous;