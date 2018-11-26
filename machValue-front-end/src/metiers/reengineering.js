import React,{Component} from "react";
import SVGIcon from "../svgIcons/icons";

class Reengineering extends Component {
    open = (index) => {
        if(window.innerWidth <768){
            const ps = document
                .getElementById("reengineering-des-process")
                .getElementsByTagName("ARTICLE")[0]
                .getElementsByTagName("DIV")
            [index].getElementsByTagName("P");
            Array.from(ps).map(p => {
                if (p.style.display === 'none') {
                    p.style.display = 'block'
                } else {
                    p.style.display = 'none'
                }
            });
        }
    }
    render(){
        return <div className="reengineering" id="reengineering-des-process">
            <p className="title">
                <span>REENGINEERING DES PROCESS</span>
            </p>
            <article>
                <div onClick={() => this.open(0)}>
                    <SVGIcon name="remodeling" />
                    <h2>Remodeling process map</h2>
                    <p>
                        <strong>La mise en place d'une strat&eacute;gie,</strong> apr&egrave;s analyse des forces et faiblesses de l'entreprise, repose
                    en grande partie sur <strong>l'organisation des services et des process</strong> en vue d'une <strong>bonne allocation de moyens.</strong>
                    </p>
                    <p>
                        Chaque <strong>acteur</strong> de l'entreprise doit se sentir concern&eacute; pour l'objectif collectif qu'est la <strong>satisfaction du client.</strong> <strong>Clarification des objectifs</strong> &agrave; atteindre, mise en place des <strong>outils </strong>
                        d'information et de communication, adjustement dans la <strong>r&eacute;partition des t&acirc;ches,</strong> permettront d'assurer le <strong>liant</strong> entre les diff&eacute;rents services pour <strong>gagner en performance globale.</strong>
                    </p>
                </div>
                <div onClick={() => this.open(1)}>
                    <SVGIcon name="leanmanu" />
                    <h2>Lean Manufacturing et just in Time</h2>
                    <p>
                        Deux objectifs de base guident la <strong>m&eacute;thode du Lean Manufacturing:</strong>
                    </p>
                    <ul>
                        <li>le niveau de <strong>productivit&eacute; industrielle</strong> alli&eacute; &agrave; un standard de qualit&eacute;</li>
                        <li>la r&eacute;activit&eacute; industrielle versus le <strong>service au client.</strong></li>
                    </ul>
                    <p>
                        Il convient de quantifier la valeur du produit du point de vue du client <strong>juste ce qua'il faut</strong> en identifiant la cha&icirc;ne de valeur qui mettra en &eacute;vidence les
                    gaspillages, traduisant ainsi la notion de lean (maigre) : produire seulement ce que le client a command&eacute;, et donc <strong>laisser le client tirer le produit</strong> dans la cha&icirc;ne.
                </p>
                    <p>
                        <strong>Flux tendu,</strong> production <strong>Just in Time,</strong> apporteront fiabilit&eacute; et &eacute;conomies.
                </p>
                </div>
                <div onClick={() => this.open(2)}>
                    <SVGIcon name="demarchequalite" />
                    <h2>D&eacute;marche qualit&eacute;</h2>
                    <p>
                        La mise en place d'une d&eacute;marche qualit&eacute; au sein de l'entreprise est un v&eacute;ritable <strong>acte manag&eacute;rial f&eacute;d&eacute;rateur; </strong>
                        cela ne concerne donc pas uniquement la qualit&eacute; intrins&egrave;que des produits et services &agrave; fournir aux clients.
                </p>
                    <p>
                        Ces outils norm&eacute;s (SMQ ISO 9001...) permettent au-del&agrave; d'une <strong>am&eacute;lioration globale de la gestion</strong> de vos diff&eacute;rents processus par une plus
                    grande coordination de ces derniers, d<strong>'inscrir l'entreprise dans une d&eacute;marche continue,</strong> mesur&eacute;e et suivie, et d'apporter &eacute;galement une cr&eacute;dibilit&eacute; plus grande
                        &agrave; votre organisation tant en interne qu'en externe.
                </p>
                </div>
            </article>
        </div>

    }
    
}

export default Reengineering;