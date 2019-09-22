import React, {Component} from "react";
import SVGIcon from "../svgIcons/icons";

class ProspectionCommerciale extends Component {
  
    render(){
      return this.props.language === "fr" ? (
        <div
          className="prospection-commerciale"
          id="prospection-commerciale"
        >
          <p className="title">
            <span>PROSPECTION COMMERCIALE</span>
          </p>
          <article>
            <div>
              <SVGIcon name="prospection" className="pros-icon" />
            </div>
            <div>
              <p>
                La prospection est un enjeu vital pour toutes les
                entreprises. La construction d'un fichier de{" "}
                <strong>clients potentiels qualifi&eacute;s</strong> sur
                lequel vous pourrez d&eacute;velopper vos actions
                commerciales est l'&eacute;l&eacute;ment central pour
                assurer une strat&eacute;gie de{" "}
                <strong>prospection efficace.</strong>
              </p>
              <p>
                Il faut cependant s'arr&ecirc;ter un moment sur quelques{" "}
                <strong>questions fondamentales</strong> pour initier
                cette strat&eacute;gie de conqu&ecirc;te:
              </p>
            </div>

            <ul>
              <li>
                <strong>Quels sont mes objectifs ?</strong>
              </li>
              <li>
                <strong>
                  Quels type de prospection dois-je construire ?
                </strong>
              </li>
              <li>
                <strong>Pour quels r&eacute;sultats ?</strong>
              </li>
              <li>
                <strong>
                  Comment vais-je mesurer mon efficience commerciale ?
                </strong>
              </li>
              <li>
                <strong>Avec quels outils ?</strong>
              </li>
            </ul>
          </article>
        </div>
      ) : this.props.language === "korea" ? (
        <div
          className="prospection-commerciale"
          id="prospection-commerciale"
        >
          <p className="title korea">
            <span>사업전망</span>
          </p>
          <article>
            <div>
              <SVGIcon name="prospection" className="pros-icon" />
            </div>
            <div>
              <p>
                사업전망은 모든회사에서 중대한 쟁점입니다. 귀사에 상업적인
                행동으로 이어질 수 있는 자격을 갖춘 잠재 고객 파일
                구축하는 것이 효과적인 전략을 보장하는 핵심요소입니다.
              </p>
              <p>
                그러나 정복전략을 시작하기에 앞서 몇가지 근본적인 질문을
                던져보아야 합니다.
              </p>
            </div>

            <ul>
              <li>
                <strong>나의 목표는 무엇인가 ?</strong>
              </li>
              <li>
                <strong>어떤 유형의 조사를 구성해야 하는가 ?</strong>
              </li>
              <li>
                <strong>어떤 결과를 바라볼 수 있는가?</strong>
              </li>
              <li>
                <strong>비지니스 효율성을 어떻게 측정할 것인가 ?</strong>
              </li>
              <li>
                  <strong> 어떤 도구가 필요한가 ?</strong>
              </li>
            </ul>
          </article>
        </div>
      ) : (
        <div
          className="prospection-commerciale"
          id="prospection-commerciale"
        >
          <p className="title">
            <span>PROSPECTING</span>
          </p>
          <article>
            <div>
              <SVGIcon name="prospection" className="pros-icon" />
            </div>
            <div>
              <p>
                Prospecting is a key challenge for all organizations.
                Building a list of{" "}
                <strong>qualified potential clients</strong> that you will
                use to develop your marketing actions is a key element to
                ensure an <strong>effective prospecting</strong> strategy.
              </p>
              <p>
                In order to initiate this conquest strategy, you must
                first address <strong>fundamental issues</strong>:
              </p>
            </div>
            <ul>
              <li>
                <strong>What are my objective?</strong>
              </li>
              <li>
                <strong>
                  What type of prospection should I elaborate?
                </strong>
              </li>
              <li>
                <strong>What are my expected results?</strong>
              </li>
              <li>
                <strong>
                  How am I going to assess my commercial efficiency?
                </strong>
              </li>
              <li>
                <strong>With what tools?</strong>
              </li>
            </ul>
          </article>
        </div>
      );
    }
}

export default ProspectionCommerciale;