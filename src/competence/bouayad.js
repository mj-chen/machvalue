import React,{Component} from "react";
import bouayad from "../assets/img/ANIS_BOUAYAD.png";

class Bouayad extends Component{

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
          <div id="bouayad">
            <div onClick={e => this.open(e.currentTarget)}>
              <p className="title">
                <span>ANIS BOUAYAD</span>
              </p>
            </div>
            <article className="hidden" ref={this.article}>
              <div>
                <img src={bouayad} alt="anis bouayad" />
              </div>
              {language === "fr" ? (
                <div>
                  <p>
                    Dans la continuit&eacute; de Jean-Louis SWINERS, une
                    expression d'Anis BOUYAD pourrait &ecirc;tre{" "}
                    <strong>
                      &laquo; Pour gagner la guerre, il faut trouver la
                      bonne alliance &raquo;.
                    </strong>
                  </p>
                  <p>
                    C'est ainsi que dans son livre &laquo; Les alliances
                    strat&eacute;giques, ma&icirc;triser les facteurs
                    cl&eacute;s du succ&egrave;s &raquo;, Anis
                    d&eacute;veloppe l'id&eacute;e simple que &laquo;
                    mieux vaut se d&eacute;velopper et vivre avec
                    d'autres que r&eacute;gresser et mourir seul
                    &raquo;.
                  </p>
                </div>
              ) : language === "korea" ? (
                <div>
                  <p>
                    장-루이 스위너 (JEAN-LOUIS SWINERS) 의 연속선상에서
                    아니스 부아야 (ANIS BOUAYAD) 의 한 표현 « 전쟁에서
                    승리하려면 올바른 동맹국을 찾아야 한다 » (Pour gagner
                    la guerre, il faut trouver la bonne alliance) 은
                    맥락을 같이할 수 있습니다.
                  </p>
                  <p>
                    그의 저서 « 전략적 제휴, 성공의 열쇠를 지배한다 »
                    (Les alliances stratégiques, maîtriser les facteurs
                    clés du succès) 에서 ANIS는 « 퇴보하고 혼자 죽는
                    것보다 다른 사람들과 함께 생활하고 발전하는 것이
                    낫다 » 라고 합니다.
                  </p>
                </div>
              ) : (
                <div>
                  <p>
                    In keeping with Jean-Luis Swiners, an expression of
                    Anis BOUYAD could be{" "}
                    <strong>
                      &laquo; In order to win the war, we must find the
                      right alliance &raquo;
                    </strong>
                    .
                  </p>
                  <p>
                    Indeed, in his book &laquo; Les alliances
                    stratégiques, maîtriser les facteurs clés du succès
                    &raquo;, (Strategic alliances, mastering the key
                    factors of success), Anis develops the simple idea
                    that &laquo; it is better to evolve and live with
                    others than regress and die alone &raquo;.
                  </p>
                </div>
              )}
              {language === "fr" ? (
                <div>
                  <p>
                    Anis BOUYAD est Docteur en Sciences de gestion,
                    sp&eacute;cialis&eacute; dans le conseil en
                    strat&eacute;gie, avec cette singularit&eacute;
                    qu'il observe finement tous les changements de notre
                    monde (politique, soci&eacute;tal,
                    g&eacute;opolitique, climatique,
                    &eacute;nerg&eacute;tique,...)
                  </p>
                  <p>
                    Pragmatique, il a toujours apport&eacute; dans ses
                    analyses, les outils mettant en lecture ces
                    changements.
                  </p>
                </div>
              ) : language === "korea" ? (
                <div>
                  <p>
                    아니스 부아야 (ANIS BOUAYAD) 는 전략 컨설팅 전문 경영
                    과학 박사로서 세계 (정치, 사회, 지정학, 기후학,
                    에너지학 등) 의 모든 변화를 정밀하게 관찰하는 능력이
                    탁월합니다.
                  </p>
                  <p>
                    실질적으로 그는 항상 이러한 변화를 일으키는 도구를
                    자신의 분석에 도입했습니다.
                  </p>
                </div>
              ) : (
                <div>
                  <p>
                    Anis BOUYAD is a Doctor in management sciences,
                    specialized in strategic consulting, enhanced by his
                    keen observations of all the changes in the world
                    (political, societal, geopolitical, climatic,
                    energetics...)
                  </p>
                  <p>
                    In his pragmatic approach, his analyses are always
                    supported by tools allowing to demonstrate these
                    changes.
                  </p>
                </div>
              )}
            </article>
          </div>
        );
    }
    
}

export default Bouayad;