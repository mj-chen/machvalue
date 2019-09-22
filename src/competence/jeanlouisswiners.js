import React,{Component} from "react";
import Swinners from "../assets/img/Swinners.png";

class Swiners extends Component {
  constructor(props) {
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
          <div id="swiners">
            <div onClick={() => this.open()}>
              <p className="title">
                <span>JEAN-LOUIS SWINERS</span>
              </p>
            </div>
            <article className="hidden" ref={this.article}>
              <div>
                <img src={Swinners} alt="Jean Louis Swinners" />
              </div>
              {language === "fr" ? (
                <div>
                  <p>
                    Max PAGNIOL a rencontr&eacute; Jean-Louis SWINERS
                    &agrave; l'occasion de s&eacute;minaires EBS et CRC
                    &agrave; HEC Paris.
                  </p>
                  <p>
                    Jean-Louis SWINERS est un photographe
                    fran&ccedil;ais, qui a d&eacute;montr&eacute; depuis
                    de nombreuses ann&eacute;es sa capacit&eacute;
                    &agrave;{" "}
                    <strong>comprendre les choses de ce monde</strong>{" "}
                    et &agrave; ce titre d&eacute;montr&eacute; les
                    multiples facettes de son talent. Il a
                    d&eacute;j&agrave; eu le Prix Ni&egrave;pce en 62.
                    Apr&egrave;s avoir &eacute;t&eacute; photographe,
                    journaliste et publicitaire, il devient &agrave;
                    partir des ann&eacute;es 80, enseignant en marketing
                    et strat&eacute;gie &agrave; l'European Business
                    School de Paris et &agrave; HEC, ainsi qu'au CRC. Il
                    publira ainsi en 92 un livre qui fut un choc dans la
                    profession du{" "}
                    <strong>marketing strat&eacute;gique.</strong>
                  </p>
                  <p>
                    La r&eacute;alit&eacute; d&eacute;montre que nos
                    entreprises sont v&eacute;ritablement et
                    continuellement en guerre; on ne doit plus faire du
                    marketing mais du <strong>warketing !</strong>
                  </p>
                </div>
              ) : language === "korea" ? (
                <div>
                  <p>
                    막스 파니올 (Max Pagniol) 은 프랑스 경영대학 HEC
                    Paris 에서 진행되는 EBS et CRC 의 세미나에서 장-루이
                    스위너 (JEAN-LOUIS SWINERS) 를 만났습니다.
                  </p>
                  <p>
                    장-루이 스위너 (JEAN-LOUIS SWINERS) 는 프랑스의 사진
                    작가로서 오랜 세월 동안 세상을 이해하는 능력을 보여
                    주었고 다방면에서 그의 재능을 펼쳐왔습니다. 그는 이미
                    62 세에 니페스상 (Prix Nièpce , Gens d' images 협회가
                    수여하는 연례 사진 상) 을 수여하였습니다. 사진가,
                    저널리스트 및 감독으로 역임한 후 1980년대 부터는
                    파리 유럽 비지니스 스쿨과 HEC에서 마케팅 및 전략의
                    교수로 활동했습니다. 그리고 92v세의 나이에 전략적
                    마케팅 전문가로서 충격적인 책 한권을 발표합니다.
                  </p>
                  <p>
                    실제로 기업은 끊임없는 전쟁의 상황에 있음을
                    보여줍니다: 우리는 마케팅을 해서는 안되지만
                    마케팅을 해야합니다 !
                  </p>
                </div>
              ) : (
                <div>
                  <p>
                    Max PAGNIOL met Jean-Louis SWINERS during EBS and
                    CRC seminars that took place in HEC Paris.
                  </p>
                  <p>
                    Jean-Louis SWINERS is a French photographer, who has
                    demonstrated for many years his keen ability to
                    <strong>
                      {" "}
                      understand the things of the world
                    </strong>{" "}
                    and as such, the many facets of his talent. He was
                    awarded the Prix Nièpce in 1962. After working as a
                    photographer, journalist and publicist, he started
                    in the 80’s a new career as a marketing and strategy
                    professor at the European Business School in Paris,
                    at HEC and at CRC. In 1992, he published a book that
                    created tremendous shock in the{" "}
                    <strong>strategic marketing</strong> sector.
                  </p>
                  <p>
                    Reality shows that our companies are truly and
                    continuously at war. Marketing times are over, now
                    we should switch to <strong>warketing</strong>!
                  </p>
                </div>
              )}
              {language === "fr" ? (
                <div>
                  <p>
                    &Ecirc;tre intelligent ne suffit pas, il faut se
                    mettre sur le pied de guerre, pour s'agu&eacute;rrir
                    dans les analyses concurrentielles, et ainsi aller
                    au-del&agrave; de &laquo; faire du commerce &raquo;,
                    &ecirc;tre plus strat&egrave;ge.
                  </p>
                  <p>
                    Plus tard, il &eacute;crira aussi &laquo;
                    L'intelligence cr&eacute;ative : au-del&agrave; du
                    brainstorming &raquo;, paru en 2004, qui confirme
                    que <strong>tout probl&egrave;me</strong> a au moins{" "}
                    <strong>trois solutions,</strong> et que sans avoir
                    trouv&eacute; au moins trois solutions
                    diff&eacute;rentes, l'&eacute;quipe doit revoir sa
                    copie, jusqu'&agrave; ce qu'elle les trouve. Ainsi
                    par rebonds successifs, le vrai changement, la{" "}
                    <strong>v&eacute;ritable innovation</strong>{" "}
                    na&icirc;tra...
                  </p>
                  <p>
                    Le meilleur moyen de lutter contre la concurrence
                    &eacute;tant la{" "}
                    <strong>pens&eacute;e cr&eacute;ative.</strong> 2015
                    verra son retour &agrave; la photographie et au
                    m&eacute;tier de r&eacute;dacteur.
                  </p>
                </div>
              ) : language === "korea" ? (
                <div>
                  <p>
                    영리함만으로는 충분하지 않습니다. 전쟁터에 직접 뛰어
                    들어 경쟁분석을 단련하고 « 무역 » 으 뛰어 넘어 진정한
                    전략가가 되어야 합니다.
                  </p>
                  <p>
                    2004년, 그는 « 창조적 지능: 브레인 스토밍을
                    너머 » (L’intelligence créative: au-delà du
                    brainstorming) 를 출간합니다. 그는 책속에서 어떠한
                    문제든 최소 세가지 해결책이 있으며 적어도 세가지
                    다른 해결책을 조직은 반복적으로 찾을 때까지 검토해야
                    한다고 확언합니다. 이 과정을 통해 지속적인 리바운드,
                    진정한 변화, 실질적인 혁신이 탄생됩니다.
                  </p>
                  <p>
                    경쟁에 맞서는 가장 효과적인 방법은 창의적인
                    사고입니다. 2015 년 그는 사진작가와 편집자로서
                    복귀합니다.
                  </p>
                </div>
              ) : (
                <div>
                  <p>
                    Being smart is not enough, we have to be ready to
                    fight, to gain experiences in competitive analyses
                    and therefore to go beyond simply &laquo; trading
                    &raquo;, to become better strategists.
                  </p>
                  <p>
                    He also wrote later &laquo; Creative intelligence:
                    beyond brainstorming &raquo; published in 2004, in
                    which he explains that <strong>any problem</strong>{" "}
                    has at least <strong>three solutions</strong>,
                    therefore any team that is unable to come up with at
                    least three different solutions must review their
                    work until they do. Thus, by successive rebounds,
                    real change and <strong>true innovation</strong>{" "}
                    will emerge...
                  </p>
                  <p>
                    The best way to fight against competition is{" "}
                    <strong>creative thinking</strong>. In 2015,
                    Jean-Louis Swiners returned to photography and copy
                    writing.
                  </p>
                </div>
              )}
            </article>
          </div>
        );
    }
    
}

export default Swiners;
