import React, {Component} from "react";
import SVGIcon from "../svgIcons/icons";


class Equipe extends Component {
 
  render(){
    return this.props.language === "fr" ? (
      <div className="equipe" id="notre-&eacute;quipe">
        <p className="title">
          <span>NOTRE &Eacute;QUIPE</span>
        </p>
        <main>
          <SVGIcon name="equipe" width="100px" />
          <div>
            <div>
              <p>
                Notre &eacute;quipe est constitu&eacute;e de professionnels
                pluridisciplinaires confirm&eacute;s issus des meilleures
                grandes &eacute;coles (HEC, ESSEC, CENTRALE, ENSAM...) et
                Universit&eacute;s.
              </p>
              <p>
                <span>V&eacute;ritables catalyseurs</span> de vos projets,
                ils sauront &ecirc;tre un centre de ressources et
                d'excellence par leur &eacute;coute, leur analyse{" "}
                <span>
                  mettant en prospective votre soci&eacute;t&eacute;
                </span>{" "}
                dans son environnement pour une meilleure performance.
              </p>
            </div>
            <div>
              <p>
                Nous nous investissons pour nos clients avec
                responsabilit&eacute; et engagement. Au-del&agrave; de notre
                m&eacute;thodologie, de nos outils et de la
                comp&eacute;tence de notre &eacute;quipe, c'est{" "}
                <span>l'&eacute;tat d'esprit</span> qui nous anime, par des
                conseils et soutiens op&eacute;rationnels pragmatiques, que{" "}
                <span>
                  nous cr&eacute;ons la satisfaction de nos clients et de
                  leurs &eacute;quipes.
                </span>
              </p>
            </div>
          </div>
        </main>
      </div>
    ) : this.props.language === "korea" ? (
      <div className="equipe" id="notre-&eacute;quipe">
        <p className="title">
          <span>조직원소개</span>
        </p>
        <main>
          <SVGIcon name="equipe" width="100px" />
          <div>
            <div>
              <p>
                우리 조직은 최고의 학교 (HEC, ESSEC, CENTRALE, ENSAM…) 및
                대학에서 인증된 최고 전문가들로 구성됩니다.
              </p>
              <p>
                기업의 더 나은 성과를 창출하기 위해 전문가들은 자원과 강점에 귀를 기울이며, 회사가 처한 환경을 다각적으로 분석하여 진정한 촉매제로서의 역할을 수행합니다.
              </p>
            </div>
            <div>
              <p>
                우리는 책임감과 헌신으로 고객을 위해  노력을 다합니다. 우리의 방법론, 도구 및 팀의 역량 이외에도 실용적인 운영 조언 및 지원을 통해 고객사와 고객사 구성원의 성공을 돕는데 공헌하고자 합니다.  
              </p>
            </div>
          </div>
        </main>
      </div>
    ) : (
      <div className="equipe" id="notre-&eacute;quipe">
        <p className="title">
          <span>OUR TEAM</span>
        </p>
        <main>
          <SVGIcon name="equipe" width="100px" />
          <div>
            <div>
              <p>
                We are a multidisciplinary team, made up of professors and
                experienced professionals hailing from the best Grandes
                Ecoles (HEC, ESSEC, CENTRALE, ENSAM…) and universities.
              </p>
              <p>
                <span>Serving as catalysts</span> for your projects, we act
                as a best-in-class resource center, backed by our quality
                listening and acute analysis and based on{" "}
                <span>conducting prospective surveys of your company </span>{" "}
                to achieve better performances.
              </p>
            </div>
            <div>
              <p>
                We are fully committed to the success of your clients, and
                we engaged our complete and responsible expertise to achieve
                it. Beyond our methodology, tools and expertise, what drives
                us is <span>our ability</span> to provide pragmatic and
                operational support to our clients, generating overall
                approval, through our meaningful and careful approach.
              </p>
            </div>
          </div>
        </main>
      </div>
    );
  }
};

export default Equipe;