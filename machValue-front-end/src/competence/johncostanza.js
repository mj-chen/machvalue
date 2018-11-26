import React, {Component} from "react";
import john from "../assets/img/JOHN_COSTANZA.png";

class JohnCostanza extends Component {
    open = (id) => {
        if(window.innerWidth<768){
            const article = document.getElementById(id).getElementsByTagName('ARTICLE')[0];
            if (article.style.display === 'none') {
                article.style.display = 'block'
            } else {
                article.style.display = 'none'
            }
        }
    }
    render(){
        return <div id="costanza">
            <div onClick={() => this.open('costanza')}>
                <p className="title">
                    <span>JOHN COSTANZA</span>
                </p>
            </div>
            <article>
                <div>
                    <img src={`/${john}`} alt="john costanza" />
                </div>
                <div>
                    <p>
                        Am&eacute;ricain, John R. Costanza a fond&eacute; l'Institut John Costanza de Technologie en 1984 avec la mission de, &laquo; <strong>fournir les
                    outils et les techniques de gestion des flux de la demande</strong> (la DFT ou Demand Flow Technology) aux soci&eacute;t&eacute;s manufacturi&egrave;res pour
                        accro&icirc;tre leur comp&eacute;titivit&eacute; globale &raquo;.
                </p>
                    <p>
                        Il est laur&eacute;at du prix Nobel pour les sciences &eacute;conomiques, r&eacute;cipiendaire du prix &laquo; Heroes of US Manufacturing &raquo; decern&eacute; par le magazine Fortune.
                        Max PAGNIOL travailla avec John Costanza &agrave; l'institut de Denver.
                </p>
                </div>
                <div>
                    <p>
                        Cette technologie (<strong>Demand Flow Technology</strong>) est une strat&eacute;gie de d&eacute;finition et de d&eacute;ploiement des processus m&eacute;tier dans un flux de
                        production d'un produit en r&eacute;ponse &agrave; la demande client. DFT est bas&eacute;e sur un ensemble d'outils math&eacute;matiques qui sont utilis&eacute;s pour connecter les processus dans un flux continu afin de le lier
                        aux changements quotidiens de la demande.
                </p>
                    <p>
                        La DFT est donc destin&eacute;e &agrave; fournir une alternative &agrave; la fabrication par programmation, qui utilisait principalement un plan de vente et des pr&eacute;visions pour d&eacute;terminer un calendrier de production; tout ceci amenant &agrave;
                    produire en &laquo; <strong>JUST IN TIME</strong> &raquo;.
                </p>
                </div>
            </article>
        </div>;
    }
    
}

export default JohnCostanza;