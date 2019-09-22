import React,{Component} from "react";
import SVGIcon from "../svgIcons/icons";

class Reengineering extends Component {
    
    open = (div) => {
        if(window.innerWidth <768){
            div.querySelector('div').classList.toggle('hidden'); 
        }
    }

    render(){
        return this.props.language === "fr" ? (
          <div className="reengineering" id="reengineering-des-process">
            <p className="title">
              <span>REENGINEERING DES PROCESS</span>
            </p>
            <article>
              <div onClick={e => this.open(e.currentTarget)}>
                <SVGIcon name="remodeling" />
                <h2>Remodeling process map</h2>
                <div className="hidden">
                  <p>
                    <strong>
                      La mise en place d'une strat&eacute;gie,
                    </strong>{" "}
                    apr&egrave;s analyse des forces et faiblesses de
                    l'entreprise, repose en grande partie sur{" "}
                    <strong>
                      l'organisation des services et des process
                    </strong>{" "}
                    en vue d'une{" "}
                    <strong>bonne allocation de moyens.</strong>
                  </p>
                  <p>
                    Chaque <strong>acteur</strong> de l'entreprise doit
                    se sentir concern&eacute; pour l'objectif collectif
                    qu'est la <strong>satisfaction du client.</strong>{" "}
                    <strong>Clarification des objectifs</strong>{" "}
                    &agrave; atteindre, mise en place des{" "}
                    <strong>outils </strong>
                    d'information et de communication, adjustement dans
                    la{" "}
                    <strong>
                      r&eacute;partition des t&acirc;ches,
                    </strong>{" "}
                    permettront d'assurer le <strong>liant</strong>{" "}
                    entre les diff&eacute;rents services pour{" "}
                    <strong>gagner en performance globale.</strong>
                  </p>
                </div>
              </div>
              <div onClick={e => this.open(e.currentTarget)}>
                <SVGIcon name="leanmanu" />
                <h2>Lean Manufacturing et Just in Time</h2>
                <div className="hidden">
                  <p>
                    Deux objectifs de base guident la{" "}
                    <strong>
                      m&eacute;thode du Lean Manufacturing :
                    </strong>
                  </p>
                  <ul>
                    <li>
                      le niveau de{" "}
                      <strong>productivit&eacute; industrielle</strong>{" "}
                      alli&eacute; &agrave; un standard de
                      qualit&eacute;
                    </li>
                    <li>
                      la r&eacute;activit&eacute; industrielle versus le{" "}
                      <strong>service au client.</strong>
                    </li>
                  </ul>
                  <p>
                    Il convient de quantifier la valeur du produit du
                    point de vue du client{" "}
                    <strong>juste ce qu'il faut</strong> en identifiant
                    la cha&icirc;ne de valeur qui mettra en
                    &eacute;vidence les gaspillages, traduisant ainsi la
                    notion de lean (maigre) : produire seulement ce que
                    le client a command&eacute;, et donc{" "}
                    <strong>
                      laisser le client tirer le flux de production
                    </strong>{" "}
                    dans la cha&icirc;ne.
                  </p>
                  <p>
                    <strong>Flux tendu,</strong> production{" "}
                    <strong>Just in Time,</strong> apporteront
                    fiabilit&eacute; et &eacute;conomies.
                  </p>
                </div>
              </div>
              <div onClick={e => this.open(e.currentTarget)}>
                <SVGIcon name="demarchequalite" />
                <h2>D&eacute;marche qualit&eacute;</h2>
                <div className="hidden">
                  <p>
                    La mise en place d'une d&eacute;marche
                    qualit&eacute; au sein de l'entreprise est un
                    v&eacute;ritable{" "}
                    <strong>
                      acte manag&eacute;rial f&eacute;d&eacute;rateur;{" "}
                    </strong>
                    cela ne concerne donc pas uniquement la
                    qualit&eacute; intrins&egrave;que des produits et
                    services &agrave; fournir aux clients.
                  </p>
                  <p>
                    Ces outils norm&eacute;s (SMQ ISO 9001...)
                    permettent au-del&agrave; d'une{" "}
                    <strong>
                      am&eacute;lioration globale de la gestion
                    </strong>{" "}
                    de vos diff&eacute;rents processus par une plus
                    grande coordination de ces derniers, d
                    <strong>
                      'inscrire l'entreprise dans une d&eacute;marche de
                      mesure continue et suivie
                    </strong>
                    , et d'apporter &eacute;galement une{" "}
                    <strong>
                      cr&eacute;dibilit&eacute; plus grande
                    </strong>{" "}
                    &agrave; votre organisation tant en interne qu'en
                    externe.
                  </p>
                </div>
              </div>
            </article>
          </div>
        ) : this.props.language === "korea" ? (
          <div className="reengineering" id="reengineering-des-process">
            <p className="title korea">
              <span>리엔지니어링 프로세스</span>
            </p>
            <article className='korea'>
              <div onClick={e => this.open(e.currentTarget)}>
                <SVGIcon name="remodeling" />
                <h2>리모델링 프로세스 맵</h2>
                <div className="hidden">
                  <p>
                    회사의 강점과 약점을 분석한 후 전략을 구현하기
                    위해서는 리소스를 효율적으로 할당하기 위한 서비스 및
                    프로세스 구성이 크게 좌우합니다.
                  </p>
                  <p>
                    회사 각 구성원은 고객만족이라는 공동목표를 염두해
                    두어야 합니다. 달성해야 할 목표의 명확화, 정보 및
                    통신기구의 구현, 작업 배포 조정, 전반적인 성능을
                    향상시키기 위해 다양한 서비스 간의 연결을
                    확보해야합니다.
                  </p>
                </div>
              </div>
              <div onClick={e => this.open(e.currentTarget)}>
                <SVGIcon name="leanmanu" />
                  <h2>린-제조방식 과 적시생산방식</h2>
                <div className="hidden">
                  <p>린-제조방식은 두가지 목표를 기본으로 합니다 :</p>
                  <ul>
                    <li>품질기준과 결합된 산업 생산성 수준</li>
                    <li>고객 서비스에 대한 산업 반응성</li>
                  </ul>
                  <p>
                    고객의 관점에서 제품의 가치를 정량화하는 것은 자원의
                    낭비를 초래할 가치 사슬을 식별하여 고객이 필요로
                    하는 것만을 주문받아 생산하도록 하는 것을 말합니다.
                  </p>
                  <p>
                    재고를 피하기 위한 수요에 따른 엄격한 생산,
                    적시생산방식은 신뢰성과 절약을 가져옵니다.
                  </p>
                </div>
              </div>
              <div onClick={e => this.open(e.currentTarget)}>
                <SVGIcon name="demarchequalite" />
                <h2>품질접근방식</h2>
                <div className="hidden">
                  <p>
                    기업 내에서 품질 접근 방식을 구현하는 것은 진정으로
                    통일된 경영 행위입니다. 이는 고객에게 제공되는 제품
                    및 서비스의 본진적인 품질에 관심을 가질 뿐만 아니라.
                  </p>
                  <p>
                    이러한 표준화된 도구 (SMQ ISO 9001...) 는 고객의 다양한 프로세스를 보다 잘 조율하여 조직을 글로벌 수준의 관리 및 지속가능하고 측정가능한 프로세스를 구축할 수 있게 합니다. 또한 내부적으로나 외부적으로 조직에 큰 신뢰성을 가져다줍니다. 
                  </p>
                </div>
              </div>
            </article>
          </div>
        ) : (
          <div className="reengineering" id="reengineering-des-process">
            <p className="title">
              <span>PROCESS RE-ENGINEERING</span>
            </p>
            <article>
              <div onClick={e => this.open(e.currentTarget)}>
                <SVGIcon name="remodeling" />
                <h2>Remodeling process map</h2>
                <div className="hidden">
                  <p>
                    <strong>The implementation of a strategy</strong>,
                    after analyzing the strengths and weaknesses of the
                    company, relies heavily on{" "}
                    <strong>
                      the organization of services and processes
                    </strong>{" "}
                    for a{" "}
                    <strong>proper allocation of resources</strong>.
                  </p>
                  <p>
                    Every <strong>employee</strong> in the company
                    should feel concerned with the collective goal of{" "}
                    <strong>providing customer satisfaction</strong>.{" "}
                    <strong>A clear view of the objectives</strong> to
                    achieve, the implementation of information and
                    communication <strong>tools</strong> and the
                    adjustment of <strong>task allocation</strong> will
                    ensure the <strong>collective work</strong> between
                    services and help{" "}
                    <strong>
                      optimize efficiency throughout the company
                    </strong>
                    .
                  </p>
                </div>
              </div>
              <div onClick={e => this.open(e.currentTarget)}>
                <SVGIcon name="leanmanu" />
                <h2>Lean Manufacturing and Just in Time</h2>
                <div className="hidden">
                  <p>
                    <strong>Lean manufacturing</strong> is driven by two
                    basic objectives:
                  </p>
                  <ul>
                    <li>
                      the level of{" "}
                      <strong>industrial productivity</strong> coupled
                      with quality standards
                    </li>
                    <li>
                      industrial reactivity versus{" "}
                      <strong>customer service</strong>.
                    </li>
                  </ul>
                  <p>
                    The value of the product must be quantified based on
                    the customer’s <strong>precise</strong> requests, by
                    identifying the value stream that will highlight the
                    waste, thus reflecting the notion of “lean”: to only
                    manufacture what the customer orders, and therefore{" "}
                    <strong>
                      let the customer demand or &laquo; pull &raquo;
                      drives the production
                    </strong>
                    .
                  </p>
                  <p>
                    <strong>Lean manufacturing</strong> and{" "}
                    <strong>Just in Time</strong> production will
                    increase reliability and savings.
                  </p>
                </div>
              </div>
              <div onClick={e => this.open(e.currentTarget)}>
                <SVGIcon name="demarchequalite" />
                  <h2>Quality Approach</h2>
                <div className="hidden">
                  <p>
                    The implementation of a Quality approach within a
                    company is a{" "}
                    <strong>federative managerial decision</strong>; it
                    is therefore not limited to the intrinsic quality of
                    products and services they have to provide their
                    clients.
                  </p>
                  <p>
                    These standardized tools (SMQ, ISO, 9001...) allow
                    your organization, in addition to a{" "}
                    <strong>
                      global optimization of process management
                    </strong>{" "}
                    through a better coordination of your various
                    processes, to{" "}
                    <strong>
                      adopt an ongoing, monitored and controlled
                      approach
                    </strong>{" "}
                    that will reinforce its credibility both internally
                    and externally.
                  </p>
                </div>
              </div>
            </article>
          </div>
        );
    }
    
}

export default Reengineering;