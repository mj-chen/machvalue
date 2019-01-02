import React,{Component} from "react";
import Swinners from "../assets/img/Swinners.png";

class Swiners extends Component {

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
        return <div id="swiners">
            <div onClick={() => this.open()}>
              <p className="title">
                <span>JEAN-LOUIS SWINERS</span>
              </p>
            </div>
            <article className="hidden" ref={this.article}>
              <div>
                <img src={`/${Swinners}`} alt="Jean Louis Swinners" />
              </div>
              {this.state.language === "fr" ? <div>
                  <p>
                    Max PAGNIOL a rencontr&eacute; Jean-Louis SWINERS
                    &agrave; l'occasion de s&eacute;minaires EBS et CRC
                    &agrave; HEC Paris.
                  </p>
                  <p>
                    Jean-Louis SWINERS est un photographe fran&ccedil;ais, qui a d&eacute;montr&eacute; depuis de nombreuses ann&eacute;es sa capacit&eacute; &agrave; <strong>
                      comprendre les choses de ce monde
                    </strong> et &agrave; ce titre d&eacute;montr&eacute; les multiples facettes de son talent. Il a d&eacute;j&agrave; eu le Prix Ni&egrave;pce en 62. Apr&egrave;s avoir &eacute;t&eacute; photographe, journaliste et publicitaire, il devient &agrave; partir des ann&eacute;es 80, enseignant en marketing et strat&eacute;gie &agrave; l'European Business School de Paris et &agrave; HEC, ainsi qu'au CRC. Il publira ainsi en 92 un livre qui fut un choc dans la profession du <strong>
                      marketing strat&eacute;gique.
                    </strong>
                  </p>
                  <p>
                    La r&eacute;alit&eacute; d&eacute;montre que nos entreprises sont v&eacute;ritablement et continuellement en guerre; on ne doit plus faire du marketing mais du <strong>
                      warketing !
                    </strong>
                  </p>
                </div> : <div>
                  <p>
                    Max PAGNIOL met Jean-Louis SWINERS during EBS and
                    CRC seminars that took place in HEC Paris.
                  </p>
                  <p>
                    Jean-Louis SWINERS is a French photographer, who has
                    demonstrated for many years his keen ability to
                    <strong> understand the things of the world</strong> and as such, the
                    many facets of his talent. He was awarded the Prix
                    Nièpce in 1962. After working as a photographer,
                    journalist and publicist, he started in the 80’s a
                    new career as a marketing and strategy professor at
                    the European Business School in Paris, at HEC and at
                    CRC. In 1992, he published a book that created
                    tremendous shock in the <strong>strategic marketing</strong> sector.
                  </p>
                  <p>
                    Reality shows that our companies are truly and
                    continuously at war. Marketing times are over, now
                    we should switch to <strong>warketing</strong>!
                  </p>
                </div>}
              {this.state.language === "fr" ? 
              <div>
                  <p>
                    &Ecirc;tre intelligent ne suffit pas, il faut se
                    mettre sur le pied de guerre, pour s'agu&eacute;rrir
                    dans les analyses concurrentielles, et ainsi aller
                    au-del&agrave; de &laquo; faire du commerce &raquo;,
                    &ecirc;tre plus strat&egrave;ge.
                  </p>
                  <p>
                    Plus tard, il &eacute;crira aussi &laquo; L'intelligence cr&eacute;ative : au-del&agrave; du brainstorming &raquo;, paru en 2004, qui confirme que <strong>
                      tout probl&egrave;me
                    </strong> a au moins <strong>
                      trois solutions,
                    </strong> et que sans avoir trouv&eacute; au moins trois solutions diff&eacute;rentes, l'&eacute;quipe doit revoir sa copie, jusqu'&agrave; ce qu'elle les trouve. Ainsi par rebonds successifs, le vrai changement, la <strong>
                      v&eacute;ritable innovation
                    </strong> na&icirc;tra...
                  </p>
                  <p>
                    Le meilleur moyen de lutter contre la concurrence &eacute;tant la <strong>
                      pens&eacute;e cr&eacute;ative.
                    </strong> 2015 verra son retour &agrave; la photographie et au m&eacute;tier de r&eacute;dacteur.
                  </p>
                </div> : <div>
                  <p>
                    Being smart is not enough, we have to be ready to
                    fight, to gain experiences in competitive analyses
                    and therefore to go beyond simply &laquo; trading &raquo;, to
                    become better strategists.
                  </p>
                  <p>
                      He also wrote later &laquo; Creative intelligence: beyond brainstorming &raquo; published in 2004, 
                      in which he explains that <strong>any problem</strong> has at least <strong>three solutions</strong>, therefore any team 
                      that is unable to come up with at least three different solutions must review their work 
                      until they do. Thus, by successive rebounds, real change and <strong>true innovation</strong> will emerge...
                  </p>
                  <p>
                      The best way to fight against competition is <strong>creative thinking</strong>.
                      In 2015, Jean-Louis Swiners returned to photography and copy writing. 
                  </p>
                </div>}
            </article>
          </div>;
    }
    
}

export default Swiners;
