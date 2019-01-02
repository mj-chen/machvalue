import React, {Component} from "react";
import SVGIcon from "../svgIcons/icons";

class Mentoring extends Component {
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

  render() {
    return (
      this.state.language === "fr" ? 
      <div className="mentoring" id="mentoring">
        <p className="title">
          <span>MENTORING</span>
        </p>
        <article>
          <div>
            <SVGIcon name="timetomarket" />
            <p>
              Fort de nos exp&eacute;riences, nous pouvons mettre en place un{" "}
              <strong>accompagnement</strong> pour r&eacute;pondre &agrave; vos
              objectifs de d&eacute;veloppement personnel et/ou professionnel.
              Disponibles et accessibles, nous assurons le{" "}
              <strong>transfert d'expertise</strong>, le{" "}
              <strong>partage de savoir-&ecirc;tre</strong> et de{" "}
              <strong>savoir-faire</strong> dans un cadre de bienveillance et de
              confidentialit&eacute;.
            </p>
          </div>
          <div>
            <SVGIcon name="analyse" />
            <p>
              Notre d&eacute;marche Mentoring est reconnue pour sa
              capacit&eacute; d'
              <strong>
                &eacute;coute orient&eacute;e vers le v&eacute;cu de nos
                mentor&eacute;s,
              </strong>{" "}
              globalisant succ&egrave;s, &eacute;checs et difficult&eacute;s
              diverses afin que le processus puisse pleinement r&eacute;ussir.
              Nous fixerons ensemble des{" "}
              <strong>objectifs pr&eacute;cis dans un timing, </strong>
              tout en respectant notre <strong>cadre de valeurs.</strong>{" "}
              L'id&eacute;e &eacute;tant de <strong>vous rendre</strong>{" "}
              &agrave; terme <strong>autonome</strong> dans le cadre de vos
              responsabilit&eacute;s et ressources.
            </p>
          </div>
          <div>
            <SVGIcon name="audit" />
            <p>
              Au-del&agrave; du Mentoring individuel, nous pouvons intervenir
              dans l'<strong>accompagnement de startups</strong>, soit
              fran&ccedil;aises, soit &eacute;trang&egrave;res souhaitant
              comprendre les m&eacute;canismes fran&ccedil;ais ou
              europ&eacute;ens. Nous pouvons aussi vous accompagner lors de{" "}
              <strong>r&eacute;organisations strat&eacute;giques</strong> ou de{" "}
              <strong>croissances externes</strong> avec rachats d'entreprises
              qui impliqueront sans nul doute des am&eacute;nagements de
              culture. L'id&eacute;e est d'&eacute;clairer diff&eacute;rentes
              questions auxquelles vous &ecirc;tes confront&eacute;es. Nos
              travaux s'inscrivant avec vos &eacute;quipes sur le{" "}
              <strong>principe du volontariat,</strong> cela nous permet
              d'&eacute;tablir un{" "}
              <strong>environnement de confiance productif.</strong>
            </p>
          </div>
        </article>
      </div>
     : 
      <div className="mentoring" id="mentoring">
        <p className="title">
          <span>MENTORING</span>
        </p>
        <article>
          <div>
            <SVGIcon name="timetomarket" />
            <p>
                Based on our expertise, we can provide <strong>support</strong> to help you achieve your objectives 
              in terms of personal and/or professional development. We are available and accessible, 
              and we ensure the <strong>transfer of expertise</strong>, <strong>sharing of know-how</strong> and <strong>know-how-to-be</strong>, 
              in a caring and confidential manner.
            </p>
          </div>
          <div>
            <SVGIcon name="analyse" />
            <p>
              Our Mentoring approach is recognized for its ability to <strong>listen to the personal 
              experiences of our mentees</strong>, and to globalize their successes, failures 
                and various difficulties in order to convert them into a successful process. 
              Together, we will set up <strong>specific goals to be reached in a defined time frame</strong>, 
              and compliant with our <strong>core values</strong>. The idea is to help you <strong>become fully 
              self-reliant</strong> regarding your responsibilities and resources.
            </p>
          </div>
          <div>
            <SVGIcon name="audit" />
            <p>
              Besides individual Mentoring, we can also provide <strong>support to start up companies</strong>, 
              either French start-up companies or foreign start-up companies wishing to better 
              understand French and/or European business mechanisms. We can also assist you in 
              the <strong>strategic reorganization</strong> of companies including <strong>external growth</strong> with takeover 
              that undoubtedly will trigger cultural challenges to address. The idea is to clarify 
              various issues you may be facing. Our work with your teams is based on <strong>voluntary 
              participation</strong>, which allows us to develop a <strong>trustworthy productive environment</strong>.
            </p>
          </div>
        </article>
      </div>
    )
  }
}

export default Mentoring;