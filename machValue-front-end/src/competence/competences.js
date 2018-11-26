import React from "react";
import Methodologie from "./methodologie";
import Rencontres from "./rencontres";
import MichaelHammer from "./michaelhammer";
import JohnCostanza from "./johncostanza";
import Swiners from "./jeanlouisswiners";
import Bouayad from "./bouayad";
import Header from "../header/header";
import Footer from "../extra/footer";
const Competences = () => {
    return <div>
        <Header/>
        <div className='competences'>
            <p className="sectionTitle"><span>3. </span>NOS COMP&Eacute;TENCES</p>
            <Methodologie/>
            <Rencontres/>
            <MichaelHammer/>
            <JohnCostanza/>
            <Swiners/>
            <Bouayad/>
        </div>
        <Footer/>
    </div> 
}

export default Competences;