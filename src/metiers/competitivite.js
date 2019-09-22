import React,{Component} from "react";
import SVGIcon from "../svgIcons/icons";

class Competitivite extends Component{
  
  open = (div) => {
        if (window.innerWidth < 768) {
            div.querySelector('div').classList.toggle('hidden');
        }
  }
    
    render(){
        return this.props.language === "fr" ? (
          <div
            className="competitivite"
            id="comp&eacute;titivit&eacute;-et-vitesse-de-d&eacute;veloppement"
          >
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
                    Trop souvent les entreprises ne prennent pas le
                    temps d'analyser leur{" "}
                    <strong>position strat&eacute;gique </strong>
                    dans leurs march&eacute;s.
                  </p>
                  <p>
                    Sans vision claire des situations nouvelles, et sans
                    avoir pris le recul n&eacute;cessaire pour{" "}
                    <strong>mieux adapter son plan </strong>
                    op&eacute;rationnel, les allocations de ressources
                    ne seront pas optimis&eacute;es et l'efficience
                    globale en sera d'autant diminu&eacute;e.
                  </p>
                </div>
              </div>
              <div onClick={e => this.open(e.currentTarget)}>
                <SVGIcon name="audit" />
                <h2>Audit de performance</h2>
                <div className="hidden">
                  <p>
                    Il est important de{" "}
                    <strong>
                      mesurer sa performance en regard des tendances de
                      march&eacute;,
                    </strong>{" "}
                    de l'<strong>environnement concurrentiel,</strong>{" "}
                    de ses propres objectifs et ainsi pourvoir{" "}
                    <span>
                      se situer le plus objectivement possible{" "}
                    </span>
                    pour infl&eacute;chir ou ajuster les
                    diff&eacute;rents plans d'actions (commerciaux,
                    industriels, etc...). Nous prenons le temps de
                    construire avec vous{" "}
                    <strong>les grilles de lecture</strong> (dashboard)
                    qui vous permettront de{" "}
                    <strong>
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
                    Trouver de nouveaux produits, de nouvelles solutions
                    n'est pas &eacute;vident et l'entreprise peut
                    chercher longtemps sans succ&egrave;s. Il faut donc
                    pour rester comp&eacute;titif,{" "}
                    <strong>
                      compenser et toujours r&eacute;duire les
                      co&ucirc;ts.{" "}
                    </strong>
                    Ce qui compte c'est la notion de{" "}
                    <strong>moindre co&ucirc;t global </strong>
                    permettant de r&eacute;pondre &agrave; la solution
                    voulue. <strong>L'analyse de la valeur </strong>est
                    la m&eacute;thode la plus rationnelle{" "}
                    <strong>
                      d'optimisation du proc&eacute;d&eacute; de
                      production d'un produit{" "}
                    </strong>
                    s'inscrivant globalement dans l'ing&eacute;nierie de
                    celui-ci (re-conception, industrialisation et
                    autres) et ce, afin d'
                    <strong>
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
                    Non seulement l'entreprise se doit de{" "}
                    <strong>sortir des projets</strong> mais elle se
                    doit aussi de le faire{" "}
                    <strong>
                      &laquo; au bon moment, juste &agrave; temps
                      &raquo;
                    </strong>{" "}
                    en{" "}
                    <strong>
                      hi&eacute;rarchisant les priorit&eacute;s,
                    </strong>{" "}
                    avec l<strong>'adh&eacute;sion de tous. </strong>
                    In&eacute;vitablement certains sujets passeront
                    apr&egrave;s d'autres et les frustrations risquent
                    de na&icirc;tre, d'o&ugrave; l'imp&eacute;rieuse
                    n&eacute;cessit&eacute; de{" "}
                    <strong>
                      {" "}
                      &laquo; faire comprendre le pourquoi &raquo;.
                    </strong>{" "}
                    Enfin, r&eacute;pondre aux imp&eacute;ratifs de
                    timing, demande une transversalit&eacute; entre les
                    process afin d'&eacute;viter des oublis. Une
                    m&eacute;thodologie{" "}
                    <strong>&laquo; Time to Market &raquo;</strong>{" "}
                    &eacute;vite ces d&eacute;sordres,
                    f&eacute;d&egrave;re vos &eacute;quipes, vous fait
                    gagner en flexibilit&eacute; et en adh&eacute;sion,
                    vous assurant ainsi r&eacute;activit&eacute; et
                    efficience.
                  </p>
                </div>
              </div>
            </article>
          </div>
        ) : this.props.language === "korea" ? (
          <div
            className="competitivite"
            id="comp&eacute;titivit&eacute;-et-vitesse-de-d&eacute;veloppement"
          >
            <p className="title korea">
              <span>경쟁력과 개발 속도</span>
            </p>
            <article>
              <div onClick={e => this.open(e.currentTarget)}>
                <SVGIcon name="position" />
                <h2>포지셔닝 전략</h2>
                <div className="hidden">
                  <p>
                    기업들이 시장에서 전략적 위치를 분석하는데 시간을
                    투자하지 않는 모습을 쉽게 발견할 수 있습니다.
                  </p>
                  <p>
                    새로운 상황에 대한 명확한 비전과 운영계획을 잘
                    적용하기 위한 단계를 거치지 않는다면 자원배분은
                    최적화되지 않으며 그에 따른 효율성도 감소 될
                    것입니다.
                  </p>
                </div>
              </div>
              <div onClick={e => this.open(e.currentTarget)}>
                <SVGIcon name="audit" />
                <h2>업무 감사</h2>
                <div className="hidden">
                  <p>
                    시장동향, 경쟁환경 및 자신의 목표에 따른 성과를
                    측정하는 것은 중요하며 이는 서로 다른
                    행동계획 (상업,산업 등) 에 영향을 미치거나 조정할 수
                    있도록 객관적으로 배치되어야 합니다. 우리는 고객의
                    계획이 효율적으로 실현될 수 있도록 고객과 함께
                    대시보드 작성에 노력을 기합니다.
                  </p>
                </div>
              </div>
              <div onClick={e => this.open(e.currentTarget)}>
                <SVGIcon name="analyse" />
                <h2>가치 분석</h2>
                <div className="hidden">
                  <p>
                    새로운 제품과 새로운 솔루션을 찾는 것은 쉽지 않으며
                    회사는 이를 찾지못하고 오랜시간을 보낼 수 있습니다.
                    시장에서 경쟁우위를 유지하기 위해서는 보상하고 항상
                    비용을 절감해야합니다. 원하는 솔루션을 충족시키기
                    위해 전반적으로 비용절감이라는 개념이 중요합니다.
                    가치분석은 일반적으로 제품의 생산 프로세스를
                    최적화하는 가장 합리적인 방법으로 최소한의 비용으로
                    제품을 얻기 위한 제품 엔지니어링 (재 설계, 산업화 및
                    기타) 입니다.
                  </p>
                </div>
              </div>
              <div onClick={e => this.open(e.currentTarget)}>
                <SVGIcon name="timetomarket" />
                  <h2 className='korea'>시장 출시 시간</h2>
                <div className="hidden">
                  <p>
                    회사는 프로젝트를 출시하는 것에 그치지 않고 모든 우선순위와 시간을 맞춤으로써 &laquo; 적기에 &raquo; 내놓아야 합니다. 필연적으로 일부 주제는 그냥 지나치거나 좌절감을 발생시킬 수 있으므로 &laquo; 이유를 이해시키는 것 &raquo; 이 필요합니다. 마지막으로 타이밍 요구사항에 응답하기 위해서는 과실을 방지하기 위해 프로세스간 횡단을 요구하여야 합니다. 시장 출시 시간 &laquo; Time to Market &raquo; 방법론은 이러한 장애를 피하고 팀을 연합하며 융통성과 순응도를 높여 응답성과 효율성을 보장하는 것입니다.
                  </p>
                </div>
              </div>
            </article>
          </div>
        ) : (
          <div
            className="competitivite"
            id="comp&eacute;titivit&eacute;-et-vitesse-de-d&eacute;veloppement"
          >
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
                    analyze the <strong>strategic position</strong> they
                    occupy on their respective markets.
                  </p>
                  <p>
                    Without a clear vision of new situations and without
                    having taken the necessary time to{" "}
                    <strong>better adapt their operational plan</strong>
                    , they will not be in a position to optimize their
                    resource allocation and therefore their global
                    efficiency will be impaired.
                  </p>
                </div>
              </div>
              <div onClick={e => this.open(e.currentTarget)}>
                <SVGIcon name="audit" />
                <h2>Performance Audit</h2>
                <div className="hidden">
                  <p>
                    It is important to{" "}
                    <strong>
                      measure one's performances versus market trends
                    </strong>{" "}
                    and <strong>competitive environment</strong>,
                    without forgetting one's own objectives. This will
                    allow you to be in a better position to adjust the
                    various action plans (commercial, industrial, etc.)
                    and to conduct in an objective manner the completion
                    of your plan. We will take the necessary time to
                    build with you the <strong>dashboard</strong> to{" "}
                    <strong>
                      successfully complete the realization of your
                      plans
                    </strong>
                    .
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
                    remain competitive are{" "}
                    <strong>compensation and cost reductions</strong>.
                    What is paramount is to{" "}
                    <strong>reduce global costs</strong> in order to be
                    in line with the intended goal.
                    <strong> Value analysis</strong> is the most
                    rational method to
                    <strong> optimize the production process</strong> in
                    keeping with the product engineering processes
                    (re-design, industrialization and others), in order
                    to{" "}
                    <strong>get this product at the right cost</strong>.
                  </p>
                </div>
              </div>
              <div onClick={e => this.open(e.currentTarget)}>
                <SVGIcon name="timetomarket" />
                <h2>Time to Market</h2>
                <div className="hidden">
                  <p>
                    Companies have to{" "}
                    <strong>develop new projects</strong> but they also
                    have to do so{" "}
                    <strong>
                      &laquo; at the right time and just in time &raquo;{" "}
                    </strong>
                    by <strong>assigning priorities</strong>, with{" "}
                    <strong>the support of all teams</strong>.
                    Inevitably, some projects will be developed after
                    others and frustrations may arise, hence the
                    imperative need to{" "}
                    <strong>
                      &laquo; make people understand why &raquo;
                    </strong>
                    .
                  </p>
                  <p>
                    And finally, to address time constraints requires a
                    transversal approach between processes in order to
                    avoid oversights. A{" "}
                    <strong>&laquo; Time to Market &raquo;</strong>{" "}
                    methodology avoids these pitfalls, while federating
                    your teams and increasing flexibility and support,
                    thus ensuring responsiveness and efficiency.
                  </p>
                </div>
              </div>
            </article>
          </div>
        );
    }
}

export default Competitivite;