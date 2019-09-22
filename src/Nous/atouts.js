import React, {Component} from "react";
import SVGIcon from "../svgIcons/icons";

class Atouts extends Component {
   
    render(){
        return this.props.language === "fr" ? (
          <div className="atouts" id="nos-atouts">
            <p className="title">
              <span>NOS ATOUTS</span>
            </p>
            <main>
              <div className="adv">
                <div>
                  <p>RAPIDIT&Eacute;</p>
                  <p>SIMPLICIT&Eacute;</p>
                  <p>EFFICACIT&Eacute;</p>
                </div>
              </div>
              <div className="procedure">
                <SVGIcon name="liberte" width="130px" />
                <p>
                  Apr&egrave;s une phase d'audit et de diagnostic,{" "}
                  <span>
                    impliquant d&egrave;s l'amont vos &eacute;quipes,{" "}
                  </span>
                  nous cr&eacute;ons des{" "}
                  <span>&laquo; projets pilotes &raquo;</span> pour
                  mieux cerner les enjeux du projet global &agrave;
                  mettre en oeuvre.
                </p>
                <p>
                  Ce mode de fonctionnement nous permet{" "}
                  <span>d'obtenir</span> plus rapidement l'
                  <span>adh&eacute;sion de vos personnels</span> quant
                  aux demandes que nous allons initier. Cela nous permet
                  aussi de{" "}
                  <span>confirmer la pertinence des choix</span>{" "}
                  &agrave; mettre en oeuvre.
                </p>
              </div>
            </main>
          </div>
        ) : this.props.language === "korea" ? (
          <div className="atouts" id="nos-atouts">
            <p className="title">
              <span>경영이념</span>
            </p>
            <main>
              <div className="adv">
                <div>
                  <p>신속성</p>
                  <p>용이성</p>
                  <p>효율성</p>
                </div>
              </div>
              <div className="procedure">
                <SVGIcon name="liberte" width="130px" />
                <p>
                  감사 및 진단 단계를 마친 후, 우리는 전과정에 참여하며
                  글로벌 프로젝트의 문제점을 보다 잘 이해할 수 있는
                  &laquo; 파일럿 프로젝트 &raquo; 를 기획하게 됩니다.
                </p>
                <p>
                  본 과정은 차후 이루어질 될 변화에 대해 직원의 지지를
                  쉽게 얻을 수 있게 해주며 이를 통해 우리는 선택의
                  관련성을 확인할 수 있습니다.
                </p>
              </div>
            </main>
          </div>
        ) : (
          <div className="atouts" id="nos-atouts">
            <p className="title">
              <span>OUR STRENGTHS</span>
            </p>
            <main>
              <div className="adv">
                <div>
                  <p>TIMELINESS </p>
                  <p>SIMPLICITY</p>
                  <p>EFFICIENCY</p>
                </div>
              </div>
              <div className="procedure">
                <SVGIcon name="liberte" width="130px" />
                <p>
                  After an initial audit and diagnostic phase{" "}
                  <span>
                    involving your teams right from the beginning,{" "}
                  </span>
                  we create <span>&laquo; pilot projects &raquo;</span>{" "}
                  to better identify the main issues of the global
                  project to be implemented.
                </p>
                <p>
                  This mode of operation allows us to
                  <span>
                    faster garner your staff support and creativeness
                  </span>{" "}
                  to the requests we are going to initiate. It also
                  allows us to{" "}
                  <span>confirm the relevance of changes</span> to be
                  made.
                </p>
              </div>
            </main>
          </div>
        );};
};

export default Atouts;
