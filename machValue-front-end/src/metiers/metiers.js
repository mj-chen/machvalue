import React from "react";
import Competitivite from "./competitivite";
import Reengineering from "./reengineering";
import ProspectionCommerciale from "./prospectionCo";
import Prestations from "./prestations";
import Mentoring from "./mentoring";
import Header from "../header/header";
import Footer from "../extra/footer";

const Metiers = () => {
    return <div>
        <Header/>  
        <div className='metiers'>
            <p className="sectionTitle"><span>2. </span>NOS M&Eacute;TIERS</p>
            <Competitivite />
            <Reengineering/>
            <ProspectionCommerciale/>
            <Prestations/>
            <Mentoring/>
        </div>
        <Footer/>
    </div>
}

export default Metiers;