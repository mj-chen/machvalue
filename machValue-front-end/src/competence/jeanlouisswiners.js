import React,{Component} from "react";
import Swinners from "../assets/img/Swinners.png";

class Swiners extends Component {
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
        return <div id="swiners">
            <div onClick={()=>this.open('swiners')}>
                <p className="title">
                    <span>JEAN-LOUIS SWINERS</span>
                </p>
            </div>
            <article>
                <div>
                    <img src={`/${Swinners}`} alt="Jean Louis Swinners" />
                </div>
                <div>
                    <p>
                        Max PAGNIOL a rencontr&eacute; Jean-Louis SWINERS &agrave; l'occasion de s&eacute;minaires EBS et CRC &agrave; HEC Paris.
                </p>
                    <p>
                        Jean-Louis SWINERS est un photographe fran&ccedil;ais, qui a d&eacute;montr&eacute; depuis de nombreuses ann&eacute;es sa capacit&eacute;
                    &agrave; <strong>comprendre les choses de ce monde</strong> et &agrave; ce titre d&eacute;montr&eacute; les multiples facettes de son talent. Il a d&eacute;j&agrave; eu le Prix Ni&egrave;pce en 62.
                        Apr&egrave;s avoir &eacute;t&eacute; photographe, journaliste et publicitaire, il devient &agrave; partir des ann&eacute;es 80, enseignant en marketing et strat&eacute;gie &agrave; l'European Business School de Paris et &agrave; HEC, ainsi qu'au CRC.
                    Il publira ainsi en 92 un livre qui fut un choc dans la profession du <strong>marketing strat&eacute;gique.</strong>
                    </p>
                    <p>
                        La r&eacute;alit&eacute; d&eacute;montre que nos entreprises sont v&eacute;ritablement et continellement en guerre; on ne doit plus faire du marketing mais du <strong>warketing !</strong>
                    </p>
                </div>
                <div>
                    <p>
                        &Ecirc;tre intelligent ne suffit pas, il faut se mettre sur le pied de guerre, pour s'agu&eacute;rrir dans les analyses concurrentielles, et ainsi aller au-del&agrave; de &laquo; faire du commerce &raquo;, &ecirc;tre plus strat&egrave;ge.
                </p>
                    <p>
                        Plus tard, il &eacute;crira aussi &laquo; L'intelligence cr&eacute;ative : au-del&agrave; du brainstorming &raquo;, paru en 2004, qui confirme que <strong>tout probl&egrave;me</strong> a au moins <strong>trois solutions,</strong> et que sans
                    avoir trouv&eacute; au moins trois solutions difff&eacute;rentes, l'&eacute;quipe doit revoir sa copie, jusqu'&agrave; ce qu'elle les trouve. Ainsi par rebonds successifs, le vrai changement, la <strong>v&eacute;ritable innovation</strong> na&icirc;tra...
                </p>
                    <p>
                        Le meilleur moyen de lutter contre la concurrence &eacute;tant la <strong>pens&eacute;e cr&eacute;ative.</strong> 2015 verra son retour &agrave; la photographie et au m&eacute;tier de r&eacute;dacteur.
                </p>
                </div>
            </article>
        </div>;

    }
    
}

export default Swiners;
