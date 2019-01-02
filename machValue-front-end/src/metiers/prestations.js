import React, {Component} from "react";
import SVGIcon from "../svgIcons/icons";

class Prestations extends Component {
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
    return this.state.language === "fr" ? <div className="prestations">
        <p>
          <span>
            Fort de notre exp&eacute;rience <strong>B2B et B2B2C</strong> nous sommes
          </span> &agrave; m&ecirc;me de vous proposer plusieurs prestations :
        </p>
        <article>
          <div>
            <div className="etape">
              <p className="number">1</p> <p className="line" />
            </div>
            <div>
              <p>
                La <strong>connaissance de votre client&egrave;le</strong> : par contact t&eacute;l&eacute;phonique, nous
                <strong> qualifierons</strong> les diff&eacute;rents acteurs de votre environnement (orientation m&eacute;tier, potentiel avec r&eacute;partition familles d'achat, fournisseurs, zone de chalandise, niveau d'infrastructures internes, donn&eacute;es financi&egrave;res, etc...) afin de construire un
                <strong> fichier &laquo; vivant &raquo;</strong> permettant d'allouer les ressources de prospection l&agrave; o&ugrave; il le faut. Ainsi vous pourrez &agrave; partir de ces donn&eacute;es construire une <strong>
                  segmentation de client&egrave;le
                </strong> vous apportant une conduite plus efficiente de votre strat&eacute;gie de d&eacute;veloppement.
              </p>
            </div>
          </div>
          <div>
            <div className="etape">
              <p className="number">2</p> <p className="line" />
            </div>
            <div>
              <p>
                Nous pouvons &eacute;galement vous accompagner dans la <strong>
                  vente sp&eacute;cifique d'un produit
                </strong> (march&eacute; de niches entre autres) aupr&egrave;s de <strong>
                  segment de client&egrave;le test,
                </strong> validant ainsi la possibilit&eacute; d'un certain taux de transformation. Demain, vous pourrez exploiter de
                <strong> nouvelles opportunit&eacute;s</strong> de march&eacute;s &agrave; partir d'&eacute;l&eacute;ments concrets.
              </p>
            </div>
          </div>
          <div>
            <div className="etape">
              <p className="number">3</p> <p className="line" />
            </div>
            <div>
              <p>
                Conna&icirc;tre un client, c'est avant tout
                l'&eacute;couter, le comprendre, avoir une id&eacute;e
                claire de ses motivations et de ses attentes.
              </p>
              <p>
                Pour r&eacute;aliser ce type d'
                <strong>
                  investigation
                </strong>, nos &laquo; Datas &raquo; sont construites de telle mani&egrave;re qu'elles vous permettront une connaissance de 95% des acteurs d'un segment de march&eacute; tant d'un point de vue qualitatif que quantitatif.
              </p>
            </div>
          </div>
          <div>
            <div className="etape">
              <p className="number">4</p> <p className="line" />
            </div>
            <div>
              <p>
                Mettre &agrave; disposition un <strong>
                  outil de g&eacute;olocalisation
                </strong> de vos clients et prospects sur la base de vos secteurs de vente existants ou &agrave; venir.
              </p>
            </div>
          </div>
        </article>
      </div> : <div className="prestations">
        <p>
          <span>
            Based on our expertise in <strong>B2B</strong> and <strong>B2B2C</strong>, we are
          </span>
          capable of provide you with several services:
        </p>
        <article>
          <div>
            <div className="etape">
              <p className="number">1</p> <p className="line" />
            </div>
            <div>
              <p>
                <strong>Knowing your customers</strong> : By phone contact, we will <strong>
                  define </strong>
                 the various actors in your environment ( business orientation, potential based on purchasing categories, suppliers, level of internal infrastructures, financial data, etc... ) in order to build a <strong>
                  &laquo; live &raquo; list
                </strong>, allowing to allocate prospection resources to the right customers. These data will help you define <strong>
                  customer profiles
                </strong> what will enhance your efficiency and development strategy.
              </p>
            </div>
          </div>
          <div>
            <div className="etape">
              <p className="number">2</p> <p className="line" />
            </div>
            <div>
              <p>
                We can also assist you in the <strong>
                  specific sale of a product </strong>
                 ( niche markets for example ), by <strong>
                  testing a specific client segment
                </strong>, assessing the potential conversion rate ratio. You will be therefore ready to develop <strong>
                  new business opportunities
                </strong> based on concrete elements.
              </p>
            </div>
          </div>
          <div>
            <div className="etape">
              <p className="number">3</p> <p className="line" />
            </div>
            <div>
              <p>
                Knowing a client, is primarily to be able to listen to him
                and understand him and to have a clear idea of his
                motivations and expectations.
              </p>
              <p>
                To carry out this type of <strong>investigation</strong>, our &laquo; Data &raquo;are constructed in such a way that they will enable you to know about 95% of the players in a market segment from both a qualitative and a quantitative perspective.
              </p>
            </div>
          </div>
          <div>
            <div className="etape">
              <p className="number">4</p> <p className="line" />
            </div>
            <div>
              <p>
                Provide a <strong>geolocation tool</strong> of your customers and prospects based on your existing or future sales sectors.
              </p>
            </div>
          </div>
        </article>
      </div>;

  }
   
}

export default Prestations;