import React from "react";
import SVGIcon from "../svgIcons/icons";
// import Background from "../assets/img/equip_background.jpg";

const Equipe = () => {
    return <div className="equipe" id="notre-&eacute;quipe">
        <p className="title">
          <span>NOTRE EQUIPE</span>
        </p>
        <main>
          <SVGIcon name="equipe" width="100px" />
          <div>
            <div>
              <p>
                Notre &eacute;quipe est constitu&eacute;e de prefessionnels
                pluridisciplinaires confirm&eacute;s issus des meilleures
                grandes &eacute;coles (HEC, ESSEC, CENTRALE, ENSAM...) et
                Universit&eacute;s.
              </p>
              <p>
                <span>V&eacute;ritables catalyseurs</span> de vos projets, ils sauront &ecirc;tre un centre de ressources et d'excellence par leur &eacute;coute, leur analyse <span
                >
                  mettant en prospective votre soci&eacute;t&eacute;
                </span> dans son environnement pour une meilleure performance.
              </p>
            </div>
            <div>
              <p>
                Nous nous investissons pour nos clients avec responsabilit&eacute; et engagement. Au-del&agrave; de notre m&eacute;thodologie, de nos outils et de la comp&eacute;tence de notre &eacute;quipe, c'est <span
                >
                  l'&eacute;tat d'esprit
                </span> qui nous anime, par des conseils et soutiens op&eacute;rationnels pragmatiques, que <span
                >
                  nous cr&eacute;ons la satisfaction de nos clients et de
                  leurs &eacute;quipes.
                </span>
              </p>
            </div>
          </div>
        </main>
      </div>;
};

export default Equipe;