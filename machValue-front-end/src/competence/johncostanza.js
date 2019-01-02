import React, {Component} from "react";
import john from "../assets/img/JOHN_COSTANZA.png";

class JohnCostanza extends Component {

    constructor(props) {
        super(props);
        this.state = {
            language: this.props.language
        }
        this.article = React.createRef();
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
            this.article.current.classList.toggle('hidden');
        }
    }
    render(){
        return (
        <div id="costanza">
            <div onClick={() => this.open()}>
                <p className="title">
                    <span>JOHN COSTANZA</span>
                </p>
            </div>
            <article className='hidden' ref={this.article}>
                <div>
                    <img src={`/${john}`} alt="john costanza" />
                </div>
                {
                    this.state.language === 'fr'?
                    <div>
                        <p>
                            Am&eacute;ricain, John R. COSTANZA a fond&eacute; l'Institut John Costanza de Technologie en 1984 avec la mission de, &laquo; <strong>fournir les
                            outils et les techniques de gestion des flux de la demande</strong> (la DFT ou Demand Flow Technology) aux soci&eacute;t&eacute;s manufacturi&egrave;res pour
                            accro&icirc;tre leur comp&eacute;titivit&eacute; globale &raquo;.
                        </p>
                        <p>
                            Il est laur&eacute;at du prix Nobel pour les sciences &eacute;conomiques, r&eacute;cipiendaire du prix &laquo; Heroes of US Manufacturing &raquo; decern&eacute; par le magazine Fortune.
                            Max PAGNIOL travailla avec John COSTANZA &agrave; l'institut de Denver.
                        </p>
                    </div>:
                    <div>
                        <p>
                            The American John Costanza founded the John Costanza Institute of Technology in 1984 with the mission 
                            of &laquo; <strong>Providing demand flow technology (DFT) tools and techniques</strong> to manufacturing companies to increase 
                            their global competitiveness &raquo;.
                        </p>
                        <p>
                           He was nominated as a Nobel laureate for economics, recipient of Fortune magazine's &laquo; Heroes of US Manufacturing &raquo; award. 
                           Max PAGNIOL worked with John Costanza at the Denver Institute. 
                        </p>
                    </div>
                }
                {
                    this.state.language === 'fr'?
                    <div>
                        <p>
                            Cette technologie (<strong>Demand Flow Technology</strong>) est une strat&eacute;gie de d&eacute;finition et de d&eacute;ploiement des processus m&eacute;tier dans un flux de
                            production d'un produit en r&eacute;ponse &agrave; la demande client. DFT est bas&eacute;e sur un ensemble d'outils math&eacute;matiques qui sont utilis&eacute;s pour connecter les processus dans un flux continu afin de le lier
                            aux changements quotidiens de la demande.
                        </p>
                        <p>
                            La DFT est donc destin&eacute;e &agrave; fournir une alternative &agrave; la fabrication par programmation, qui utilisait principalement un plan de vente et des pr&eacute;visions pour d&eacute;terminer un calendrier de production; tout ceci amenant &agrave;
                            produire en &laquo; <strong>JUST IN TIME</strong> &raquo;.
                        </p>
                    </div>:
                    <div>
                        <p>
                            This technology (<strong>Demand Flow Technology</strong>) is a strategy for defining and deploying business processes in a flow, 
                            driven in response to customer demand.  DFT is based on a set of applied mathematical tools that are used to 
                            connect processes in a flow and link it to daily changes in demand.
                        </p>
                        <p>
                            DFT is intended to provide an alternative to schedule-push manufacturing which primarily uses a 
                            sales plan and forecast to determine a production schedule; all this leading to &laquo; <strong>JUST IN TIME</strong> &raquo; production.
                        </p>
                </div>
                }
            </article>
        </div>);
    }
    
}

export default JohnCostanza;