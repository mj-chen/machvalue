import React from "react";
import SVGIcon from "../svgIcons/icons";

const Valeur = () => {
  return <div className="valeur" id="nos-valeurs">
        <p className="title">
          <span>NOS VALEURS</span>
        </p>
        <main>
          <div>
            <p>Plusieur maximes nous animent:</p>
            <SVGIcon name="valeur" width="66px" />
          </div>
          <ul>
            <li>
              <span>1.</span>
              <p>
                <span>&laquo;</span> Quel que soit ton conseil, qu'il soit bref
                <span>&raquo;</span>. <span className="master">
                  HORACE
                </span>
              </p>
            </li>
            <li>
              <span>2.</span>
              <p>
                <span>&laquo;</span> Je ne cherche pas &agrave; conna&icirc;tre les r&eacute;ponse, je cherche &agrave; comprendre les questions
                <span>&raquo;</span>. <span className="master">
                  CONFUCIUS.
                </span>
              </p>
            </li>
            <li>
              <span>3.</span>
              <p>
                <span>&laquo;</span> N'imitez rien, ni personne. Un lion qui imite un autre lion devient un signe
                <span>&raquo;</span>. <span className="master">
                  VICTOR HUGO.
                </span>
              </p>
            </li>
            <li>
              <span>4.</span>
              <p>
                <span>&laquo;</span> Commencez par changer en vous ce que vous voulez changer autour de vous
                <span>&raquo;</span>. <span className="master">
                  GANDHI.
                </span>
              </p>
            </li>
            <li>
              <span>5.</span>
              <p>
                <span>&laquo;</span> La r&eacute;sistance au changement n'est que le refus de la croissance
                <span>&raquo;</span>. <span className="master">
                  ALEXANDER RUPERTI.
                </span>
              </p>
            </li>
            <li>
              <span>6.</span>
              <p>
                <span>&laquo;</span> On peut toujours plus que ce que l'on croit pouvoir
                <span>&raquo;</span>. <span className="master">
                  JOSEPH KESSEL.
                </span>
              </p>
            </li>
            <li>
              <span>7.</span>
              <p>
                <span>&laquo;</span> C'est ce que nous pensons d&eacute;j&agrave; conna&icirc;tre qui nous empeche souvent d'apprendre
                <span>&raquo;</span>. <span className="master">
                  GASTON BACHELARD.
                </span>
              </p>
            </li>
            <li>
              <span>8.</span>
              <p>
                <span>&laquo;</span> Choisir, c'est renoncer
                <span>
                  &raquo;
                </span>. <span className="master">ANDR&Eacute; GIDE</span>
              </p>
            </li>
          </ul>
        </main>
      </div>;
};

export default Valeur;
