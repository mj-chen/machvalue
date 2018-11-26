import React from "react";
import michael from '../assets/img/MICHAEL_HAMMER.png';
import john from "../assets/img/JOHN_COSTANZA.png";


const Rencontres = () => {
  return <div className="rencontres" id="rencontres-fondatrices">
        <p className="title">
          <span>DES RENCONTRES FONDATRICES</span>
        </p>
        <main>
          <div>
            <p>
              <strong>Docteur Micha&euml;l HAMMER </strong> &agrave; Piscattaway (New Jersey, USA), ing&eacute;nieur et auteur de nombreux ouvrages de management, professeur &eacute;m&eacute;rite au Massachusettes insititue of Technology(MIT), et plus particuli&egrave;rement connu comme l'un des fondateurs de la th&eacute;orie du <strong>
               reengineering des process
              </strong> d'entreprise pour l'obtenir d'un meilleur business (BPR).
            </p>
            <img src={`/${michael}`} alt="micheal hammer" />
        <p className="name">MICHA&Euml;L HAMMER</p>
          </div>
            <div>
              <p>
                <strong>John COSTANZA &agrave; Denver</strong> (Colorado, USA), qui fonda en 1984, the John Costanza Institute of Technology dont la mission orginale &eacute;tait:" To provide the tools and techniques of <strong
                >Demand Flow Technology</strong> (DFT) to manufacturing corporations to lead their global competitiveness."
              </p>
              <p className="red-text">
                 Au travers de ses exp&eacute;riences et rencontres, <strong>
                  Max PAGNIOL
                  </strong> a pu donc ainsi se construire une expertise tant sur la n&eacute;cessaire observation de la <strong
                  >
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
            Aujourd'hui nous sommes &agrave; m&ecirc;me de vous aider &agrave; structurer vos organisations et m&eacute;thodes de management op&eacute;rationnel et <strong
            >
              favoriser le travail collaboratif{" "}
            </strong>
            en interne pour am&eacute;liorer vos r&eacute;sultats ainsi que l'ensemble de la gestion de vos projets de d&eacute;veloppement.
          </p>
          <p>
            Apr&egrave; audit et diagnostic, permettant de
            <strong>
              {" "}
              situer l'entreprise{" "}
            </strong> sur march&eacute;, nous identifierons avec vous <strong>
              dans le cadre de votre vision globale,{" "}
            </strong>
            les leviers d'am&eacute;lioration de vos performances, les inscrivant ainsi dans la dur&eacute;e.
          </p>
        </aside>
      </div>;
}

export default Rencontres;