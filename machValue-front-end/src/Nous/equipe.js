import React, {Component} from "react";
import SVGIcon from "../svgIcons/icons";


class Equipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      language: this.props.language,
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.language !== prevProps.language) {
      this.setState({
        language: this.props.language,
      })
    }
  }

  render(){
    return this.state.language === "fr" ? <div className="equipe" id="notre-&eacute;quipe">
        <p className="title">
          <span>NOTRE &Eacute;QUIPE</span>
        </p>
        <main>
          <SVGIcon name="equipe" width="100px" />
          <div>
            <div>
              <p>
                Notre &eacute;quipe est constitu&eacute;e de professionnels
                pluridisciplinaires confirm&eacute;s issus des meilleures
                grandes &eacute;coles (HEC, ESSEC, CENTRALE, ENSAM...) et
                Universit&eacute;s.
              </p>
              <p>
                <span>V&eacute;ritables catalyseurs</span> de vos projets, ils sauront &ecirc;tre un centre de ressources et d'excellence par leur &eacute;coute, leur analyse <span>
                  mettant en prospective votre soci&eacute;t&eacute;
                </span> dans son environnement pour une meilleure performance.
              </p>
            </div>
            <div>
              <p>
                Nous nous investissons pour nos clients avec responsabilit&eacute; et engagement. Au-del&agrave; de notre m&eacute;thodologie, de nos outils et de la comp&eacute;tence de notre &eacute;quipe, c'est <span>
                  l'&eacute;tat d'esprit
                </span> qui nous anime, par des conseils et soutiens op&eacute;rationnels pragmatiques, que <span>
                  nous cr&eacute;ons la satisfaction de nos clients et de
                  leurs &eacute;quipes.
                </span>
              </p>
            </div>
          </div>
        </main>
      </div> : <div className="equipe" id="notre-&eacute;quipe">
        <p className="title">
          <span>OUR TEAM</span>
        </p>
        <main>
          <SVGIcon name="equipe" width="100px" />
          <div>
            <div>
              <p>
                We are a multidisciplinary team, made up of professors and
                experienced professionals hailing from the best Grandes
                Ecoles (HEC, ESSEC, CENTRALE, ENSAM…) and universities.
              </p>
              <p>
                <span>Serving as catalysts</span> for your projects, we act as a best-in-class resource center, backed by our quality listening and acute analysis and based on <span>
                  conducting prospective surveys of your company{" "}
                </span> to achieve better performances.
              </p>
            </div>
            <div>
              <p>
                We are fully committed to the success of your clients, and
                we engaged our complete and responsible expertise to achieve
                it. Beyond our methodology, tools and expertise, what drives
                us is <span>our ability</span> to provide pragmatic and operational
                support to our clients, generating overall approval, through
                our meaningful and careful approach.
              </p>
            </div>
          </div>
        </main>
      </div>;
  }
};

export default Equipe;