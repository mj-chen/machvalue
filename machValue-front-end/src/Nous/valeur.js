import React,{Component} from "react";
import SVGIcon from "../svgIcons/icons";

class Valeur extends Component {
  constructor(props) {
    super(props);
    this.state = {
      language: this.props.language,
    }
  }
  componentDidUpdate(prevProps) {
    if (this.props.language !== prevProps.language) {
      this.setState({
        language: this.props.language,
      })
    }
  }

  render(){
    const maximes = [
      {
        id:1,
        content: 'Quel que soit ton conseil, qu\'il soit bref',
        contentEn: 'Whatever advise you give, be short',
        author:'HORACE',
      },
      {
        id: 2,
        content: 'Je ne cherche pas à connaître les réponses, je cherche à comprendre les questions',
        contentEn:'I seek not to know the answers, but to understand the questions',
        author: ' CONFUCIUS',
      },
      {
        id: 3,
        content: 'N\'imitez rien, ni personne.Un lion qui imite un autre lion devient un singe',
        contentEn:'Do not imitate anybody or anything. Lion who imitates a lion becomes a shade',
        author: 'VICTOR HUGO',
      },
      {
        id: 4,
        content: 'Commencez par changer en vous ce que vous voulez changer autour de vous',
        contentEn:'Be the change that you wish to see in the world',
        author: 'GANDHI',
      },
      {
        id: 5,
        content: 'La résistance au changement n\'est que le refus de la croissance',
        contentEn:'Resistance to change is only refusal of growth',
        author: 'ALEXANDER RUPERTI',
      },
      {
        id: 6,
        content: 'On peut toujours plus que ce que l\'on croit pouvoir',
        contentEn:'We can always do more than what we think we can',
        author: ' JOSEPH KESSEL',
      },
      {
        id: 7,
        content: 'C\'est ce que nous pensons déjà connaître qui nous empêche souvent d\'apprendre',
        contentEn:'It’s what we think we know that keeps us from learning',
        author: 'GASTON BACHELARD',
      },
      {
        id: 8,
        content: 'Choisir, c\'est renoncer',
        contentEn:'To choose is to renounce',
        author: 'ANDRE GIDE',
      }
    ]
 
   return (
    this.state.language === 'fr'?
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
