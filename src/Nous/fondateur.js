import React, {Component} from "react";
import max from "../assets/img/MaxPagniol.jpg";

class Fondateur extends Component {
  
  render() {
    return this.props.language === "fr" ? (
      <div className="fondateur" id="fondateur">
        <p className="title">
          <span>FONDATEUR</span>
        </p>
        <main>
          <img src={max} />
          <div>
            <p>
              Max PAGNIOL, Ing&eacute;nieur ENSAIT,Grande &Eacute;cole base
              ENSAM et Master-DESS en marketing et finance a fait
              l'essentiel de sa carri&eacute;re dans des goupes
              internationaux (
              <span>
                {" "}
                Akzo-Nobel, Rh&ocirc;ne-Poulenc, American Standard, Sfpi,{" "}
              </span>
              etc...).
            </p>
            <p>
              Il a exerc&eacute; tous les m&eacute;tiers structurant
              l'approche des march&eacute;s et le management des
              &eacute;quipes: vendeur terrain, chef des ventes, directeur
              commercial et marketing, directeur industriel, directeur
              g&eacute;n&eacute;ral, directeur de division, CEO,...
            </p>
          </div>
        </main>
        <aside>
          <p>
            &laquo; Aujourd'hui nous sommes &agrave; m&ecirc;me de vous
            aider &agrave; structurer vos m&eacute;thodes de management
            op&eacute;rationnel. &raquo;
          </p>
        </aside>
      </div>
    ) : this.props.language === "korea" ? (
      <div className="fondateur" id="fondateur">
        <p className="title">
          <span>설립자</span>
        </p>
        <main>
          <img src={max} />
          <div>
            <p>
              막스 파니올 (Max Pagniol), 엔지니어ENSAIT, 파리 테크
              국립고등기술 공예학교 (ENSAM) 에 기초를 둔 명문학교, 마케팅 및
              금융 대학원 학위를 취득 하였으며 국제그룹 (Akzo-Nobel,
              Rhône-Poulenc, American Standard, Sfpi, 등) 에서의 수년간
              경력을 쌓았습니다.
            </p>
            <p>
              그는 시장의 접근 방식과 팀 운영방식을 구조화하는 모든 거래를
              수행하였습니다 : 판매원, 판매 책임자, 고객지원 및 마케팅
              관리자, 산업 감독자, 본부장, 이사장 및 CEO 등…
            </p>
          </div>
        </main>
        <aside>
          <p>
            &laquo; 오늘날, 우리는 기업의 운영관리방법을 체계화하는데 도움을
            줄 수 있습니다 &raquo;
          </p>
        </aside>
      </div>
    ) : (
      <div className="fondateur" id="fondateur">
        <p className="title">
          <span>FOUNDER</span>
        </p>
        <main>
          <img src={max} />
          <div>
            <p>
              Max Pagniol, ENSAIT engineer, Grande Ecole ENSAM (Graduate
              school of engineering) Masters degree in marketing and
              engineering. He has spent most of his professional career in
              international groups(
              <span>
                {" "}
                Akzo-Nobel, Rh&ocirc;ne-Poulenc, American Standard, Sfpi,{" "}
              </span>
              etc...).
            </p>
            <p>
              He has held several positions in team management and
              elaboration of new market approaches: field salesman, Head of
              Sales, marketing and sales manager, industrial manager, Chief
              Executive, Division manager, CEO...
            </p>
          </div>
        </main>
        <aside>
          <p>
            &laquo; Today, we have the expertise to help you structure your
            operations management methods. &raquo;
          </p>
        </aside>
      </div>
    );
  }
};

export default Fondateur;
