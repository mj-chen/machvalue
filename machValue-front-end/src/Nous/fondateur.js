import React from "react";
import max from "../assets/img/MaxPagniol.jpg";

const Fondateur = () => {
  return <div className="fondateur" id="fondateur">
      <p className="title">
        <span>FONDATEUR</span>
      </p>
      <main>
        <img src={`/${max}`} />
        <div>
          <p>
            Max PAGNIOL, Ing&eacute;nieur ENSAIT,Grande &Eacute;cole base ENSAM et Master-DESS en marketing et finance a fait l'essentiel de sa carri&eacute;re dans des goupes internationaux (
            <span> Akzo-Nobel, Rh&ocirc;ne-Poulenc, American Standard, Sfpi, </span>
            ect...).
          </p>
          <p>
            Il a exerc&eacute; tout les m&eacute;tiers structurant l'approche
            des march&eacute;s et le management des &eacute;quipes: vendeur
            terrain, chef des ventes, directeur commercial et marketing,
            directeur industriel, directeur g&eacute;n&eacute;ral, directeur
            de division, CEO,...
          </p>
        </div>
      </main>
      <aside>
        <p>
          &laquo; Aujourd'hui nous sommes <br /> &agrave; m&ecirc;me de vous aider &agrave; structurer vos m&eacute;thodes de management op&eacute;rational &raquo;
        </p>
      </aside>
    </div>;
};

export default Fondateur;
