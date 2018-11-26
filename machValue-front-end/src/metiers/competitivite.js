import React,{Component} from "react";
import SVGIcon from "../svgIcons/icons";

class Competitivite extends Component{
    open=(index)=>{
        if(window.innerWidth<768){
            const ps = document.getElementsByClassName('competitivite')[0].getElementsByTagName('ARTICLE')[0].getElementsByTagName('DIV')[index].getElementsByTagName('P');
            Array.from(ps).map(p => {
                if (p.style.display === 'none') {
                    console.log(open);
                    p.style.display = 'block'
                } else {
                    p.style.display = 'none'
                }
            });
        }
    }
    render(){
        return <div className="competitivite" id="comp&eacute;titivit&eacute;-et-vitesse-de-d&eacute;veloppement">
            <p className="title">
                <span>COMP&Eacute;TITIVIT&Eacute; ET VITESSE DE D&Eacute;VELOPPEMENT</span>
            </p>
            <article>
                <div onClick={()=>this.open(0)}>
                    <SVGIcon name="position" />
                    <h2>Positionnement Strat&eacute;gique</h2>
                    <p>
                        Trop souvent les entreprises ne prennent pas le temps d'analyser leur <strong>position strat&eacute;gique </strong>
                        dans leurs march&eacutes;.
                </p>
                    <p>
                        Sans vision claire des situations nouvelles, et sans avoir pris le recul n&eacute;cessaire pour <strong>mieux adapter son plan </strong>
                        op&eacute;rationnel, les allocations de ressources ne seront pas optimis&eacute;es et l'efficience globale en sera d'autant diminu&eacute;e.
                </p>
                </div>
                <div onClick={() => this.open(1)}>
                    <SVGIcon name="audit" />
                    <h2>Audit de performance</h2>
                    <p>
                        Il est important de <strong>mesurer sa performance en regard des tendances de march&eacute;,</strong> de l'<strong>environnement concurrentiel,</strong> de ses propres objectifs et ainsi pourvoir <span>se situer le plus objectivement possible </span>
                        pour infl&eacute;chir ou ajuster les diff&eacute;rents plans d'actions ( commerciaux, industriels, etc...). Nous prenons le temps de construire avec vous <strong>les grilles de lecture</strong> (dashboard) qui vous permettront de <strong>conduire efficacement la
                        r&eacute;alisation de votre plan.</strong>
                    </p>
                </div>
                <div onClick={() => this.open(2)}>
                    <SVGIcon name="analyse" />
                    <h2>Analyse de valeur</h2>
                    <p>
                        Trouver de nouveaux produits, de nouvelles solutions n'est pas &eacute;vident et l'entreprise
                    peut chercher longtemps sans succ&egrave;s. Il faut donc pour rester comp&eacute;titifs, <strong>compenser et toujours r&eacute;duire les co&ucirc;ts. </strong>
                        Ce qui compte c'est la notion de <strong>moindre co&ucirc;ts global </strong>permettant de r&eacute;pondre &agrave; la solution voulue. <strong>L'analyse de la valeur </strong>est la
                    m&eacute;thode la plus rationnelle <strong>d'optimisation du proc&eacute;d&eacute; de production d'un produits </strong>s'inscrivant globalement dans l'ing&eacute;nierie de celui-ci (re-conception, industrialisation et autres) et ce, afin d'<strong>obtenir ce produit au plus juste co&ucirc;t.</strong>
                    </p>
                </div>
                <div onClick={() => this.open(3)}>
                    <SVGIcon name="timetomarket" />
                    <h2>Time to Market</h2>
                    <p>
                        Non seulement l'entreprise se doit de <strong>sortir des projets</strong> mais elle se doit aussi de le faire <strong>&laquo; au bon moment, juste &agrave; temps &raquo;</strong> en <strong>hi&eacute;rarchisant les priorit&eacute;s,</strong> avec l<strong>'adh&eacute;sion de tous. </strong>
                        In&eacute;vitablement certains sujets passeront apr&egrave;s d'autres et les frustrations risquent de na&icirc;tre, d'o&ugrave; l'imp&eacute;rieuse n&eacute;cessit&eacute; de <strong>&laquo; faire comprendre le pourquoi &raquo;.</strong> Enfin, r&eacute;pondre aux imp&eacute;ratifs de timing,
                    demande une transversalit&eacute; entre les process afin d'&eacute;viter des oublis. Une m&eacute;thodologie <strong>&laquo; Time to Market &raquo;</strong> &eacute;vite ces d&eacute;sordres, f&eacute;d&egrave;re vos &eacute;quipes, vous fait gagner en flexibilit&eacute; et en adh&eacute;sion, vous
                        assurant ainsi r&eacute;activit&eacute; et efficience.
                </p>
                </div>
            </article>
        </div>
    }
   
}

export default Competitivite;