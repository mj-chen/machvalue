import React from "react";
import SVGIcon from "../svgIcons/icons";

const Rencontres = () => {
    return <div className="rencontres-important" id="rencontres">
        <div>
          <p className="title">
            <span>RENCONTRES</span>
          </p>
        </div>
        <article>
          <div>
            <h2>Qui sont-ils ?</h2>
            <p>
              Pour Max PAGNIOL certaines rencontres ont marqu&eacute; son
              parcours.
            </p>
            <p>
              Elles lui ont permis non seulement de <strong>
                structurer son approche des march&eacute;s
              </strong> et des probl&egrave;ms auxquel il fault faire face, mais aussi de prendre conscience que le champ soci&eacute;tal de l'entreprise s'inscrit toujours dans <strong
              >
                {" "}
                le champ soci&eacute;tal.
              </strong>
            </p>
          </div>

          <ul>
                <li><SVGIcon name="portrait"/><a href="#hammer"><strong>MICHA&Euml;L HAMMER</strong></a></li>
                <li><SVGIcon name="portrait" /><a href="#costanza"><strong>JOHN COSTANZA</strong></a></li>
                <li><SVGIcon name="portrait" /><a href="#swiners"><strong>JEAN-LOUIS SWINERS</strong></a></li>
                <li><SVGIcon name="portrait" /><a href="#bouayad"><strong>ANIS BOUAYAD</strong></a></li>
          </ul>
        </article>
      </div>;
}

export default Rencontres;