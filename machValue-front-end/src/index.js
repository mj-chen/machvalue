import React from "react";
import ReactDom from "react-dom";
import HomePage from "./homePage/homePage";
import Default from "./extra/construction";
import styles from "./scss/index.scss";
import Nous from "./Nous/nous";
// import Heading from "./homePage/heading";
import Metiers from "./metiers/metiers";
import Competences from "./competence/competences";
import Contact from "./contact/contact";
import { BrowserRouter as Router, Route, Link, Switch, Redirect }  from 'react-router-dom';

const Index = ()=>{
    return (
    <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/nous" component={Nous} />
        <Route path="/m&eacute;tiers" component={Metiers} />
        <Route path="/comp&eacute;tences" component={Competences} />
        <Route path="/contact" component={Contact} />
        <Route path="/actualit&eacute;s" render={() => <div className="cover construction">
            <p>A venir...</p>
        </div>}/>
        <Route path="/english" render={() => <div className="cover construction">
              <p>Coming soon ...</p>
            </div>} />
        <Route path="/china" render={() => <div className="cover construction">
              <p>敬请期待！</p>
            </div>} />
        <Route path="/south-korea" render={() => <div className="cover construction">
                <p>설립</p>
            </div>} />
        <Route  component={Default}/>
            
      </Switch>
    )
    ;
}

ReactDom.render(<Router><Index /></Router>, document.getElementById("index"))