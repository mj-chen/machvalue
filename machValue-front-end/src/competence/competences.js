import React, {Component} from "react";
import Methodologie from "./methodologie";
import Rencontres from "./rencontres";
import MichaelHammer from "./michaelhammer";
import JohnCostanza from "./johncostanza";
import Swiners from "./jeanlouisswiners";
import Bouayad from "./bouayad";
import Header from "../header/header";
import Footer from "../extra/footer";
class Competences extends Component {

    constructor(props) {
        super(props);
        this.state = {
            language: this.props.language
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
        return <div>
            <Header changeLanguage={lg => this.props.changeLanguage(lg)} language={this.state.language} />
            <div className="competences">
              {this.state.language === "fr" ? <p className="sectionTitle">
                  <span>3. </span>NOS COMP&Eacute;TENCES
                </p> : <p className="sectionTitle">
                  <span>3. </span>OUR SKILLS
                </p>}
              <Methodologie language={this.state.language} />
              <Rencontres language={this.state.language} />
              <MichaelHammer language={this.state.language} />
              <JohnCostanza language={this.state.language} />
              <Swiners language={this.state.language} />
              <Bouayad language={this.state.language} />
            </div>
            <Footer language={this.state.language} />
          </div>;
    }
}

export default Competences;