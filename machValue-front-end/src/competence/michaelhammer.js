import React,{Component} from "react";
import michael from "../assets/img/MICHAEL_HAMMER.png";

class MichaelHammer extends Component {
    open=(id)=>{
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
        return <div id="hammer">
            <div onClick={() => this.open('hammer')}>
                <p className="title" >
                    <span>MICHA&euml;L HAMMER</span>
                </p>
            </div>
            <article>
                <div>
                    <img src={`/${michael}`} alt="michael hammer" />
                </div>
                <div>
                    <p>
                        Micha&euml;l HAMMER fut le p&egrave;re avec son coll&egrave;gue CHAMPY de la m&eacute;thode du <strong>Reengineering</strong> (re&eacute;ing&eacute;nierie)
                    des processus de gestion (le BPR ou Business Process Reengineering). L'id&eacute;e maitresse d&eacute;fendue qui est <strong>la remise en cause fondamentale de l'organisation avec une reconception radicale des processus organisationnels,</strong> permet
                        de r&eacute;aliser des am&eacute;liorations spectaculaires de performances sur les co&ucirc;ts, les services et la rapidit&eacute;.
                </p>
                    <p>
                        Plut&ocirc;t que d'organiser une soci&eacute;t&eacute; en sp&eacute;cialit&eacute;s fonctionnelles (comme la production, la comptabilit&eacute;, le marketing, etc.) et pour regarder les t&acirc;ches que chaque fonction r&eacute;alise
                    Micha&euml;l HAMMER recommande que nous regardions les processus complets, d'une fa&ccedil;on <strong>plus transversale.</strong>
                    </p>
                    <p>
                        De l'acquisition des mati&egrave;res, en passant par la production, le marketing et la distribution, nous devrions reconstruire la soci&eacute;t&eacute; comme une s&eacute;rie de processus, une sorte d'organisation base z&eacute;ro.
                </p>
                </div>
                <div>
                    <p>
                        Le reengineering est un &laquo; must &raquo; de la syst&eacute;mique appliqu&eacute;e &agrave; l'organisation, mais il faut bien s&ucirc;r prendre toute la mesure des risques encourus et surtout ne
                        pas oublier les dimensions humaine, sociale et psychologique induite par les syst&egrave;mes organisationnels.
                </p>
                    <p>
                        <strong>Le juste milieur</strong> et la <strong>coh&eacute;rence</strong> doivent pr&eacute;dominer dans ce type d'exercice. Le reengineering n'est pas une machine &agrave; licencier et diminuer les effectifs car cela peut produire des
                        r&eacute;sultats catastrophiques pour la p&eacute;rennit&eacute; de l'entreprise : perte de mati&egrave;re grise, de comp&eacute;tence et de connaissance. Max PAGNIOL a connu Micha&euml;l Hammer lorsqu'il op&eacute;rait pour la division Snitaire du
                        Groupe AMERICAN STANDARD en Europe. Micha&euml;l HAMMER a &eacute;t&eacute; l'une des 25 personnalit&eacute;s les plus infuentes d'Am&eacute;rique selon la liste du Time Magazine &eacute;tablie en 1996.
                </p>
                </div>
            </article>
        </div>;
    }
  
}

export default MichaelHammer;