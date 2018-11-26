import React from "react";
import SVGIcon from "../svgIcons/icons";

const Mentoring = () => {
    return <div className="mentoring" id="mentoring">
        <p className="title">
          <span>MENTORING</span>
        </p>
        <article>
          <div>
            <SVGIcon name="timetomarket" />
            <p>
              Fort de nos exp&eacute;riences, nous pouvons mettre en place un <strong>accompagnement</strong> pour r&eacute;pondre &agrave; vos objectifs de 
              d&eacute;veloppement personnel et/ou professionnel. Disponible et accessible, nous assurons le <strong>transfer d'expertise</strong>, le <strong>partage de savoir &ecirc;tre</strong> et de <strong>savoir-faire</strong> dans 
              un cadre de bienveillance et de confidentialit&eacute;.
            </p>
          </div>
          <div>
            <SVGIcon name="analyse" />
            <p>
              Notre d&eacute;marche Mentoring est reconnue pour sa capacit&eacute; d'<strong>&eacute;coute orient&eacute;e vers le v&eacute;cu de nos mentor&eacute;s,</strong> globalisant 
              succ&egrave;s, &eacute;checs et difficult&eacute;s diverses afin que le processus puisse pleinement r&eacute;ussir. Nous fixerons ensemble des <strong>objectifs pr&eacute;cis dans un timing, </strong> 
               tout en respectant notre <strong>cadre de valeurs.</strong> L'id&eacute;e &eacute;tant de <strong>vous rendre</strong> &agrave; terme <strong>autonome</strong> dans le cadre de vos responsabilit&eacute;s et 
              ressources.
            </p>
          </div>
          <div>
            <SVGIcon name="audit" />
            <p>
                Au-del&agrave; du Mentoring individuel, nous pouvons intervenir dans l'<strong>accompagnement de start up</strong>, soit fran&ccedil;aises, 
                soit &eacute;trang&egrave;res souhaitant comprendre les m&eacute;canisemes fran&ccedil;ais et/ou europ&eacute;ens. Nous pouvons aussi vous accompagner 
                lors de <strong>r&eacute;organisations strat&eacute;giques</strong> ou de <strong>croissances externes</strong> avec rachats d'entreprises qui impliqueront sans nul doute 
                des am&eacute;nagements de culture. L'id&eacute;e est d'&eacute;clairer diff&eacute;rentes questions auxquelles vous &ecirc;tes confront&eacute;s. 
                Nos travaux s'inscrivant avec vos &eacute;quipes sur le <strong>principe du volontariat,</strong> cela nous permet d'&eacute;tablir un <strong>environnement 
                de confiance productif.</strong>
            </p>
          </div>
        </article>
      </div>;
}

export default Mentoring;