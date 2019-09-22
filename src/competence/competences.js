import React, {Component} from "react";
import Methodologie from "./methodologie";
import Rencontres from "./rencontres";
import MichaelHammer from "./michaelhammer";
import JohnCostanza from "./johncostanza";
import Swiners from "./jeanlouisswiners";
import Bouayad from "./bouayad";
import Header from "../header/header";
import Footer from "../extra/footer";
import Arrow from "../extra/arrow";

class Competences extends Component {

    componentDidMount(){
        window.scrollTo(0,0);
    }

    render(){
        const {language} = this.props;
        return <div>
            <Header changeLanguage={lg => this.props.changeLanguage(lg)} language={language} />
            <div className="competences">
              {language === "fr" ? 
                <p className="sectionTitle">
                  <span>3. </span>NOS COMP&Eacute;TENCES
                </p> : 
                language === 'korea'?
                <p className="sectionTitle">
                    <span>3. </span>조직 역량 
                </p>:
                <p className="sectionTitle">
                  <span>3. </span>OUR SKILLS
                </p>}
              <Methodologie language={language} />
              <Rencontres language={language} />
              <MichaelHammer language={language} />
              <JohnCostanza language={language} />
              <Swiners language={language} />
              <Bouayad language={language} />
            </div>
            <Footer language={language} />
            <Arrow/>
          </div>;
    }
}

export default Competences;