import React, {Component} from "react";
import SVGIcon from "../svgIcons/icons";

class ProspectionCommerciale extends Component {
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
    render(){
      return this.state.language === "fr" ? 
        <div className="prospection-commerciale" id="prospection-commerciale">
          <p className="title">
            <span>PROSPECTION COMMERCIALE</span>
          </p>
          <article>
            <div>
              <SVGIcon name="prospection" className="pros-icon" />
            </div>
            <div>
              <p>
                La prospection est un enjeu vital pour toutes les entreprises. La construction d'un fichier de <strong>
                  clients potentiels qualifi&eacute;s
                </strong> sur lequel vous pourrez d&eacute;velopper vos actions commerciales est l'&eacute;l&eacute;ment central pour assurer une strat&eacute;gie de <strong>
                  prospection efficace.
                </strong>
              </p>
              <p>
                Il faut cependant s'arr&ecirc;ter un moment sur quelques <strong>
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
                  Comment vais-je mesurer mon efficience commerciale ?
                </strong>
              </li>
              <li>
                <strong>Avec quels outils ?</strong>
              </li>
            </ul>
          </article>
        </div>:
        <div className="prospection-commerciale" id="prospection-commerciale">
          <p className="title">
            <span>PROSPECTING</span>
          </p>
          <article>
            <div>
              <SVGIcon name="prospection" className="pros-icon" />
            </div>
            <div>
              <p>
                Prospecting is a key challenge for all organizations.
                Building a list of <strong>qualified potential clients</strong> that you
                will use to develop your marketing actions is a key
                element to ensure an <strong>effective prospecting</strong> strategy.
              </p>
              <p>
                In order to initiate this conquest strategy, you must
                first address <strong>fundamental issues</strong>:
              </p>
            </div>
            <ul>
              <li>
                <strong>What are my objective?</strong>
              </li>
              <li>
                <strong>
                  What type of prospection should I elaborate?
                </strong>
              </li>
              <li>
                <strong>What are my expected results?</strong>
              </li>
              <li>
                <strong>
                  How am I going to assess my commercial efficiency?
                </strong>
              </li>
              <li>
                <strong>With what tools?</strong>
              </li>
            </ul>
          </article>
        </div>
    }
}

export default ProspectionCommerciale;