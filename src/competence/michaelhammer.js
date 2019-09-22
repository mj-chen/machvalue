import React,{Component} from "react";
import michael from "../assets/img/MICHAEL_HAMMER.png";

class MichaelHammer extends Component {
  constructor(props) {
    super(props);
    this.article = React.createRef();
  }

  open = div => {
    if (window.innerWidth < 768) {
      this.article.current.classList.toggle("hidden");
    }
  };

  render() {
    const {language} = this.props;
    return (
      <div id="hammer">
        <div onClick={() => this.open()}>
          <p className="title">
            <span>MICHA&euml;L HAMMER</span>
          </p>
        </div>
        <article className="hidden" ref={this.article}>
          <div>
            <img src={michael} alt="michael hammer" />
          </div>
          {language === "fr" ? (
            <div>
              <p>
                Micha&euml;l HAMMER fut le p&egrave;re avec son
                coll&egrave;gue CHAMPY de la m&eacute;thode du{" "}
                <strong>Reengineering</strong> (r&eacute;ing&eacute;nierie)
                des processus de gestion (le BPR ou Business Process
                Reengineering). L'id&eacute;e maitresse d&eacute;fendue qui
                est{" "}
                <strong>
                  la remise en cause fondamentale de l'organisation avec une
                  reconception radicale des processus organisationnels,
                </strong>{" "}
                permet de r&eacute;aliser des am&eacute;liorations
                spectaculaires de performances sur les co&ucirc;ts, les
                services et la rapidit&eacute;.
              </p>
              <p>
                Plut&ocirc;t que d'organiser une soci&eacute;t&eacute; en
                sp&eacute;cialit&eacute;s fonctionnelles (comme la
                production, la comptabilit&eacute;, le marketing, etc.) et
                pour regarder les t&acirc;ches que chaque fonction
                r&eacute;alise, Micha&euml;l HAMMER recommande que nous
                regardions les processus complets, d'une fa&ccedil;on{" "}
                <strong>plus transversale.</strong>
              </p>
              <p>
                De l'acquisition des mati&egrave;res, en passant par la
                production, le marketing et la distribution, nous devrions
                reconstruire la soci&eacute;t&eacute; comme une s&eacute;rie
                de processus, une sorte d'organisation base z&eacute;ro.
              </p>
            </div>
          ) : language === "korea" ? (
            <div>
              <p>
                미카엘 해머 (Michaël HAMMER) 는 그의 동료인 CHAMPY 와 함께 관리
                프로세스 (BPR 또는 BP 재구성) 의 리엔지니어링 방법론의
                아버지였습니다. 조직 프로세스를 근본적으로 재 설계하고자했던
                주요 아이디어는 비용, 서비스 및 신속성에 대한 성과를
                극적으로 향상시킵니다.
              </p>
              <p>
                기업을 각 기능별 (예:생산,회계,마케팅 등) 로 세분화하여
                업무를 살펴보기 보다는 미카엘 해머 (Michaël HAMMER) 는
                프로세스 전체를 횡단적으로 살펴볼 것을 권장합니다.
              </p>
              <p>
                생산, 마케팅 및 유통에 이르기까지 기업은 사회를 일련의
                프로세스, 즉 제로 기반 조직의 일종으로 재건해야 합니다.
              </p>
            </div>
          ) : (
            <div>
              <p>
                Micha&euml;l HAMMER is the founder, with his colleague
                CHAMPY, of the <strong>Reengineering</strong> (management
                process) method (the BPR or Business Process Reengineering).
                The central idea is{" "}
                <strong>
                  a fundamental reconsideration of the organization operated
                  by a radical redesign of organizational processes
                </strong>
                , resulting in dramatic improvements in performances (cost
                reduction, customer service and global efficiency).
              </p>
              <p>
                Rather than organizing a company into functional specialties
                (production, accounting, marketing, etc.) and to look into
                the tasks performed by each fun Micha&euml;l HAMMER
                recommends a full-scale recreation of processes, using a{" "}
                <strong>more transversal</strong> approach.
              </p>
              <p>
                All processes are concerned: acquisition of materials,
                production, marketing and distribution. The organization has
                to be rebuilt as a series of processes, like a zero-base
                organization.
              </p>
            </div>
          )}
          {language === "korea" ? (
            <div>
              <p>
                리엔지니어링은 조직에 적용되는 체계의 « 필연적 » 인 과정이만,
                발생하는 위험요소를 충분히 예측하고 특히 조직 내의 인간적,
                사회적 및 심치적 차원을 소홀히 해서는 안됩니다.
              </p>
              <p>
                본 과정에서는 균형과 일관성이 우선되어야 합니다.
                리엔지니어링은 단순한 해소나 축소가 아닌 역량 및 지식의
                손실과 같은 회사의 지속성에 영향을 미치는 중대한 결과를
                가져올 수 있기 때문입니다. 막스 파니올 (Max Pagniol) 은
                아메리칸 스탠다드 그룹 (AMERICAN STANDARD Group) 에
                근무하면서 미카엘 해머 (Michaël HAMMER) 을 알게되었습니다.
                그는 1996 년 타임지가 선정한 미국에서 가장 영향력있는 25 인
                중의 한명이었습니다.
              </p>
            </div>
          ) : language === "fr" ? (
            <div>
              <p>
                Le reengineering est un &laquo; must &raquo; de la
                syst&eacute;mique appliqu&eacute;e &agrave; l'organisation,
                mais il faut bien s&ucirc;r prendre toute la mesure des
                risques encourus et surtout ne pas oublier les dimensions
                humaine, sociale et psychologique induites par les
                syst&egrave;mes organisationnels.
              </p>
              <p>
                <strong>Le juste milieu</strong> et la{" "}
                <strong>coh&eacute;rence</strong> doivent pr&eacute;dominer
                dans ce type d'exercice. Le reengineering n'est pas une
                machine &agrave; licencier et diminuer les effectifs car
                cela peut produire des r&eacute;sultats catastrophiques pour
                la p&eacute;rennit&eacute; de l'entreprise : perte de
                mati&egrave;re grise, de comp&eacute;tence et de
                connaissance. Max PAGNIOL a connu Micha&euml;l HAMMER
                lorsqu'il op&eacute;rait pour la division Sanitaire du
                Groupe AMERICAN STANDARD en Europe. Micha&euml;l HAMMER a
                &eacute;t&eacute; l'une des 25 personnalit&eacute;s les plus
                influentes d'Am&eacute;rique selon la liste du Time Magazine
                &eacute;tablie en 1996.
              </p>
            </div>
          ) : (
            <div>
              <p>
                Re-engineering is THE best-in-class holistic approach
                applied to organizations. Yet the potential risks incurred
                should be clearly assessed, and especially the human, social
                and psychological aspects inherent to organizational systems
                should not be discarded.
              </p>
              <p>
                <strong>Good compromise</strong> and{" "}
                <strong>consistency</strong> are paramount in this type of
                exercise. Re-engineering is not a &laquo; lay -off machine
                &raquo; used to reduce staff, which could induce disastrous
                results for the long term existence of the company: loss of
                brainpower, skills and knowledge. Max PAGNIOL met
                Micha&euml;l Hammer when he worked for the Sanitary Division
                of the AMERICAN STANDARD group in Europe Micha&euml;l HAMMER
                was one of the 25 influential American personalities,
                according to the Time Magazine (1996) list established in
                1996.
              </p>
            </div>
          )}
        </article>
      </div>
    );
  }
}

export default MichaelHammer;