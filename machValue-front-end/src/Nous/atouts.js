import React from "react";
import SVGIcon from "../svgIcons/icons";

const Atouts = () => {
    return <div className="atouts" id="nos-atouts">
        <p className="title">
            <span>NOS ATOUTS</span>
        </p>
        <main>
            <div className="adv">
                <div>
                    <p>RAPIDIT&Eacute;</p>
                    <p>SIMPLICIT&Eacute;</p>
                    <p>EFFICACIT&Eacute;</p>
                </div>
            </div>
            <div className="procedure">
               <SVGIcon name="liberte" width="130px"/>
                <p>
                    Apr&egrave;s une phase d'audit et de diagnostic, <span>impliquant d&egrave;s l'arnont vos &eacute;quipes, </span>
                        nous cr&eacute;ons des <span>&laquo; projects pilotes &raquo;</span> pour mieux cerner les enjeux du projet global &agrave; mettre en oeuvre.
                </p>
                <p>
                    Ce mode de fonctionnement nous permet <span>d'obtenir</span> plus rapidement l'<span>adh&eacute;sion de vos personnels</span> quant aux demandes que nous allons initier. Cela 
                    nous permet aussi de <span>confirmer la pertinence des choix</span> &agrave; mettre en oeuvre.
                </p>
            </div>
            
        </main>
    
    </div>;
};

export default Atouts;
