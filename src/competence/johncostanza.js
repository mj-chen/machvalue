import React, {Component} from "react";
import john from "../assets/img/JOHN_COSTANZA.png";

class JohnCostanza extends Component {
   constructor(props){
      super(props);
      this.article = React.createRef();
   }

    open = (div) => {
        if (window.innerWidth < 768) {
            this.article.current.classList.toggle('hidden');
        }
    }

    render(){
        const {language} = this.props;
        return (
          <div id="costanza">
            <div onClick={() => this.open()}>
              <p className="title">
                <span>JOHN COSTANZA</span>
              </p>
            </div>
            <article className="hidden" ref={this.article}>
              <div>
                <img src={john} alt="john costanza" />
              </div>
              {language === "fr" ? (
                <div>
                  <p>
                    Am&eacute;ricain, John R. COSTANZA a fond&eacute;
                    l'Institut John Costanza de Technologie en 1984 avec
                    la mission de, &laquo;{" "}
                    <strong>
                      fournir les outils et les techniques de gestion
                      des flux de la demande
                    </strong>{" "}
                    (la DFT ou Demand Flow Technology) aux
                    soci&eacute;t&eacute;s manufacturi&egrave;res pour
                    accro&icirc;tre leur comp&eacute;titivit&eacute;
                    globale &raquo;.
                  </p>
                  <p>
                    Il est laur&eacute;at du prix Nobel pour les
                    sciences &eacute;conomiques, r&eacute;cipiendaire du
                    prix &laquo; Heroes of US Manufacturing &raquo;
                    decern&eacute; par le magazine Fortune. Max PAGNIOL
                    travailla avec John COSTANZA &agrave; l'institut de
                    Denver.
                  </p>
                </div>
              ) : language === "korea" ? (
                <div>
                  <p>
                    미국인 존 R.콘스탄차는 1984 년 John Costanza Institute
                    of Technology 를 설립했습니다. 본 기술연구소는 « 제조
                    기업이 글로벌 경쟁력을 확보할 수 있도록 도구 수요
                    흐름 기술 (DFT) 을 제공 » 함을 미션으로 합니다.
                  </p>
                  <p>
                    존 코스탄차 (John COSTANZA) 는 노벨경제상 수상자이며
                    미국 제조업 대상 포춘 히어로 « Heroes of US
                    Manufacturing » 를 수상한바 있습니다. 막스 파니올 (Max
                    Pagniol) 은 덴버 연구소에서 그와 함께 근무하였습니다
                  </p>
                </div>
              ) : (
                <div>
                  <p>
                    The American John Costanza founded the John Costanza
                    Institute of Technology in 1984 with the mission of
                    &laquo;{" "}
                    <strong>
                      Providing demand flow technology (DFT) tools and
                      techniques
                    </strong>{" "}
                    to manufacturing companies to increase their global
                    competitiveness &raquo;.
                  </p>
                  <p>
                    He was nominated as a Nobel laureate for economics,
                    recipient of Fortune magazine's &laquo; Heroes of US
                    Manufacturing &raquo; award. Max PAGNIOL worked with
                    John Costanza at the Denver Institute.
                  </p>
                </div>
              )}
              {language === "fr" ? (
                <div>
                  <p>
                    Cette technologie (
                    <strong>Demand Flow Technology</strong>) est une
                    strat&eacute;gie de d&eacute;finition et de
                    d&eacute;ploiement des processus m&eacute;tier dans
                    un flux de production d'un produit en r&eacute;ponse
                    &agrave; la demande client. DFT est bas&eacute;e sur
                    un ensemble d'outils math&eacute;matiques qui sont
                    utilis&eacute;s pour connecter les processus dans un
                    flux continu afin de le lier aux changements
                    quotidiens de la demande.
                  </p>
                  <p>
                    La DFT est donc destin&eacute;e &agrave; fournir une
                    alternative &agrave; la fabrication par
                    programmation, qui utilisait principalement un plan
                    de vente et des pr&eacute;visions pour
                    d&eacute;terminer un calendrier de production; tout
                    ceci amenant &agrave; produire en &laquo;{" "}
                    <strong>JUST IN TIME</strong> &raquo;.
                  </p>
                </div>
              ) : language === "korea" ? (
                <div>
                  <p>
                    그의 기술 (수요 흐름 기술) 은 고객의 요구에 따른
                    제품의 생산 과정을 정의하고 비즈니스 프로세스
                    전개과정을 구축하는 것입니다. DFT는 일상적인
                    수요변화에 바인딩 연속 스트림 프로세스를 연결하는데
                    사용되는 수학적 기술을 기반으로 합니다.
                  </p>
                  <p>
                    따라서 DFT 는 주로 판매계획과 생산일정을 결정해야하는
                    기업에게 프로그래밍에 의한 제조대안을 제공하기 위한
                    것입니다: 모든 것은 시간에 맞추어 « JUST IN TIME » 진행되어야 합니다.
                  </p>
                </div>
              ) : (
                <div>
                  <p>
                    This technology (
                    <strong>Demand Flow Technology</strong>) is a
                    strategy for defining and deploying business
                    processes in a flow, driven in response to customer
                    demand. DFT is based on a set of applied
                    mathematical tools that are used to connect
                    processes in a flow and link it to daily changes in
                    demand.
                  </p>
                  <p>
                    DFT is intended to provide an alternative to
                    schedule-push manufacturing which primarily uses a
                    sales plan and forecast to determine a production
                    schedule; all this leading to &laquo;{" "}
                    <strong>JUST IN TIME</strong> &raquo; production.
                  </p>
                </div>
              )}
            </article>
          </div>
        );
    }
    
}

export default JohnCostanza;