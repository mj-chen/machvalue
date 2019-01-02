import React,{Component} from "react";
import SVGIcon from "../svgIcons/icons";

class Competitivite extends Component{
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

   open = (div) => {
        if (window.innerWidth < 768) {
            div.querySelector('div').classList.toggle('hidden');
        }
    }
    
    render(){
        return this.state.language === "fr" ? <div className="competitivite" id="comp&eacute;titivit&eacute;-et-vitesse-de-d&eacute;veloppement">
            <p className="title">
              <span>
                COMP&Eacute;TITIVIT&Eacute; ET VITESSE DE
                D&Eacute;VELOPPEMENT
              </span>
            </p>
            <article>
              <div onClick={e => this.open(e.currentTarget)}>
                <SVGIcon name="position" />
                <h2>Positionnement strat&eacute;gique</h2>
                <div className="hidden">
                  <p>
                    Trop souvent les entreprises ne prennent pas le temps d'analyser leur <strong>
                      position strat&eacute;gique{" "}
                    </strong>
                    dans leurs march&eacute;s.
                  </p>
                  <p>
                    Sans vision claire des situations nouvelles, et sans avoir pris le recul n&eacute;cessaire pour <strong>
                      mieux adapter son plan{" "}
                    </strong>
                    op&eacute;rationnel, les allocations de ressources ne seront pas optimis&eacute;es et l'efficience globale en sera d'autant diminu&eacute;e.
                  </p>
                </div>
              </div>
              <div onClick={e => this.open(e.currentTarget)}>
                <SVGIcon name="audit" />
                <h2>Audit de performance</h2>
                <div className="hidden">
                  <p>
                    Il est important de <strong>
                      mesurer sa performance en regard des tendances de
                      march&eacute;,
                    </strong> de l'<strong>
                      environnement concurrentiel,
                    </strong> de ses propres objectifs et ainsi pourvoir <span>
                      se situer le plus objectivement possible{" "}
                    </span>
                    pour infl&eacute;chir ou ajuster les diff&eacute;rents plans d'actions (commerciaux, industriels, etc...). Nous prenons le temps de construire avec vous <strong>
                      les grilles de lecture
                    </strong> (dashboard) qui vous permettront de <strong>
                      conduire efficacement la r&eacute;alisation de
                      votre plan.
                    </strong>
                  </p>
                </div>
              </div>
              <div onClick={e => this.open(e.currentTarget)}>
                <SVGIcon name="analyse" />
                <h2>Analyse de la valeur</h2>
                <div className="hidden">
                  <p>
                    Trouver de nouveaux produits, de nouvelles solutions n'est pas &eacute;vident et l'entreprise peut chercher longtemps sans succ&egrave;s. Il faut donc pour rester comp&eacute;titif, <strong>
                      compenser et toujours r&eacute;duire les
                      co&ucirc;ts.{" "}
                    </strong>
                    Ce qui compte c'est la notion de <strong>
                      moindre co&ucirc;t global{" "}
                    </strong>permettant de r&eacute;pondre &agrave; la solution voulue. <strong>
                      L'analyse de la valeur{" "}
                    </strong>est la m&eacute;thode la plus rationnelle <strong>
                      d'optimisation du proc&eacute;d&eacute; de
                      production d'un produit{" "}
                    </strong>s'inscrivant globalement dans l'ing&eacute;nierie de celui-ci (re-conception, industrialisation et autres) et ce, afin d'<strong>
                      obtenir ce produit au plus juste co&ucirc;t.
                    </strong>
                  </p>
                </div>
              </div>
              <div onClick={e => this.open(e.currentTarget)}>
                <SVGIcon name="timetomarket" />
                <h2>Time to Market</h2>
                <div className="hidden">
                  <p>
                    Non seulement l'entreprise se doit de <strong>
                      sortir des projets
                    </strong> mais elle se doit aussi de le faire <strong>
                      &laquo; au bon moment, juste &agrave; temps
                      &raquo;
                    </strong> en <strong>
                      hi&eacute;rarchisant les priorit&eacute;s,
                    </strong> avec l<strong>
                      'adh&eacute;sion de tous.{" "}
                    </strong>
                    In&eacute;vitablement certains sujets passeront apr&egrave;s d'autres et les frustrations risquent de na&icirc;tre, d'o&ugrave; l'imp&eacute;rieuse n&eacute;cessit&eacute; de <strong>
                      {" "}
                      &laquo; faire comprendre le pourquoi &raquo;.
                    </strong> Enfin, r&eacute;pondre aux imp&eacute;ratifs de timing, demande une transversalit&eacute; entre les process afin d'&eacute;viter des oublis. Une m&eacute;thodologie <strong>
                      &laquo; Time to Market &raquo;
                    </strong> &eacute;vite ces d&eacute;sordres, f&eacute;d&egrave;re vos &eacute;quipes, vous fait gagner en flexibilit&eacute; et en adh&eacute;sion, vous assurant ainsi r&eacute;activit&eacute; et efficience.
                  </p>
                </div>
              </div>
            </article>
          </div> : <div className="competitivite" id="comp&eacute;titivit&eacute;-et-vitesse-de-d&eacute;veloppement">
            <p className="title">
              <span>Competitiveness and development pace</span>
            </p>
            <article>
              <div onClick={e => this.open(e.currentTarget)}>
                <SVGIcon name="position" />
                <h2>Strategic positioning</h2>
                <div className="hidden">
                  <p>
                    All too often, companies don’t take the time to
                    analyze the <strong>strategic position</strong> they occupy on their
                    respective markets.
                  </p>
                  <p>
                    Without a clear vision of new situations and without
                    having taken the necessary time to <strong>better adapt
                    their operational plan</strong>, they will not be in a
                    position to optimize their resource allocation and
                    therefore their global efficiency will be impaired.
                  </p>
                </div>
              </div>
              <div onClick={e => this.open(e.currentTarget)}>
                <SVGIcon name="audit" />
                <h2>Performance Audit</h2>
                <div className="hidden">
                  <p>
                    It is important to <strong>measure one's performances versus
                    market trends</strong> and <strong>competitive environment</strong>, without
                    forgetting one's own objectives. This will allow you
                    to be in a better position to adjust the various
                    action plans (commercial, industrial, etc.) and to
                    conduct in an objective manner the completion of
                    your plan. We will take the necessary time to build
                    with you the <strong>dashboard</strong> to <strong>successfully complete the
                    realization of your plans</strong>.
                  </p>
                </div>
              </div>
              <div onClick={e => this.open(e.currentTarget)}>
                <SVGIcon name="analyse" />
                <h2>Value Analysis</h2>
                <div className="hidden">
                  <p>
                    Finding new products and new solutions is not an
                    easy task and companies’ efforts may prove to be
                    unsuccessful on the long run. The two key factors to
                    remain competitive are <strong>compensation and cost
                    reductions</strong>. What is paramount is to <strong>reduce global
                    costs</strong> in order to be in line with the intended goal.
                    <strong> Value analysis</strong> is the most rational method to
                    <strong> optimize the production process</strong> in keeping with the
                    product engineering processes (re-design,
                    industrialization and others), in order to <strong>get this
                    product at the right cost</strong>.
                  </p>
                </div>
              </div>
              <div onClick={e => this.open(e.currentTarget)}>
                <SVGIcon name="timetomarket" />
                <h2>Time to Market</h2>
                <div className="hidden">
                  <p>
                    Companies have to <strong>develop new projects</strong> but they also
                    have to do so <strong>&laquo; at the right time and just in time &raquo; </strong>
                    by <strong>assigning priorities</strong>, with <strong>the support of all
                    teams</strong>. Inevitably, some projects will be developed
                    after others and frustrations may arise, hence the
                    imperative need to <strong>&laquo; make people understand why &raquo;</strong>.
                  </p>
                  <p>
                    And finally, to address time constraints requires a
                    transversal approach between processes in order to
                    avoid oversights. A <strong>&laquo; Time to Market &raquo;</strong> methodology
                    avoids these pitfalls, while federating your teams
                    and increasing flexibility and support, thus
                    ensuring responsiveness and efficiency.
                  </p>
                </div>
              </div>
            </article>
          </div>;
    }
}

export default Competitivite;