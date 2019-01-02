import React, {Component} from "react";
import SVGIcon from "../svgIcons/icons";

class Rencontres extends Component {

  constructor(props) {
    super(props);
    this.state = {
      language: this.props.language
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
     return (
       this.state.language === 'fr'?
      <div className="rencontres-important" id="rencontres">
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
              </strong> et des probl&egrave;mes auxquels il faut faire face, mais aussi de prendre conscience que le fonctionnement de l'entreprise s'inscrit toujours dans <strong
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
      </div>:
      <div className="rencontres-important" id="rencontres">
        <div>
          <p className="title">
            <span>MEANINGFULL ENCOUNTERS</span>
          </p>
        </div>
        <article>
          <div>
            <h2>Who are they ?</h2>
            <p>
              Some of the people Max Pagniol has met played a significant role in his career.
            </p>
            <p>
              They have allowed him not only <strong>to structure his approach of markets</strong> and challenges to face, 
              but also to acknowledge the fact that organizations always fall within <strong>the scope of 
              the social sphere</strong>. 
            </p>
          </div>
          <ul>
                <li><SVGIcon name="portrait"/><a href="#hammer"><strong>MICHA&Euml;L HAMMER</strong></a></li>
                <li><SVGIcon name="portrait" /><a href="#costanza"><strong>JOHN COSTANZA</strong></a></li>
                <li><SVGIcon name="portrait" /><a href="#swiners"><strong>JEAN-LOUIS SWINERS</strong></a></li>
                <li><SVGIcon name="portrait" /><a href="#bouayad"><strong>ANIS BOUAYAD</strong></a></li>
          </ul>
        </article>
      </div>
    )
  }
}

export default Rencontres;