import React, {Component} from "react";
import SVGIcon from "../svgIcons/icons";

class Atouts extends Component {
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
        return this.state.language === "fr" ? <div className="atouts" id="nos-atouts">
            <p className="title">
              <span>NOS ATOUTS</span>
            </p>
            <main>
              <div className="adv">
                <div>
                  <p>RAPIDIT&Eacute;</p>
                  <p>SIMPLICIT&Eacute;</p>
                  <p>EFFICACIT&Eacute;</p>
                </div>
              </div>
              <div className="procedure">
                    <SVGIcon name="liberte" width="130px" />
                    <p>
                        Apr&egrave;s une phase d'audit et de diagnostic, <span>
                            impliquant d&egrave;s l'amont vos &eacute;quipes,{" "}
                        </span>
                        nous cr&eacute;ons des <span>
                            &laquo; projets pilotes &raquo;
                        </span> pour mieux cerner les enjeux du projet global &agrave; mettre en oeuvre.
                    </p>
                    <p>
                        Ce mode de fonctionnement nous permet <span>
                            d'obtenir
                        </span> plus rapidement l'<span>
                            adh&eacute;sion de vos personnels
                        </span> quant aux demandes que nous allons initier. Cela nous permet aussi de <span>
                            confirmer la pertinence des choix
                        </span> &agrave; mettre en oeuvre.
                    </p>
              </div>
            </main>
          </div> : <div className="atouts" id="nos-atouts">
            <p className="title">
              <span>OUR STRENGTHS</span>
            </p>
            <main>
              <div className="adv">
                <div>
                  <p>TIMELINESS </p>
                  <p>SIMPLICITY</p>
                  <p>EFFICIENCY</p>
                </div>
              </div>
              <div className="procedure">
                    <SVGIcon name="liberte" width="130px" />
                    <p>
                        After an initial audit and diagnostic phase <span>
                        involving your teams right from the beginning,{" "}
                        </span>
                        we create <span>&laquo; pilot projects &raquo;</span> to better identify the main issues of the global project to be implemented.
                    </p>
                    <p>
                        This mode of operation allows us to
                        <span>
                         faster garner your staff support and creativeness
                        </span> to the requests we are going to initiate. It also allows us to <span>
                        confirm the relevance of changes
                        </span> to be made.
                    </p>
                    </div>
            </main>
          </div>;};
};

export default Atouts;
