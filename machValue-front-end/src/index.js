import React, {Component} from "react";
import ReactDom from "react-dom";
import HomePage from "./homePage/homePage";
import Default from "./extra/construction";
import styles from "./scss/index.scss";
import Nous from "./Nous/nous";
import Metiers from "./metiers/metiers";
import Competences from "./competence/competences";
import Contact from "./contact/contact";
import Actualites from "./actualites/actualites";
import Articles from "./articles/articles";
import {Router} from "react-router";
import {Route, Link, Switch }  from 'react-router-dom';
import createHistory from "history/createBrowserHistory";
const history = createHistory();
class Index extends Component{
    constructor(props) {
        super(props);
        this.state = {
            language: 'fr',
        }
    }

    changeLanguage = (language) => {
        this.setState({ language });
    }

    render(){
        return (
            <Switch>
                <Route exact path="/" render={()=><HomePage language={this.state.language} changeLanguage={(lg)=>this.changeLanguage(lg)}/>} />
                <Route path="/nous" render={() =><Nous language={this.state.language} changeLanguage={(lg) => this.changeLanguage(lg)}/>} />
                <Route path="/m&eacute;tiers" render={() => <Metiers language={this.state.language} changeLanguage={(lg) => this.changeLanguage(lg)}/>} />
                <Route path="/comp&eacute;tences" render={() => <Competences language={this.state.language} changeLanguage={(lg) => this.changeLanguage(lg)}/>} />
                <Route path="/contact" render={() => <Contact language={this.state.language} changeLanguage={(lg) => this.changeLanguage(lg)}/>} />
                <Route path="/actualit&eacute;s" exact render={() => <Actualites language={this.state.language} changeLanguage={(lg) => this.changeLanguage(lg)}/>}/>
                <Route path="/actualités/articles/:id" render={(props) => <Articles {...props} language={this.state.language} changeLanguage={(lg) => this.changeLanguage(lg)} />} />
                <Route path="/china" render={() => <div className="cover construction">
                    <p>敬请期待！</p>
                </div>} />
                <Route path="/south-korea" render={() => <div className="cover construction">
                    <p>설립</p>
                </div>} />
                <Route  component={Default}/>
            </Switch>
        )
    }
}

ReactDom.render(<Router history={history}><Index /></Router>, document.getElementById("index"))