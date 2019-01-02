import React, {Component} from "react";
import Competitivite from "./competitivite";
import Reengineering from "./reengineering";
import ProspectionCommerciale from "./prospectionCo";
import Prestations from "./prestations";
import Mentoring from "./mentoring";
import Header from "../header/header";
import Footer from "../extra/footer";

class Metiers extends Component {

    constructor(props){
        super(props);
        this.state={
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
        return(
         <div>
            <Header changeLanguage={(lg) => this.props.changeLanguage(lg)} language={this.state.language}/>  
            <div className='metiers'>
            {
                this.state.language === 'fr'?
                <p className="sectionTitle"><span>2. </span>NOS M&Eacute;TIERS</p>:
                <p className="sectionTitle"><span>2. </span>OUR BUSINESSES</p>
            }
                <Competitivite language={this.state.language} />
                <Reengineering language={this.state.language}/>
                <ProspectionCommerciale language={this.state.language}/>
                <Prestations language={this.state.language}/>
                <Mentoring language={this.state.language}/>
            </div>
            <Footer language={this.state.language}/>
        </div>
        )
    }
}

export default Metiers;