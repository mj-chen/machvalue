import React,{Component} from "react";
import michael from "../assets/img/MICHAEL_HAMMER.png";

class MichaelHammer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      language: this.props.language
    };
    this.article = React.createRef();
  }

  componentDidUpdate(prevProps) {
    if (this.props.language !== prevProps.language) {
      this.setState({
        language: this.props.language
      });
    }
  }

  open = div => {
    if (window.innerWidth < 768) {
      this.article.current.classList.toggle("hidden");
    }
  };

  render() {
    return (
      <div id="hammer">
        <div onClick={() => this.open()}>
          <p className="title">
            <span>MICHA&euml;L HAMMER</span>
          </p>
        </div>
        <article className="hidden" ref={this.article}>
          <div>
            <img src={`/${michael}`} alt="michael hammer" />
          </div>
          {
            this.state.language === 'fr'?
            <div>
                <p>
                    Micha&euml;l HAMMER fut le p&egrave;re avec son coll&egrave;gue
                    CHAMPY de la m&eacute;thode du <strong>Reengineering</strong>{" "}
                    (r&eacute;ing&eacute;nierie) des processus de gestion (le BPR ou
                    Business Process Reengineering). L'id&eacute;e maitresse
                    d&eacute;fendue qui est{" "}
                    <strong>
                    la remise en cause fondamentale de l'organisation avec une
                    reconception radicale des processus organisationnels,
                    </strong>{" "}
                    permet de r&eacute;aliser des am&eacute;liorations spectaculaires
                    de performances sur les co&ucirc;ts, les services et la
                    rapidit&eacute;.
                </p>
                <p>
                    Plut&ocirc;t que d'organiser une soci&eacute;t&eacute; en
                    sp&eacute;cialit&eacute;s fonctionnelles (comme la production, la
                    comptabilit&eacute;, le marketing, etc.) et pour regarder les
                    t&acirc;ches que chaque fonction r&eacute;alise, Micha&euml;l
                    HAMMER recommande que nous regardions les processus complets,
                    d'une fa&ccedil;on <strong>plus transversale.</strong>
                </p>
                <p>
                    De l'acquisition des mati&egrave;res, en passant par la
                    production, le marketing et la distribution, nous devrions
                    reconstruire la soci&eacute;t&eacute; comme une s&eacute;rie de
                    processus, une sorte d'organisation base z&eacute;ro.
                </p>
            </div>:
            <div>
                <p>
                    Micha&euml;l HAMMER is the founder, with his colleague CHAMPY, of the <strong>Reengineering</strong> (management process) 
                    method (the BPR or Business Process Reengineering). The central idea is <strong>a fundamental reconsideration 
                    of the organization operated by a radical redesign of organizational processes</strong>, resulting in dramatic 
                    improvements in performances (cost reduction, customer service and global efficiency).
                </p>
                <p>
                    Rather than organizing a company into functional specialties (production, accounting, marketing, etc.) 
                    and to look into the tasks performed by each fun Micha&euml;l HAMMER recommends a full-scale recreation 
                    of processes, using a <strong>more transversal</strong> approach.
                </p>
                <p>
                    All processes are concerned: acquisition of materials, production, marketing and distribution. 
                    The organization has to be rebuilt as a series of processes, like a zero-base organization.
                </p>
            </div>
          }
          {
            this.state.language === 'fr'?
            <div>
                <p>
                    Le reengineering est un &laquo; must &raquo; de la
                    syst&eacute;mique appliqu&eacute;e &agrave; l'organisation, mais
                    il faut bien s&ucirc;r prendre toute la mesure des risques
                    encourus et surtout ne pas oublier les dimensions humaine, sociale
                    et psychologique induites par les syst&egrave;mes
                    organisationnels.
                </p>
                <p>
                    <strong>Le juste milieu</strong> et la{" "}
                    <strong>coh&eacute;rence</strong> doivent pr&eacute;dominer dans
                    ce type d'exercice. Le reengineering n'est pas une machine
                    &agrave; licencier et diminuer les effectifs car cela peut
                    produire des r&eacute;sultats catastrophiques pour la
                    p&eacute;rennit&eacute; de l'entreprise : perte de mati&egrave;re
                    grise, de comp&eacute;tence et de connaissance. Max PAGNIOL a
                    connu Micha&euml;l HAMMER lorsqu'il op&eacute;rait pour la
                    division Sanitaire du Groupe AMERICAN STANDARD en Europe.
                    Micha&euml;l HAMMER a &eacute;t&eacute; l'une des 25
                    personnalit&eacute;s les plus influentes d'Am&eacute;rique selon
                    la liste du Time Magazine &eacute;tablie en 1996.
                </p>
            </div>
            :
            <div>
                <p>
                    Re-engineering is THE best-in-class holistic approach applied to organizations. 
                    Yet the potential risks incurred should be clearly assessed, and especially the human, 
                    social and psychological aspects inherent to organizational systems should not be discarded. 
                </p>
                <p>
                    <strong>Good compromise</strong> and <strong>consistency</strong> are paramount in this type of exercise. 
                    Re-engineering is not a &laquo; lay -off machine &raquo; used to reduce staff, which could 
                    induce disastrous results for the long term existence of the company: loss of 
                    brainpower, skills and knowledge. Max PAGNIOL met Micha&euml;l Hammer when he worked 
                    for the Sanitary Division of the AMERICAN STANDARD group in Europe Micha&euml;l HAMMER 
                    was one of the 25 influential American personalities, according to the Time Magazine (1996) 
                    list established in 1996.  
                </p>
            </div> 
        }
        </article>
      </div>
    );
  }
}

export default MichaelHammer;