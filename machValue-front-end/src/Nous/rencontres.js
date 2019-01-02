import React, {Component} from "react";
import michael from '../assets/img/MICHAEL_HAMMER.png';
import john from "../assets/img/JOHN_COSTANZA.png";


class Rencontres extends Component {
  constructor(props) {
    super(props);
    this.state = {
      language: this.props.language
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.language !== prevProps.language) {
      this.setState({
        language: this.props.language
      });
    }
  }
  render(){
    return this.state.language === "fr" ? <div className="rencontres" id="rencontres-fondatrices">
        <p className="title">
          <span>DES RENCONTRES FONDATRICES</span>
        </p>
        <main>
          <div>
            <p>
              <strong>Docteur Micha&euml;l HAMMER </strong> &agrave; Piscattaway (New Jersey, USA), ing&eacute;nieur et auteur de nombreux ouvrages de management, professeur &eacute;m&eacute;rite au Massachusetts Institute of Technology (MIT), et plus particuli&egrave;rement connu comme l'un des fondateurs de la th&eacute;orie du <strong>
                reengineering des process
              </strong> d'entreprise pour l'obtention d'un meilleur business (BPR).
            </p>
            <img src={`/${michael}`} alt="micheal hammer" />
            <p className="name">MICHA&Euml;L HAMMER</p>
          </div>
          <div>
            <p>
              <strong>John COSTANZA &agrave; Denver</strong> (Colorado, USA), qui fonda en 1984, the John Costanza Institute of Technology dont la mission originale &eacute;tait: " To provide the tools and techniques of <strong>
                Demand Flow Technology
              </strong> (DFT) to manufacturing corporations to lead their global competitiveness."
            </p>
            <p className="red-text">
              Au travers de ses exp&eacute;riences et rencontres, <strong>
                Max PAGNIOL
              </strong> a pu donc ainsi se construire une expertise tant sur la n&eacute;cessaire observation de la <strong>
                segmentation des march&eacute;s
              </strong>, que sur <strong>
                la remise en cause permanente des organisations
              </strong> face &agrave; l'&eacute;volution de ces derniers.
            </p>
            <img src={`/${john}`} alt="John Costanza" />
            <p className="name">JOHN COSTANZA</p>
          </div>
        </main>
        <aside>
          <p>
            Aujourd'hui nous sommes &agrave; m&ecirc;me de vous aider &agrave; structurer vos organisations et m&eacute;thodes de management op&eacute;rationnel et <strong>
              favoriser le travail collaboratif{" "}
            </strong>
            en interne pour am&eacute;liorer vos r&eacute;sultats ainsi que l'ensemble de la gestion de vos projets de d&eacute;veloppement.
          </p>
          <p>
            Apr&egrave;s audit et diagnostic, permettant de
            <strong>
              {" "}
              situer l'entreprise{" "}
            </strong> sur ses march&eacute;s, nous identifierons avec vous <strong>
              dans le cadre de votre vision globale,{" "}
            </strong>
            les leviers d'am&eacute;lioration de vos performances, les inscrivant ainsi dans la dur&eacute;e.
          </p>
        </aside>
      </div> : <div className="rencontres" id="rencontres-fondatrices">
        <p className="title">
          <span>MEANINGFUL ENCOUNTERS</span>
        </p>
        <main>
          <div>
            <p>
              <strong>Doctor Micha&euml;l HAMMER </strong>in Piscattaway (New Jersey, USA), engineer and author of several management books, Professor emeritus at the Institute of Technology (MIT), and particularly well known as one of the founders of the theory of business
              <strong> process re-engineering</strong> designed to help organizations achieve better performance (BPR).
            </p>
            <img src={`/${michael}`} alt="micheal hammer" />
            <p className="name">MICHA&Euml;L HAMMER</p>
          </div>
          <div>
            <p>
              <strong>John COSTANZA in Denver</strong> (Colorado, USA), who founded the John Costanza Institute of Technology in 1984, whose original mission was: " To provide the tools and techniques of
              <strong> Demand Flow Technology</strong> (DFT) to manufacturing corporations to lead their global competitiveness."
            </p>
            <p className="red-text">
              Through his experiences and encounters, <strong>
                Max PAGNIOL
              </strong> was able to build an expertise both on the necessary observation of <strong>
                market segmentation
              </strong>, and on the <strong>
                continuous reappraisal of organizations
              </strong> confronted to the rapid evolution of markets.
            </p>
            <img src={`/${john}`} alt="John Costanza" />
            <p className="name">JOHN COSTANZA</p>
          </div>
        </main>
        <aside>
          <p>
            Today, we have the expertise to help you structure your organizations and operations management methods and to <strong>
              enhance in-house teamwork </strong>
            in order to generate better results and an optimized global management of your development projects.
          </p>
          <p>
            After a first audit and diagnosis phase, to find out
            <strong>
              {" "}
              how your company stands in relation to{" "}
            </strong> its markets, we will define with your teams, and <strong>
              in accordance with your global vision, </strong>
            the levers for improving your overall performances, and thus on a long term basis.
          </p>
        </aside>
      </div>;};
}

export default Rencontres;