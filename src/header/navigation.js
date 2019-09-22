import React,{Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom";
import {HashLink } from 'react-router-hash-link';

import Flags from "./flags";

export const makeNav = (NavComponent )=> {

  class MainNav extends React.Component {
    render() {
      const {forwardedRef} = this.props;
      return <NavComponent 
              ref={forwardedRef} 
              {...this.props}
             />
    }
  }

  return React.forwardRef((props, ref) => {
    return <MainNav {...props} forwardedRef={ref}/>
  })
}

export class Nav extends Component  {
  render(){
    const { language, navigateTo } = this.props;
    return (
      <nav className="hidden" id="mainNav" ref={navRef}>
        <ul className={language === 'korea' ? 'korea' : ''}>
          <li>
            <span>
              {language === "fr" ? (
                <Link to="/nous"> QUI SOMMES-NOUS ?</Link>
              ) : language === "korea" ? (
                <Link to="/nous"> 회사소개</Link>
                ) : language === "cn" ? (<Link to="/nous"> 关于我们</Link>): (
                    <Link to="/nous"> ABOUT US </Link>
                  )}
            </span>
            <ul>
              <li>
                <span>
                  {language === "fr" ? (
                    <HashLink
                      to="/nous#fondateur"
                      scroll={el => navigateTo(el)}
                    >
                      Fondateur
                        </HashLink>
                  ) : language === "korea" ? (
                    <HashLink
                      to="/nous#fondateur"
                      scroll={el => navigateTo(el)}
                    >
                      설립자
                        </HashLink>
                    ) : language === "cn" ? (<HashLink
                      to="/nous#fondateur"
                      scroll={el => navigateTo(el)}
                    >
                    创始人
                        </HashLink>): (
                        <HashLink
                          to="/nous#fondateur"
                          scroll={el => navigateTo(el)}
                        >
                          FOUNDER
                        </HashLink>
                      )}
                </span>
              </li>
              <li>
                <span>
                  {language === "fr" ? (
                    <HashLink
                      to="/nous#rencontres-fondatrices"
                      scroll={el => navigateTo(el)}
                    >
                      Des rencontres fondatrices
                        </HashLink>
                  ) : language === "korea" ? (
                    <HashLink
                      to="/nous#rencontres-fondatrices"
                      scroll={el => navigateTo(el)}
                    >
                      설립계기
                    </HashLink>
                    ) : language === "cn" ? (
                    <HashLink
                      to="/nous#rencontres-fondatrices"
                      scroll={el => navigateTo(el)}
                    >
                    启发人
                      
                    </HashLink>): (
                        <HashLink
                          to="/nous#rencontres-fondatrices"
                          scroll={el => navigateTo(el)}
                        >
                          Meaningful encounters
                        </HashLink>
                      )}
                </span>
              </li>
              <li>
                <span>
                  {language === "fr" ? (
                    <HashLink
                      to="/nous#nos-valeurs"
                      scroll={el => navigateTo(el)}
                    >
                      Nos valeurs
                        </HashLink>
                  ) : language === "korea" ? (
                    <HashLink
                      to="/nous#nos-valeurs"
                      scroll={el => navigateTo(el)}
                    >
                      회사가치
                        </HashLink>
                    ) : language === "cn" ? (<HashLink
                      to="/nous#nos-valeurs"
                      scroll={el => navigateTo(el)}
                    >
                      我们的价值观
                        </HashLink>): (
                        <HashLink
                          to="/nous#nos-valeurs"
                          scroll={el => navigateTo(el)}
                        >
                          Our values
                        </HashLink>
                      )}
                </span>
              </li>
              <li>
                <span>
                  {language === "fr" ? (
                    <HashLink
                      to="nous#nos-atouts"
                      scroll={el => navigateTo(el)}
                    >
                      Nos atouts
                        </HashLink>
                  ) : language === "korea" ? (
                    <HashLink
                      to="nous#nos-atouts"
                      scroll={el => navigateTo(el)}
                    >
                      경영이념
                        </HashLink>
                    ) : language === "cn" ? (<HashLink
                      to="nous#nos-atouts"
                      scroll={el => navigateTo(el)}
                    >
                      我们的优势
                        </HashLink>):(
                        <HashLink
                          to="nous#nos-atouts"
                          scroll={el => navigateTo(el)}
                        >
                          Our strengths
                        </HashLink>
                      )}
                </span>
              </li>
              <li>
                <span>
                  {language === "fr" ? (
                    <HashLink
                      to="/nous#notre-&eacute;quipe"
                      scroll={el => navigateTo(el)}
                    >
                      Notre &eacute;quipe
                        </HashLink>
                  ) : language === "korea" ? (
                    <HashLink
                      to="/nous#notre-&eacute;quipe"
                      scroll={el => navigateTo(el)}
                    >
                      조직원소개
                        </HashLink>
                    ) : language === 'cn' ? (<HashLink
                      to="/nous#notre-&eacute;quipe"
                      scroll={el => navigateTo(el)}
                    >
                      我们的团队
                        </HashLink>):(
                        <HashLink
                          to="/nous#notre-&eacute;quipe"
                          scroll={el => navigateTo(el)}
                        >
                          Our team
                        </HashLink>
                      )}
                </span>
              </li>
              <li>
                <span>
                  {language === "fr" ? (
                    <HashLink
                      to="/nous#nos-partenaires"
                      scroll={el => navigateTo(el, 300)}
                    >
                      Nos partenaires
                        </HashLink>
                  ) : language === "korea" ? (
                    <HashLink
                      to="/nous#nos-partenaires"
                      scroll={el => navigateTo(el, 300)}
                    >
                      파트너
                        </HashLink>
                    ) : language === "cn" ? (<HashLink
                      to="/nous#nos-partenaires"
                      scroll={el => navigateTo(el, 300)}
                    >
                      合作单位
                        </HashLink>):(
                        <HashLink
                          to="/nous#nos-partenaires"
                          scroll={el => navigateTo(el, 300)}
                        >
                          Our partners
                        </HashLink>
                      )}
                </span>
              </li>
            </ul>
          </li>
          <li className={language === "en" ? "business" : ""}>
            <span>
              {language === "fr" ? (
                <Link to="/m&eacute;tiers">NOS M&Eacute;TIERS</Link>
              ) : language === "korea" ? (
                <Link to="/m&eacute;tiers">사업영역</Link>
                ) : language === "cn" ? (<Link to="/m&eacute;tiers">业务范畴</Link>): (
                    <Link to="/m&eacute;tiers">OUR BUSINESSES</Link>
                  )}
            </span>
            <ul>
              <li>
                <span>
                  {language === "fr" ? (
                    <HashLink
                      to="/m&eacute;tiers#comp&eacute;titivit&eacute;-et-vitesse-de-d&eacute;veloppement"
                      scroll={el => navigateTo(el)}
                    >
                      Comp&eacute;titivit&eacute; &amp; vitesse de
                      d&eacute;veloppement
                        </HashLink>
                  ) : language === "korea" ? (
                    <HashLink
                      to="/m&eacute;tiers#comp&eacute;titivit&eacute;-et-vitesse-de-d&eacute;veloppement"
                      scroll={el => navigateTo(el)}
                    >
                      경쟁력과&amp;개발속도
                        </HashLink>
                    ) : language === "cn" ? (<HashLink
                      to="/m&eacute;tiers#comp&eacute;titivit&eacute;-et-vitesse-de-d&eacute;veloppement"
                      scroll={el => navigateTo(el)}
                    >
                      竞争力和发展速度
                        </HashLink>): (
                        <HashLink
                          to="/m&eacute;tiers#comp&eacute;titivit&eacute;-et-vitesse-de-d&eacute;veloppement"
                          scroll={el => navigateTo(el)}
                        >
                          Competitiveness and development pace
                        </HashLink>
                      )}
                </span>
              </li>
              <li>
                <span>
                  {language === "fr" ? (
                    <HashLink
                      to="/m&eacute;tiers#reengineering-des-process"
                      scroll={el => navigateTo(el)}
                    >
                      Reengineering des process
                        </HashLink>
                  ) : language === "korea" ? (
                    <HashLink
                      to="/m&eacute;tiers#reengineering-des-process"
                      scroll={el => navigateTo(el)}
                    >
                      리엔지니어링 프로세스
                        </HashLink>
                    ) : language === "cn" ? (<HashLink
                      to="/m&eacute;tiers#reengineering-des-process"
                      scroll={el => navigateTo(el)}
                    >
                      战略重塑
                        </HashLink>): (
                        <HashLink
                          to="/m&eacute;tiers#reengineering-des-process"
                          scroll={el => navigateTo(el)}
                        >
                          Process re-engineering
                        </HashLink>
                      )}
                </span>
              </li>
              <li>
                <span>
                  {language === "fr" ? (
                    <HashLink
                      to="/m&eacute;tiers#prospection-commerciale"
                      scroll={el => navigateTo(el)}
                    >
                      Prospection commerciale
                        </HashLink>
                  ) : language === "korea" ? (
                    <HashLink
                      to="/m&eacute;tiers#prospection-commerciale"
                      scroll={el => navigateTo(el)}
                    >
                      사업전망
                        </HashLink>
                    ) : language === "cn" ? (<HashLink
                      to="/m&eacute;tiers#prospection-commerciale"
                      scroll={el => navigateTo(el)}
                    >
                      商业勘探
                        </HashLink>): (
                        <HashLink
                          to="/m&eacute;tiers#prospection-commerciale"
                          scroll={el => navigateTo(el)}
                        >
                          Prospecting
                        </HashLink>
                      )}
                </span>
              </li>
              <li>
                <span>
                  {language === "fr" ? (
                    <HashLink
                      to="/m&eacute;tiers#mentoring"
                      scroll={el => navigateTo(el)}
                    >
                      Mentoring
                        </HashLink>
                  ) : language === "korea" ? (
                    <HashLink
                      to="/m&eacute;tiers#mentoring"
                      scroll={el => navigateTo(el)}
                    >
                      멘토링
                        </HashLink>
                    ) : language === "cn" ? (<HashLink
                      to="/m&eacute;tiers#mentoring"
                      scroll={el => navigateTo(el)}
                    >
                      指导
                        </HashLink>): (
                        <HashLink
                          to="/m&eacute;tiers#mentoring"
                          scroll={el => navigateTo(el)}
                        >
                          Mentoring
                        </HashLink>
                      )}
                </span>
              </li>
            </ul>
          </li>
          <li>
            <span>
              {language === "fr" ? (
                <Link to="/comp&eacute;tences">
                  NOS COMP&Eacute;TENCES
                    </Link>
              ) : language === "korea" ? (
                <Link to="/comp&eacute;tences">조직역량</Link>
              ) : (
                    <Link to="/comp&eacute;tences">OUR SKILLS</Link>
                  )}
            </span>
            <ul>
              <li>
                <span>
                  {language === "fr" ? (
                    <HashLink
                      to="/comp&eacute;tences#m&eacute;thodologie"
                      scroll={el => navigateTo(el)}
                    >
                      M&eacute;thodologie
                        </HashLink>
                  ) : language === "korea" ? (
                    <HashLink
                      to="/comp&eacute;tences#m&eacute;thodologie"
                      scroll={el => navigateTo(el)}
                    >
                      경영전략
                        </HashLink>
                    ) : language === "cn" ? (<HashLink
                      to="/comp&eacute;tences#m&eacute;thodologie"
                      scroll={el => navigateTo(el)}
                    >
                      方法论
                        </HashLink>):(
                        <HashLink
                          to="/comp&eacute;tences#m&eacute;thodologie"
                          scroll={el => navigateTo(el)}
                        >
                          Methodology
                        </HashLink>
                      )}
                </span>
              </li>
              <li>
                <span>
                  {language === "fr" ? (
                    <HashLink
                      to="/comp&eacute;tences#rencontres"
                      scroll={el => navigateTo(el)}
                    >
                      Rencontres
                        </HashLink>
                  ) : language === "korea" ? (
                    <HashLink
                      to="/comp&eacute;tences#rencontres"
                      scroll={el => navigateTo(el)}
                    >
                      연구원 소개
                        </HashLink>
                    ) : language === "cn" ? (<HashLink
                      to="/comp&eacute;tences#rencontres"
                      scroll={el => navigateTo(el)}
                    >
                      启发人
                        </HashLink>):(
                        <HashLink
                          to="/comp&eacute;tences#rencontres"
                          scroll={el => navigateTo(el)}
                        >
                          Meaningful encounters
                        </HashLink>
                      )}
                </span>
              </li>
            </ul>
          </li>
          <li>
            <span>
              {language === "fr" ? (
                <Link to="/actualit&eacute;s">
                  ACTUALIT&Eacute;S
                    </Link>
              ) : language === 'korea' ?
                  (
                    <Link to="/actualit&eacute;s">뉴스레터</Link>
                  ) : language === "cn" ? (<Link to="/actualit&eacute;s">公司动态</Link>):
                  (
                    <Link to="/actualit&eacute;s">NEWS</Link>
                  )}
            </span>
          </li>
          <li>
            <span>
              {
                language === 'korea' ?
                  <Link to="/contact">연락처</Link> : 
                  language === "cn" ? <Link to="/contact">联系我们</Link>:
                  <Link to="/contact">CONTACT</Link>
              }
            </span>
          </li>
          <li>
            <Flags
              changeLanguage={lg => this.props.changeLanguage(lg)}
            />
          </li>
        </ul>
      </nav>
    );
  }
  
}

export const navRef = React.createRef();

export const Navigation = makeNav(Nav);



