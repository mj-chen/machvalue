import React, {Component} from "react";
import SVGIcon from "../svgIcons/icons";

class Rencontres extends Component {

  render(){
     const {language} = this.props;
     return (
       language === 'fr'?
      <div className="rencontres-important" id="rencontres">
        <div>
          <p className="title">
            <span>RENCONTRES</span>
          </p>
        </div>
        <article>
          <div>
            <h2>Qui sont-ils ?</h2>
            <p>
              Pour Max PAGNIOL certaines rencontres ont marqu&eacute; son
              parcours.
            </p>
            <p>
              Elles lui ont permis non seulement de <strong>
                structurer son approche des march&eacute;s
              </strong> et des probl&egrave;mes auxquels il faut faire face, mais aussi de prendre conscience que le fonctionnement de l'entreprise s'inscrit toujours dans <strong
              >
                {" "}
                le champ soci&eacute;tal.
              </strong>
            </p>
          </div>
          <ul>
                <li><SVGIcon name="portrait"/><a href="#hammer"><strong>MICHA&Euml;L HAMMER</strong></a></li>
                <li><SVGIcon name="portrait" /><a href="#costanza"><strong>JOHN COSTANZA</strong></a></li>
                <li><SVGIcon name="portrait" /><a href="#swiners"><strong>JEAN-LOUIS SWINERS</strong></a></li>
                <li><SVGIcon name="portrait" /><a href="#bouayad"><strong>ANIS BOUAYAD</strong></a></li>
          </ul>
        </article>
      </div>:
      language === 'korea'?
           <div className="rencontres-important" id="rencontres">
             <div>
               <p className="title">
                 <span>연구원 소개</span>
               </p>
             </div>
             <article>
               <div>
                 <h2>그들은 누구입니까 ?</h2>
                 <p>
                   막스 파니올 (Max Pagniol) 에게 몇몇 만남은 그의 경력에 깊은 영향을 미칩니다.
                 </p>
                 <p>
                   시장에 대한 접근방식과 당면한 문제를 구조화할 뿐만 아니라 기업사회문화는 일반사회문화에 포함되어 있다는 것을 깨닫게해주었습니다. 
                 </p>
               </div>
               <ul className='korea'>
                 <li><SVGIcon name="portrait" /><a href="#hammer"><strong>미카엘 해머 (Michaël HAMMER)</strong></a></li>
                 <li><SVGIcon name="portrait" /><a href="#costanza"><strong>존 코스탄차 (John COSTANZA)</strong></a></li>
                 <li><SVGIcon name="portrait" /><a href="#swiners"><strong>장-루이 스위너 (JEAN-LOUIS SWINERS)</strong></a></li>
                 <li><SVGIcon name="portrait" /><a href="#bouayad"><strong>아니스 부아야 (ANIS BOUAYAD)</strong></a></li>
               </ul>
             </article>
           </div>:
      <div className="rencontres-important" id="rencontres">
        <div>
          <p className="title">
            <span>MEANINGFULL ENCOUNTERS</span>
          </p>
        </div>
        <article>
          <div>
            <h2>Who are they ?</h2>
            <p>
              Some of the people Max Pagniol has met played a significant role in his career.
            </p>
            <p>
              They have allowed him not only <strong>to structure his approach of markets</strong> and challenges to face, 
              but also to acknowledge the fact that organizations always fall within <strong>the scope of 
              the social sphere</strong>. 
            </p>
          </div>
          <ul>
                <li><SVGIcon name="portrait"/><a href="#hammer"><strong>MICHA&Euml;L HAMMER</strong></a></li>
                <li><SVGIcon name="portrait" /><a href="#costanza"><strong>JOHN COSTANZA</strong></a></li>
                <li><SVGIcon name="portrait" /><a href="#swiners"><strong>JEAN-LOUIS SWINERS</strong></a></li>
                <li><SVGIcon name="portrait" /><a href="#bouayad"><strong>ANIS BOUAYAD</strong></a></li>
          </ul>
        </article>
      </div>
    )
  }
}

export default Rencontres;