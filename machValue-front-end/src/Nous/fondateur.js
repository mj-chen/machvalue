import React, {Component} from "react";
import max from "../assets/img/MaxPagniol.jpg";

class Fondateur extends Component {
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
    return this.state.language === "fr" ? <div className="fondateur" id="fondateur">
        <p className="title">
          <span>FONDATEUR</span>
        </p>
        <main>
          <img src={`/${max}`} />
          <div>
            <p>
              Max PAGNIOL, Ing&eacute;nieur ENSAIT,Grande &Eacute;cole base ENSAM et Master-DESS en marketing et finance a fait l'essentiel de sa carri&eacute;re dans des goupes internationaux (<span>
                {" "}
                Akzo-Nobel, Rh&ocirc;ne-Poulenc, American Standard, Sfpi,{" "}
              </span>
              etc...).
            </p>
            <p>
              Il a exerc&eacute; tous les m&eacute;tiers structurant
              l'approche des march&eacute;s et le management des
              &eacute;quipes: vendeur terrain, chef des ventes, directeur
              commercial et marketing, directeur industriel, directeur
              g&eacute;n&eacute;ral, directeur de division, CEO,...
            </p>
          </div>
        </main>
        <aside>
          <p>
            &laquo; Aujourd'hui nous sommes &agrave; m&ecirc;me de vous
            aider &agrave; structurer vos m&eacute;thodes de management
            op&eacute;rationnel. &raquo;
          </p>
        </aside>
      </div> : <div className="fondateur" id="fondateur">
        <p className="title">
          <span>FOUNDER</span>
        </p>
        <main>
          <img src={`/${max}`} />
          <div>
            <p>
              Max Pagniol, ENSAIT engineer, Grande Ecole ENSAM (Graduate school of engineering) Masters degree in marketing and engineering. He has spent most of his professional career in international groups(
              <span>
                {" "}
                Akzo-Nobel, Rh&ocirc;ne-Poulenc, American Standard, Sfpi,{" "}
              </span>
              etc...).
            </p>
            <p>
              He has held several positions in team management and
              elaboration of new market approaches: field salesman, Head of
              Sales, marketing and sales manager, industrial manager, Chief
              Executive, Division manager, CEO...
            </p>
          </div>
        </main>
        <aside>
          <p>
            &laquo; Today, we have the expertise to help you structure your
            operations management methods. &raquo;
          </p>
        </aside>
      </div>;
  }
};

export default Fondateur;
