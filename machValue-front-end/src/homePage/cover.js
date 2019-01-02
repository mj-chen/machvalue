import React, {Component} from "react";
import MaxCover from "../assets/img/Max_Pagniol_grand.jpg";
class Cover extends Component {
  constructor(props) {
    super(props);
    this.state = {
      language: this.props.language,
    };
  }

  componentDidUpdate(prevProps){
    if(this.props.language !== prevProps.language){
      this.setState({
        language:this.props.language,
      })
    }
  }
  render() {
    return this.state.language === "fr" ? <div>
        <main className="cover">
          <article>
            <h1>R&Eacute;V&Eacute;LATEUR DE VALEUR</h1>
            <p>
              Bon nombre de syst&egrave;mes d'entreprises sont fig&eacute;s ;
              <br /> manque d'ambition, manque de moyens, poids des habitudes.
            </p>
            <p>
              MachValue est un <strong>
                &laquo; R&eacute;v&eacute;lateur de valeur &raquo;
              </strong>
              .<br /> Nous vous faisons gagner en souffle pour am&eacute;liorer votre comp&eacute;titivit&eacute;, augmenter votre niveau de performance, booster vos projets.
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
            PARTAGE <br />
            DES &Eacute;QUIPES
          </p>
          <p>
            GAGNER <br />
            EN SOUFFLE
          </p>
        </div>
      </div> : <div>
        <main className="cover">
          <article>
            <h1>VALUE ENHANCER</h1>
            <p>
              A large number of business systems are frozen ;
              <br /> Lack of ambition, lack of resources, enduring habits.
            </p>
            <p>
              MachValue is a <strong>&laquo; value enhancer &raquo;</strong>
              .<br /> We help you gain momentum to improve your competitiveness, increase your level of performance and boost your projects.
            </p>
          </article>
          <img src={MaxCover} />
        </main>
        <div className="slogan">
          <p>
            ADAPTABILITY
            <br />
            &amp; ENDORSEMENT
          </p>
          <p>
            TEAM <br />
            SHARING
          </p>
          <p>
            GAIN <br />
            MOMENTUM
          </p>
        </div>
      </div>;
  }
}

export default Cover;