import React from "react";
import ValeurIcon from "./valeurSVG";
import Liberte from "./liberté";
import Equipe from "./equipe";
import MachValueLogo from "./machvalue_logo";
import Boite_Au_Lettre from "./boite_au_lettre";
import Audit from "./audit";
import Analyse from "./analyse";
import Time_to_Market from "./timeToMarket";
import Position from "./positionnement";
import Remodeling from "./remodeling";
import LeanManu from "./leanManu";
import DemarcheQualite from "./demarcheQualite";
import Prospection from "./prospection";
import Methodo from "./methodo";
import Portrait from "./portrait";
import MachvalueHome from "./Logo_Machvalue_Home";


const SVGIcon = props =>{
    switch(props.name){
        case "valeur":
            return <ValeurIcon width={props.width}/>;
        case "liberte":
            return <Liberte width={props.width}/>;
        case "equipe":
            return <Equipe width={props.width}/>;
        case "machvalueLogo":
            return <MachValueLogo width={props.width}/>;
        case "boiteaulettre":
            return <Boite_Au_Lettre width={props.width} openBoiteAuLettre={props.open}/>;
        case "position":
            return <Position/>;
        case "analyse":
            return <Analyse/>;
        case "audit":
            return <Audit/>;
        case "timetomarket":
            return <Time_to_Market/>;
        case "leanmanu":
            return <LeanManu/>;
        case "remodeling":
            return <Remodeling/>;
        case "demarchequalite":
            return <DemarcheQualite/>;
        case "prospection":
            return <Prospection/>;
        case "methodo":
            return <Methodo/>;
        case "portrait":
            return <Portrait/>;
        case"mainmachvalueLogo":
            return < MachvalueHome/>;
        default:
            return <div/>;
    }
}

export default SVGIcon;
       
    
    
