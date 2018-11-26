import React from "react";
import SVGIcon from "../svgIcons/icons";

const Methodologie = () => {
    return <div className="methodologie" id="m&eacute;thodologie">
        <div>
            <p className="title">
                <span>M&Eacute;THODOLOGIE</span>
            </p>
        </div>    
        <article>
            <div className="catalyseur">
                    <p>
                        <strong>V&eacute;ritable catalyseur,</strong> sortant du simple r&ocirc;le d'animateur, nous mettons en adh&eacute;sion vos
                        &eacute;quipes pour &ecirc;tre force de proposition partag&eacute;e r&eacute;pondant ainsi pleinement <strong>&agrave; notre mission de &laquo; r&eacute;v&eacute;lateur de valeur &raquo;.</strong>
                    </p>
            </div>
            <div>
                <SVGIcon name="methodo" />
                <h2>M&eacute;thodologie</h2>
                <p>
                    Nous sommes convaincus que bon nombre de richesses restent &agrave; l'&eacute;tat latent au sein entreprises. Pris par le quotidien, les uns et les autres 
                    manquent d'&eacute;coute et &agrave; ce titre ne fonctionnent pas suffisamment en &eacute;quipe pour la recherche de solutions efficaces pour l'entreprise.
                </p>
                <p>
                    Notre m&eacute;thodologie consiste donc dans un premier temps <strong>&agrave; remettre du liant pour initier les remises en cause.</strong>
                </p>
            </div>
            <div>
                <h2>Supports &amp; outils</h2>
                <p>
                    Fort de notre cursus, nos consultants et nous-m&ecirc;me traduisons vos objectifs via des supports et outils ayant d&eacute;j&agrave; faits leurs preuves, 
                    permettant de <strong>gagner en temps et efficacit&eacute;.</strong>
                </p>
            </div>
        </article>
    </div>;
}

export default Methodologie;