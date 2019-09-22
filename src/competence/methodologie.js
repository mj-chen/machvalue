import React, {Component} from "react";
import SVGIcon from "../svgIcons/icons";

class Methodologie extends Component {

    render(){
        const {language} = this.props;

        return language === "fr" ? (
          <div className="methodologie" id="m&eacute;thodologie">
            <div>
              <p className="title">
                <span>M&Eacute;THODOLOGIE</span>
              </p>
            </div>
            <article>
              <div className="catalyseur">
                <p>
                  <strong>V&eacute;ritable catalyseur,</strong> sortant
                  du simple r&ocirc;le d'animateur, nous mettons en
                  adh&eacute;sion vos &eacute;quipes pour &ecirc;tre
                  force de proposition partag&eacute;e r&eacute;pondant
                  ainsi pleinement{" "}
                  <strong>
                    &agrave; notre mission de &laquo;
                    r&eacute;v&eacute;lateur de valeur &raquo;.
                  </strong>
                </p>
              </div>
              <div>
                <SVGIcon name="methodo" />
                <h2>M&eacute;thodologie</h2>
                <p>
                  Nous sommes convaincus que bon nombre de richesses
                  restent &agrave; l'&eacute;tat latent au sein des
                  entreprises. Pris par le quotidien, les uns et les
                  autres manquent d'&eacute;coute et &agrave; ce titre
                  ne fonctionnent pas suffisamment en &eacute;quipe pour
                  la recherche de solutions efficaces pour l'entreprise.
                </p>
                <p>
                  Notre m&eacute;thodologie consiste donc dans un
                  premier temps{" "}
                  <strong>
                    &agrave; remettre du liant pour initier les remises
                    en cause.
                  </strong>
                </p>
              </div>
              <div>
                <h2>Supports &amp; outils</h2>
                <p>
                  Fort de notre cursus, nos consultants et
                  nous-m&ecirc;me traduisons vos objectifs via des
                  supports et outils ayant d&eacute;j&agrave; fait leurs
                  preuves, permettant de{" "}
                  <strong>gagner en temps et efficacit&eacute;.</strong>
                </p>
              </div>
            </article>
          </div>
        ) : language === "korea" ? (
          <div className="methodologie" id="m&eacute;thodologie">
            <div>
              <p className="title">
                <span>경영전략</span>
              </p>
            </div>
            <article>
              <div className="catalyseur">
                <p>
                  우리는 팀원들의 응집력 강화를통해 구성원과 조직의
                  비전을 일체화 할 수 있는 &laquo; 가치의 촉매제
                  &raquo; 로서의 사명을 다하고자 합니다.
                </p>
              </div>
              <div>
                <SVGIcon name="methodo" />
                <h2>교육방법</h2>
                <p>
                  우리는 기업이 가지고 있는 잠재력을 확신합니다. 단지
                  조직은 내부에서 발생하는 문제를 효과적으로 해결을 위한
                  방법이 부재할 뿐입니다.
                </p>
                <p>
                  그리하여 우리의 교육방식은 스스로 변화를 일으킬 수
                  있도록 관계를 개선하는 것에 초점을 맞춥니다.
                </p>
              </div>
              <div>
                <h2>지원 및 도구</h2>
                <p>
                  우리의 커리큘럼, 컨설턴트 및 우리의 수년간 경험을 통해
                  입증된 자료를 바탕으로 빠른 시일내에 효과를 기대할 수
                  있습니다.
                </p>
              </div>
            </article>
          </div>
        ) : (
          <div className="methodologie" id="m&eacute;thodologie">
            <div>
              <p className="title">
                <span>METHODOLOGY</span>
              </p>
            </div>
            <article>
              <div className="catalyseur">
                <p>
                  As a <strong>true catalyst</strong> for change, which
                  goes beyond the role of a mere facilitator, we bring
                  together your teams so that they become a source of
                  shared proposal, thus fully accomplishing{" "}
                  <strong>
                    our mission to &laquo; reveal value &raquo;
                  </strong>
                  .
                </p>
              </div>
              <div>
                <SVGIcon name="methodo" />
                <h2>Methodology </h2>
                <p>
                  We are convinced that a great amount of companies’
                  assets remain in a latent state. Committed by their
                  daily tasks, a majority of employees simply lack time
                  for listening or be listened and therefore do not
                  engage in team work to elaborate efficient solutions
                  for their companies.
                </p>
                <p>
                  Our methodology first consists in re-connecting teams
                  in order to{" "}
                  <strong>
                    initiate a reconsideration of their goals and issues
                  </strong>
                  .
                </p>
              </div>
              <div>
                <h2>Materials and tools</h2>
                <p>
                  Based on our experiences, our teams of consultants
                  will help you fulfill your objectives in terms of{" "}
                  <strong>time saving and efficiency</strong>, thanks to
                  our proven know-how and tools.
                </p>
              </div>
            </article>
          </div>
        );}
}

export default Methodologie;