import React from "react";
import SVGIcon from "../svgIcons/icons";

const ProspectionCommerciale = () => {
    return <div className="prospection-commerciale" id="prospection-commerciale">
        <p className="title">
          <span>PROSPECTION COMMERCIALE</span>
        </p>
        <article>
          <div>
            <SVGIcon name="prospection" className="pros-icon" />
          </div>
         
          <div>
            <p>
              La prospection est un enjeu vital pour toutes les entreprises. La construction d'un fichier de <strong
              >
                clients potentiels qualifi&eacute;s
              </strong> sur lequel vous pourrez d&eacute;velopper vos actions commerciales est l'&eacute;l&eacute;ment central pour assurer une strat&eacute;gie de <strong
              >
                prospection efficace.
              </strong>
            </p>
            <p>
              Il faut cependant s'arr&ecirc;ter un moment sur quelques <strong
              >
                questions fondamentales
              </strong> pour initier cette strat&eacute;gie de conqu&ecirc;te:
            </p>
          </div>
        
            <ul>
              <li>
                <strong>Quels sont mes objectifs ?</strong>
              </li>
              <li>
                <strong>
                  Quels type de prospection dois-je construire ?
                </strong>
              </li>
              <li>
                <strong>Pour quels r&eacute;sultats ?</strong>
              </li>
              <li>
                <strong>
                  Comment vais-je mesurer mon efficience commerciale?
                </strong>
              </li>
              <li>
                <strong>Avec quels outils ?</strong>
              </li>
            </ul>
         
        </article>
      </div>;
}

export default ProspectionCommerciale;