import React,{Component} from "react";
import bouayad from "../assets/img/ANIS_BOUAYAD.png";

class Bouayad extends Component  {
    open = (id) => {
        if (window.innerWidth < 768) {
            const article = document.getElementById(id).getElementsByTagName('ARTICLE')[0];
            if (article.style.display === 'none') {
                article.style.display = 'block'
            } else {
                article.style.display = 'none'
            }
        }
    }



    render(){
        return <div id="bouayad">
            <div onClick={()=>this.open('bouayad')}>
                <p className="title">
                    <span>ANIS BOUAYAD</span>
                </p>
            </div>
            <article>
                <div>
                    <img src={`/${bouayad}`} alt="anis bouayad" />
                </div>
                <div>
                    <p>
                        Dans la continuit&eacute; de Jean-Louis SWINERS, une expression d'Anis BOUYAD pourrait &ecirc;tre <strong>&laquo; Pour gagner la guerre, il faut trouver la bonne alliance &raquo;.</strong>
                    </p>
                    <p>
                        C'est ainsi que dans son livre &laquo; Les alliances strat&eacute;giques, ma&icirc;triser les facteurs cl&eacute;s du succ&egrave;s &raquo;, Anis d&eacute;veloppe l'id&eacute;e simple que &laquo; mieux vaut se d&eacute;velopper et vivre avec d'autres que r&eacute;gresser et mourir seul &raquo;.
                </p>
                </div>
                <div>
                    <p>
                        Anis BOUYAD est Docteur en Sciences de gestion, sp&eacute;cialis&eacute; dans le conseil en strat&eacute;gie, avec cette singularit&eacute; qu'il observe finement de tous les changements de notre monde (politique, soci&eacute;tal, g&eacute;opolitique, climatique, &eacute;nerg&eacute;tique,...)
                </p>
                    <p>
                        Pragmatique, il a toujours apport&eacute; dans ses analyses, les outils mettant en lecture ces changements.
                </p>
                </div>
            </article>
        </div>;
    }
    
}

export default Bouayad;