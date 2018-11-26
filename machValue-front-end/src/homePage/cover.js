import React from "react";
import MaxCover from "../assets/img/Max_Pagniol_grand.jpg";
const Cover = () => {
    return <div>
        <main className="cover">
          <article>
            <h1>R&Eacute;V&Eacute;LATEUR DE VALEUR</h1>
            <p>
              Bon nombre de syst&egrave;mes d'entreprises sont fig&eacute;; manque d'ambition, manque de moyens, poids des habitudes.
            </p>
            <p>
              MachValue est un<strong>&laquo; R&eacute;v&eacute;lateur de valeur &raquo;</strong>. Nous vous faisons gagner en souffle pour am&eacute;liorer votre comp&eacute;titivit&eacute;, augmenter votre niveau de performance, booster vos projets.
            </p>
          </article>
          <img src={MaxCover} />
        </main>
        <div className="slogan">
          <p>
            ADAPTABILIT&Eacute;
            <br />
            &amp; ADH&Eacute;SION
          </p>
          <p>
            PARTAGER <br />
            DES &Eacute;QUIPES
          </p>
          <p>
            GAGNER <br />
            EN SOUFFLE
          </p>
        </div>
      </div>;
}

export default Cover;