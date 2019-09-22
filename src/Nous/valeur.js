import React,{Component} from "react";
import SVGIcon from "../svgIcons/icons";

class Valeur extends Component {

  render(){
    const maximes = [
      {
        id: 1,
        content: "Quel que soit ton conseil, qu'il soit bref",
        contentEn: "Whatever advise you give, be short",
        contentKo: "당신의 충고가 무엇이든, 그것은 간단해야 합니다",
        authorKo: "오라스 (HORACE)",
        author: "HORACE"
      },
      {
        id: 2,
        content:
          "Je ne cherche pas à connaître les réponses, je cherche à comprendre les questions",
        contentEn:
          "I seek not to know the answers, but to understand the questions",
        contentKo:
          "나는 답을 알고싶지 않다. 나는 이 문제를 이해하려고 노력하고있다",
        authorKo: "공자 (CONFUCIUS)",
        author: " CONFUCIUS"
      },
      {
        id: 3,
        content:
          "N'imitez rien, ni personne.Un lion qui imite un autre lion devient un singe",
        contentEn:
          "Do not imitate anybody or anything. Lion who imitates a lion becomes a shade",
        contentKo:
          "아무것도 모방하지 마십시오, 다른 사자를 모방한 사자는 원숭이가 됩니다",
        authorKo: "빅토르 위고 (VICTOR HUGO)",
        author: "VICTOR HUGO"
      },
      {
        id: 4,
        content:
          "Commencez par changer en vous ce que vous voulez changer autour de vous",
        contentEn: "Be the change that you wish to see in the world",
        contentKo:"너 자신을 바꾸는 것으로 시작하여 너 주위를 변화시켜라",
        authorKo:"간디 (GANDHI)",
        author: "GANDHI"
      },
      {
        id: 5,
        content:
          "La résistance au changement n'est que le refus de la croissance",
        contentEn: "Resistance to change is only refusal of growth",
        contentKo: "변화에 대한 저항은 성장을 거부하는 것이다",
        authorKo: "ALEXANDER RUPERTI",
        author: "ALEXANDER RUPERTI"
      },
      {
        id: 6,
        content: "On peut toujours plus que ce que l'on croit pouvoir",
        contentEn: "We can always do more than what we think we can",
        contentKo:"우리는 항상 우리가 생각하는 것보다 더 많이 할 수 있다",
        authorKo:"조셉 케슬 (JOSEPH KESSEL)",
        author: " JOSEPH KESSEL"
      },
      {
        id: 7,
        content:
          "C'est ce que nous pensons déjà connaître qui nous empêche souvent d'apprendre",
        contentEn: "It’s what we think we know that keeps us from learning",
        contentKo:"우리가 이미 알고있다고 생각하는것이 배우는 것을 방해한다",
        authorKo: "GASTON BACHELARD",
        author: "GASTON BACHELARD"
      },
      {
        id: 8,
        content: "Choisir, c'est renoncer",
        contentEn: "To choose is to renounce",
        contentKo:"선택, 그것은 포기이다",
        authorKo: "앙드레지드 (ANDRÉ GIDE)",
        author: "ANDRE GIDE"
      }
    ];
 
   return (
    this.props.language === 'fr'?
    <div className="valeur" id="nos-valeurs">
        <p className="title">
          <span>NOS VALEURS</span>
        </p>
        <main>
          <div>
            <p>Plusieur maximes nous animent:</p>
            <SVGIcon name="valeur" width="66px" />
          </div>
          <ul>
            {maximes.map(maxime => <li key={maxime.id}>
               <span>{maxime.id}.</span>
               <div>
                  <p>
                    <span>&laquo;</span>
                     {maxime.content}
                    <span>&raquo;</span><span>,</span>
                    <span>{maxime.author}.</span>
                  </p>
               </div>
            </li>)}
          </ul>
        </main>
      </div>:
      this.props.language === 'korea'?
         <div className='valeur' id="nos-valeurs">
           <p className="title">
             <span>회사가치</span>
           </p>
           <main>
             <div>
               <p>몇몇 격언은 우리를 고무시킵니다:</p>
               <SVGIcon name="valeur" width="66px" />
             </div>
             <ul className={this.props.language === 'korea'?'korea':''}>
               {maximes.map(maxime => <li key={maxime.id}>
                 <span>{maxime.id}.</span>
                 <div>
                   <p>
                     <span>&laquo;</span>
                     {maxime.contentKo}
                     <span>&raquo;</span><span>,</span>
                     <span>{maxime.authorKo}.</span>
                   </p>
                 </div>
               </li>)}
             </ul>
           </main>
         </div>:
      <div className="valeur" id="nos-valeurs">
        <p className="title">
          <span>OUR VALUES</span>
        </p>
        <main>
          <div>
            <p>A few maxims in line with our way of action:</p>
            <SVGIcon name="valeur" width="66px" />
          </div>
          <ul>
            {maximes.map(maxime => <li key={maxime.id}>
              <span>{maxime.id}.</span>
              <div>
                <p>
                  <span>&laquo;</span>
                  {maxime.contentEn}
                  <span>&raquo;</span><span>,</span>
                  <span>{maxime.author}.</span>
                </p>
              </div>
            </li>)}
          </ul>
        </main>
      </div>
   )}
};

export default Valeur;
