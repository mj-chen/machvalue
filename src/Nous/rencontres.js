import React, {Component} from "react";
import michael from '../assets/img/MICHAEL_HAMMER.png';
import john from "../assets/img/JOHN_COSTANZA.png";


class Rencontres extends Component {
  
  render(){
    return this.props.language === "fr" ? (
      <div className="rencontres" id="rencontres-fondatrices">
        <p className="title">
          <span>DES RENCONTRES FONDATRICES</span>
        </p>
        <main>
          <div>
            <p>
              <strong>Docteur Micha&euml;l HAMMER </strong> &agrave;
              Piscattaway (New Jersey, USA), ing&eacute;nieur et auteur de
              nombreux ouvrages de management, professeur
              &eacute;m&eacute;rite au Massachusetts Institute of Technology
              (MIT), et plus particuli&egrave;rement connu comme l'un des
              fondateurs de la th&eacute;orie du{" "}
              <strong>reengineering des process</strong> d'entreprise pour
              l'obtention d'un meilleur business (BPR).
            </p>
            <img src={michael} alt="micheal hammer" />
            <p className="name">MICHA&Euml;L HAMMER</p>
          </div>
          <div>
            <p>
              <strong>John COSTANZA &agrave; Denver</strong> (Colorado,
              USA), qui fonda en 1984, the John Costanza Institute of
              Technology dont la mission originale &eacute;tait: " To
              provide the tools and techniques of{" "}
              <strong>Demand Flow Technology</strong> (DFT) to manufacturing
              corporations to lead their global competitiveness."
            </p>
            <p className="red-text">
              Au travers de ses exp&eacute;riences et rencontres,{" "}
              <strong>Max PAGNIOL</strong> a pu donc ainsi se construire une
              expertise tant sur la n&eacute;cessaire observation de la{" "}
              <strong>segmentation des march&eacute;s</strong>, que sur{" "}
              <strong>
                la remise en cause permanente des organisations
              </strong>{" "}
              face &agrave; l'&eacute;volution de ces derniers.
            </p>
            <img src={john} alt="John Costanza" />
            <p className="name">JOHN COSTANZA</p>
          </div>
        </main>
        <aside>
          <p>
            Aujourd'hui nous sommes &agrave; m&ecirc;me de vous aider
            &agrave; structurer vos organisations et m&eacute;thodes de
            management op&eacute;rationnel et{" "}
            <strong>favoriser le travail collaboratif </strong>
            en interne pour am&eacute;liorer vos r&eacute;sultats ainsi que
            l'ensemble de la gestion de vos projets de d&eacute;veloppement.
          </p>
          <p>
            Apr&egrave;s audit et diagnostic, permettant de
            <strong> situer l'entreprise </strong> sur ses march&eacute;s,
            nous identifierons avec vous{" "}
            <strong>dans le cadre de votre vision globale, </strong>
            les leviers d'am&eacute;lioration de vos performances, les
            inscrivant ainsi dans la dur&eacute;e.
          </p>
        </aside>
      </div>
    ) : this.props.language === "korea" ? (
      <div className="rencontres" id="rencontres-fondatrices">
        <p className="title">
          <span>설립계기</span>
        </p>
        <main>
          <div>
            <p>
              미국 뉴저지주 Piscattaway 에 거주하는{" "}
              <strong>미카엘 해머 (Michaël HAMMER) 씨를</strong> 만났습니다.
              미카엘 해머는 엔지니어이자 수많은 경영서적의 저자이며,
              Massachusetts Institute of Technology (MIT) 의 명예 교수로
              재직중입니다. 특히 그는 더 나은 비지니스를 위한 프로세스
              리엔지니어링 이론 (BPR) 의 창립자 중 한명으로 잘 알려져
              있습니다.
            </p>
            <img src={michael} alt="micheal hammer" />
            <p className="name">미카엘 해머 (Michaël HAMMER)</p>
          </div>
          <div>
            <p>
              막스 파니올 (Max Pagniol) 은 미국 콜로라도 주, 덴버에 거주하는
              존 <strong>코스탄차 (John COSTANZA) 와</strong> 만남을
              갖았습니다. 존 코스탄차는 1984 년 설립된 John Costanza
              Institute of Technology 의 설립자로서 &laquo; 제조 기업이 글로벌
              경쟁력을 확보할 수 있도록 도구 수요 흐름 기술 (DFT) 을 제공 &raquo;
              함을 미션으로 합니다.
            </p>
            <p className="red-text">
              막스 파니올 (Max Pagniol) 은 자신의 실무 경험과 전문가들의
              만남을 통해 시장 세분화에 대한 필수적인 관찰뿐만 아니라 조직의
              지속적인 성장에 필요한 제반 전략방향을 제시하는 것에 대한
              전문지식을 구축할 수 있었습니다.
            </p>
            <img src={john} alt="John Costanza" />
            <p className="name">코스탄차 (John COSTANZA)</p>
          </div>
        </main>
        <aside>
          <p>
            우리는 귀사의 조직 및 운영 관리 방법을 체계화하고 조직 내부의
            협업을 통해 결과를 향상시키며, 개발 프로젝트의 전반적인 관리를
            도울 수 있습니다.
          </p>
          <p>
            기업의 감사 및 진단을 마친 후, 귀사가 시장에서 자리매김할 수
            있도록 전반적인 비전을 일환으로 성과를 향상시키기 위한
            레버지리를 식별하여 장기화할 것입니다.
          </p>
        </aside>
      </div>
    ) : (
      <div className="rencontres" id="rencontres-fondatrices">
        <p className="title">
          <span>MEANINGFUL ENCOUNTERS</span>
        </p>
        <main>
          <div>
            <p>
              <strong>Doctor Micha&euml;l HAMMER </strong>in Piscattaway
              (New Jersey, USA), engineer and author of several management
              books, Professor emeritus at the Institute of Technology
              (MIT), and particularly well known as one of the founders of
              the theory of business
              <strong> process re-engineering</strong> designed to help
              organizations achieve better performance (BPR).
            </p>
            <img src={michael} alt="micheal hammer" />
            <p className="name">MICHA&Euml;L HAMMER</p>
          </div>
          <div>
            <p>
              <strong>John COSTANZA in Denver</strong> (Colorado, USA), who
              founded the John Costanza Institute of Technology in 1984,
              whose original mission was: " To provide the tools and
              techniques of
              <strong> Demand Flow Technology</strong> (DFT) to
              manufacturing corporations to lead their global
              competitiveness."
            </p>
            <p className="red-text">
              Through his experiences and encounters,{" "}
              <strong>Max PAGNIOL</strong> was able to build an expertise
              both on the necessary observation of{" "}
              <strong>market segmentation</strong>, and on the{" "}
              <strong>continuous reappraisal of organizations</strong>{" "}
              confronted to the rapid evolution of markets.
            </p>
            <img src={john} alt="John Costanza" />
            <p className="name">JOHN COSTANZA</p>
          </div>
        </main>
        <aside>
          <p>
            Today, we have the expertise to help you structure your
            organizations and operations management methods and to{" "}
            <strong>enhance in-house teamwork </strong>
            in order to generate better results and an optimized global
            management of your development projects.
          </p>
          <p>
            After a first audit and diagnosis phase, to find out
            <strong> how your company stands in relation to </strong> its
            markets, we will define with your teams, and{" "}
            <strong>in accordance with your global vision, </strong>
            the levers for improving your overall performances, and thus on
            a long term basis.
          </p>
        </aside>
      </div>
    );};
}

export default Rencontres;