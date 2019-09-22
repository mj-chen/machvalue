import React, {Component} from "react";
import MaxCover from "../assets/img/Max_Pagniol_grand.jpg";

class Cover extends Component {
  
  render() {
    const {language} = this.props;
        if (language === 'fr'){
          return(
            <div>
              <main className="cover">
                <article>
                  <h1>R&Eacute;V&Eacute;LATEUR DE VALEUR</h1>
                  <p>
                    Bon nombre de syst&egrave;mes d'entreprises sont fig&eacute;s ;
              <br /> manque d'ambition, manque de moyens, poids des habitudes.
            </p>
                  <p>
                    MachValue est un <strong>
                      &laquo; R&eacute;v&eacute;lateur de valeur &raquo;
              </strong>
                    .<br /> Nous vous faisons gagner en souffle pour am&eacute;liorer votre comp&eacute;titivit&eacute;, augmenter votre niveau de performance, booster vos projets.
            </p>
                </article>
                <img src={MaxCover} />
              </main>
              <div className="slogan">
                <p>
                  ADAPTABILIT&Eacute;
            <br />
                  &amp; ADH&Eacute;SION
          </p>
                <p>
                  PARTAGE <br />
                  DES &Eacute;QUIPES
          </p>
                <p>
                  GAGNER <br />
                  EN SOUFFLE
          </p>
              </div>
            </div>
          )
        } else if(language === 'korea'){
          return (
            <div>
              <main className="cover">
                <article>
                  <h1>가치 개발자</h1>
                  <p>
                    동기부족, 수단의 부재, 습관의 영향력으로 인하여 다수
                    기업 시스템은 경직되어 있습니다.
                </p>
                  <p>
                    MachValue 는{" "}
                    <strong>&laquo; 가치 개발자  &raquo;</strong> 입니다.<br/>
                    우리는 조직의 활력을 회복하여 기업의 경쟁력을
                    강화하고 성과 수준을 높이며, 프로젝트 향상을
                    실현하겠습니다.
                </p>
                </article>
                <img src={MaxCover} />
              </main>
              <div className="slogan">
                <p>
                  적응성
                <br />
                  &amp;응집력
              </p>
                <p>
                   조직원<br/>화합
                </p>
                <p>
                  조직<br/>활성화
                </p>
              </div>
            </div>
          );
        } else if(language === 'cn'){
          return (
            <div>
              <main className="cover">
                <article>
                  <h1>优值咨询（MachValue）</h1>
                  <p>
                    制度僵化，缺乏发展雄心，资源匮乏和旧习难改是很多公司急需解决的难题。
                  </p>
                  <p>
                    优值咨询（MachValue）致力于为公司注入发展动力，提高核心竞争力，优化项目，全面开发公司最大潜力。
                  </p>
                </article>
                <img src={MaxCover} />
              </main>
              <div className="slogan">
                <p>
                  广泛适用
                  <br />
                  &amp; 专业团队认证
                </p>
                <p>
                  团队共享
                </p>
                <p>
                   注入发展动力
                </p>
              </div>
            </div>
          );
        }
        else{
          return (
            <div>
              <main className="cover">
                <article>
                  <h1>VALUE ENHANCER</h1>
                  <p>
                    A large number of business systems are frozen ;
              <br /> Lack of ambition, lack of resources, enduring habits.
            </p>
                  <p>
                    MachValue is a <strong>&laquo; value enhancer &raquo;</strong>
                    .<br /> We help you gain momentum to improve your competitiveness, increase your level of performance and boost your projects.
            </p>
                </article>
                <img src={MaxCover} />
              </main>
              <div className="slogan">
                <p>
                  ADAPTABILITY
            <br />
                  &amp; ENDORSEMENT
          </p>
                <p>
                  TEAM <br />
                  SHARING
          </p>
                <p>
                  GAIN <br />
                  MOMENTUM
          </p>
              </div>
            </div>
          )
        }
  }
}

export default Cover;