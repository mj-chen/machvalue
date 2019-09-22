import React, {Component} from "react";
import Competitivite from "./competitivite";
import Reengineering from "./reengineering";
import ProspectionCommerciale from "./prospectionCo";
import Prestations from "./prestations";
import Mentoring from "./mentoring";
import Header from "../header/header";
import Footer from "../extra/footer";
import Arrow from "../extra/arrow";

class Metiers extends Component {

    componentDidMount(){
        window.scrollTo(0,0);
    }

    render(){
        const {language} = this.props;
        return(
         <div>
            <Header changeLanguage={(lg) => this.props.changeLanguage(lg)} language={language}/>  
            <div className='metiers'>
            {
                language === 'fr'?
                <p className="sectionTitle"><span>2. </span>NOS M&Eacute;TIERS</p>:
                language === 'korea'?
                <p className="sectionTitle"><span>2. </span> 사업영역</p>:
                <p className="sectionTitle"><span>2. </span>OUR BUSINESSES</p>
            }
                <Competitivite language={language} />
                <Reengineering language={language}/>
                <ProspectionCommerciale language={language}/>
                <Prestations language={language}/>
                <Mentoring language={language}/>
            </div>
            <Footer language={language}/>
            <Arrow/>
        </div>
        )
    }
}

export default Metiers;