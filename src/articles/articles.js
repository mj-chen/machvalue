import React, {Component, Fragment} from 'react';
import { Link } from "react-router-dom";
import Article from './article';
import ArticleWithGallery from "./articlegallery";
import ouverture from "../assets/article1/ouverture.JPG";
import ouvertureP from "../assets/article1/ouverture-petit.JPG";
import conference from "../assets/article1/conference.JPG";
import conferenceP from "../assets/article1/conference-petit.JPG";
import a2 from "../assets/article2/a2.JPG";
import a3 from "../assets/article3/a3.JPG";
import a4 from "../assets/article4/a4.JPG";
import a5 from "../assets/article5/a5.JPG";
import a6 from "../assets/article6/a6.JPG";
import a7 from "../assets/article7/a7.JPG";
import a81 from "../assets/article8/a81.JPG";
import a81P from "../assets/article8/a81-petit.JPG";
import a82 from "../assets/article8/a82.JPG";
import a82P from "../assets/article8/a82-petit.JPG";
import a83 from "../assets/article8/a83.JPG";
import a83P from "../assets/article8/a83-petit.JPG";
import a91 from "../assets/article9/a91.JPG";
import a91P from "../assets/article9/a91-petit.JPG";
import a92 from "../assets/article9/a92.JPG";
import a92P from "../assets/article9/a92-petit.JPG";
import a101 from "../assets/article10/a101.JPG";
import a101P from "../assets/article10/a101-petit.JPG";
import a102 from "../assets/article10/a102.JPG";
import a102P from "../assets/article10/a102-petit.JPG";
import a11 from "../assets/article11/a11.JPG";
import a12 from "../assets/article12/a12.JPG";
import a13 from "../assets/article13/a13.JPG";
import a14 from "../assets/article14/a14.jpeg";
import a15 from "../assets/article15/a15.png";
import a16 from "../assets/article16/a16.png";
import a17 from "../assets/article17/a17.png";
import Footer from "../extra/footer";
import Header from "../header/header";

class Articles extends Component {
  constructor(props) {
    super(props);
    this.articleContainer = React.createRef(); 
    this.prev = React.createRef();
    this.next = React.createRef();
    this.state = {
      articleIndex: parseInt(this.props.match.params.id),
    };
  }

  componentDidMount() {
    const articles = this.articleContainer.current.querySelectorAll('.item');
    articles[this.state.articleIndex-1].classList.remove('hidden');
    articles[this.state.articleIndex - 1].classList.add("active");
  }

  componentDidUpdate(prevProps){
     if(this.props.match.params.id !== prevProps.match.params.id){
         this.setState({
           articleIndex: parseInt(this.props.match.params.id)
         },()=> {
            const articles = this.articleContainer.current.querySelectorAll(".item");
            const activeArticle = this.articleContainer.current.querySelector(".item.active");
            activeArticle.classList.remove("active");
            activeArticle.classList.add("hidden");
            articles[this.state.articleIndex - 1].classList.remove("hidden");
             articles[this.state.articleIndex - 1].classList.add("active");
        });
     }
  }


  showArticle(n){
       const articles = this.articleContainer.current.querySelectorAll('.item');
       if (this.state.articleIndex === 1 && n === -1) return;
       if (this.state.articleIndex === articles.length && n === 1) return
       const newIndex = this.state.articleIndex+n;
       this.props.history.push(`/actualités/articles/${newIndex}`);
  }


  render() {
    const articles = [
      {
        text:
          <p>Forum International de l’OCDE – La
            Défense – Paris.Très belle réunion pour la « 7th OCDE – Korea
            Policy Forum on Budgeting » à laquelle étaient conviées de
            nombreuses délégations étrangères avec pour Co-Chairs, Mr
            Marcos BONTURI, Public Governance Director, OCDE, et Mr Il
            Whan AN représentant le Ministère de l’Economie et des
            Finances de la Corée du Sud en tant que Directeur Général du Budget.</p>,
        date: " 19 et 20 septembre 18",
        images: [
          {
            url: ouverture,
            petit: ouvertureP,
            alt: "Forum International de l’OCDE"
          },
          {
            url: conference,
            petit: conferenceP,
            alt: "Forum International de l’OCDE"
          }
        ],
        title: "Forum International de l’OCDE – La Défense – Paris",
        gallery: true
      },
      {
        text:
          <p>Olivier CROUZET, directeur pédagogique de 42, présente aux membres OCDE, les
             particularités de 42, fondée en 2013 par Xavier NIEL et son « enseignement peer to peer ».</p>,
        date: "19 septembre 2018",
        images: [
          {
            url: a2,
            alt: "Oliver CROUZET"
          }
        ],
        title: "Olivier CROUZET - Forum International de l’OCDE",
        gallery: false
      },
      {
        text:
          <p>STATION F et Xavier NIEL reçoivent la délégation du Ministère des Finances et de la Stratégie de la
            Corée du Sud, dont le Directeur Général de la Coordination du Budget, Mr Il Whan AN, ainsi que le Directeur Général des
            Affaires Economiques, Mr Do Geol AHN.</p>,
        date: "20 septembre 18",
        images: [
          {
            url: a3,
            alt:
              "Station F et la délégation du Ministère des Finances et de la Stratégie de la Corée du Sud"
          }
        ],
        title: "STATION F et Xavier NIEL - Forum International de l’OCDE",
        gallery: false
      },
      {
        text:
          <p>42 et son directeur général adjoint
            Florian BUCHER reçoivent la délégation du Ministère des
            Finances et de la Stratégie e la Corée du Sud, dont le Directeur
            Général de la Coordination du Budget, Mr Il Whan AN et Mme
            Muyung Sun Kim de l’Ambassade de Corée en France.</p>,
        date: "20 septembre 18",
        images: [
          {
            url: a4,
            alt:
              "42 et son directeur général adjoint\
                             Florian BUCHER reçoivent la délégation du Ministère des\
                             Finances et de la Stratégie e la Corée du Sud."
          }
        ],
        title: "Florian BUCHER - Forum International de l’OCDE",
        gallery: false,
      },
      {
        text:
          <p>Le salon Architect@Work s’est tenu
            à Paris Event Center et a permis de présenter les dernières
            innovations de nombreux fabricants dans un court laps de
            temps à tous les décideurs. Un salon qui va de succès en
            succès….</p>,
        date: "27 et 28 septembre 18 :",
        images: [
          {
            url: a5,
            alt: "le salon Architect@Work"
          }
        ],
        title: "Salon Architect@Work",
        gallery: false
      },
      {
        text:
          <p>I+C rejoint le groupe Xerfi, un évènement non négligeable pour le monde des études.",
        date: "2 octobre 18.</p>,
        images: [
          {
            url: a6,
            alt: "I+C rejoint le groupe Xerfi"
          }
        ],
        title: "I+C rejoint le groupe Xerfi",
        gallery: false
      },
      {
        text:
          <p>Prise de poste de Mme Sophie VIGER,
            nouvelle directrice générale de 42 à Paris et dans la Silicon
            Valley, école atypique de codage peer to peer. Cette ex-directrice de la Web@cadémie, du Samsung Campus de la
            Coding Academy par Epitech a deux objectifs majeurs, doubler
            la taille de la structure et « féminiser » les étudiants
            sélectionnés pour atteindre 42 % de présence de femmes, voilà
            un message fort !…</p>,
        date: "8 octobre 18",
        images: [
          {
            url: a7,
            alt: "I+C rejoint le groupe Xerfi"
          }
        ],
        title: "Sophie VIGER a été nommée directrice générale de 42 ",
        gallery: false
      },
      {
        text:
          <p>Le salon EquipHotel s’est tenu du 11 au 15 novembre
          2018 à la Porte de Versailles, à Paris avec de nombreuses
          innovations pour les économies d’énergie et les personnes à
          mobilité réduite.</p>,
        date: "11-15 novembre 18",
        images: [
          {
            url: a12,
            alt: "logo Le salon EquipHotel"
          }
        ],
        title: "Le salon EquipHotel",
        gallery: false
      },
      {
        text:
          <p>Visite du Président de la Corée du Sud,
          Mr MOON Jae-In auprès des autorités françaises.Une réunion
          s’est tenue le 16 à  l’hôtel Westin Paris Vendôme animée par
          Mr Frédéric SANCHEZ, Chaiman of MEDEF International,
          Chaiman of the Executive Board of Five, et où Mr Bruno LE
          MAIRE, Ministre de l’Economie et des Finances appuyait de sa
          présence ce rapprochement FRANCE COREE.</p>,
        date: "15 et 16 octobre 18 ",
        images: [
          {
            url: a82,
            petit: a82P,
            alt: "Visite du Président de la Corée du Sud"
          },
          {
            url: a81,
            petit: a81P,
            alt: "Visite du Président de la Corée du Sud"
          },
          {
            url: a83,
            petit: a83P,
            alt: "Visite du Président de la Corée du Sud"
          }
        ],
        title:
          "Le Président de la Corée du Sud, Mr MOON Jae-In a visité la France",
        gallery: true
      },
      {
        text:
          <p>Signatures de plusieurs MOU entre la France
            et la Corée du Sud, dont celle entre la banque SBC (Small Business Corporation) de la Corée du Sud et 42, représentées
            respectivement par, Mr Sang Jik LEE, son Président, et Mme
            Sophie VIGER, directrice générale, et également celle entre la
            banque SBC et BPI, cette dernière représentée par Pascal
            LARGARDE, Executive Director.</p>,
        date: "15 octobre 18",
        images: [
          {
            url: a92,
            petit: a92P,
            alt: "signatures de plusieurs MOU entre la France"
          },
          {
            url: a91,
            petit: a91P,
            alt: "signatures de plusieurs MOU entre la France"
          }
        ],
        title: "La France et La Corée du Sud ont signé plusieurs MOU",
        gallery: true
      },
      {
        text:
          <p>Visite du Président de SBC Mr Sang Jik LEE (Small Business Corporation) chez STATION F et Ecole 42.</p>,
        date: "15 octobre 18",
        images: [
          {
            url: a101,
            petit: a101P,
            alt: "Sang Jik LEE et Max PAGNIOL STATION F et Ecole 42"
          },
          {
            url: a102,
            petit: a102P,
            alt: "Sang Jik LEE et Max PAGNIOL STATION F et Ecole 42"
          }
        ],
        title: "Mr Sang Jik LEE, président de SBC visite deux références françaises",
        gallery: true
      },
      {
        text:
          <p>Lors du meeting présentant les expériences
          conjointes FRANCE – COREE, Mme Fleur PELERIN, ancienne
          Ministre de la Culture et aujourd’hui fondatrice de KORELYA
          CAPITAL collabore avec Mr Joo Han SEOK, CEO de NAVER France.</p>,
        date: "16 octobre 18",
        images: [
          {
            url: a11,
            alt: "Fleur PELERIN et Joo Han SEOK, CEO de NAVER France"
          }
        ],
        title: "Mme Fleur PELERIN présente son partenariat franco-coréen",
        gallery: false
      },
      {
        text: <p>Mr Arnaud de SEIGNEUREINS remercie l'assemblée pour cette distinction concernant le nouveau produit QOMPACT, 
              rideau métalique pour le commerce et l'industrie, ultra résistant contre l'effraction et les vents violents type tempête.</p>,
        date:"20 et 23 novembre 2018",
        images:[
          {
            url:a13,
            alt:"Mr Arnaud de SEIGNEUREINS FRANCE FERMETURES MACHVALUE"
          }
        ],
        title:"FRANCE FERMETURES récompensée au concours de l'innovation d'EQUIPBAIE",
        gallery:false
      },
      {
        text: <p>Mr Yannick MICHON, Président d'ACTIBAIE, groupement professionnel affilié à la FFB, réunissant l'ensemble des métiers des portes, 
              portails, volets et stores a récompensé et mis à l'honneur les nouveaux installateurs ayant réussi leur examen de qualification à la pose des 
              dits produits.</p>,
        date:"21 novembre 2018",
        images: [
          {
            url: a14,
            alt: "Mr Yannick MICHON ACTIBAIE MACHVALUE"
          }
        ],
        title: "Le Président d'ACTIBAIE met à l'honneur les nouveaux installateurs diplômés", 
        gallery:false,
      },
      {
        text: <Fragment>
          <p><b>Culture d’innovation</b> bottom up pour <b>transformer vos organisations</b> avec <b>VOTRE</b> ingéniosité,
              l’ingéniosité de <b>VOS EQUIPES</b>, pour développer de nouvelles offres à forte valeur ajoutée et ce bien sûr sur base de prototypage rapide…
              Sobriété du système(low tech), de chacun, de l’équipe se reflète tant au niveau des produits que des services.</p>
          <p><b>Un défi collectif sur une journée!</b> Comment transmettre et reconstruire un état d’esprit?
              Comment trouver des parallèles ou liens avec d’autres univers d’innovation, comme le lean ou le design thinking?
              <b> The game is changing!!!</b></p>
              </Fragment>,
        date: "14 Mars 2019",
        images: [
          {
            url: a15,
            alt: "Innovation Frugale au CNIT à la Défense"
          }
        ],
        title: "L’innovation Frugale, Késako ?",
        gallery: false,
      },
      {
        text: <Fragment>
          <p>Le MEDEF International propose de participer à cette Learning Expedition afin de mieux <b>comprendre</b> comment <b>la Corée du Sud</b> a accompli 
              son important développement économique depuis 50 ans pour devenir la 11ème puissance économique mondiale, <b>tournée vers l’innovation et 
              les nouvelles technologies</b>.</p>
          <p>Découvrir <b>l’écosystème de Séoul</b>, mieux intégrer les <b>nouveaux enjeux et perspectives</b> en matière d’innovation notamment, 
              et ce via diverses rencontres (ambassade, la KITA, homologue du MEDEF,  Naver, Renault Samsung R&D Center, Pangyo Valley, 
              la Silicon Valley coréenne….et autres institutions).</p>
              <p>Cet évènement de qualité sera conduit par Mr Fabrice LE SACHE, vice-président du MEDEF et Mme Paola FABIANI, présidente du Comex 40, 
              organe non-statutaire, rattaché au MEDEF, et composé de 45 jeunes dirigeants issus des fédérations professionnelles.</p></Fragment>,
        date: "16 au 18 Octobre 2019",
        images: [
          {
            url: a16,
            alt: "Learning Expedition COREE du SUD - SEOUL"
          }
        ],
        title: "Learning Expedition COREE du SUD - SEOUL",
        gallery: false,
      },
      {
        text: <p>Le MEDEF International propose, en <b>partenariat</b> avec <b>Business France</b> de participer à cette délégation qui se rendra 
               à PEKIN pour rencontrer la <b>Banque asiatique d’Investissements pour les Infrastructures (AIIB)</b>.</p>,
        date: "28 au 30 Octobre 2019",
        images: [
          {
            url: a17,
            alt: "Délégation à l’Asian Infrastructure Investment Bank (AIIB) - PEKIN"
          }
        ],
        title: "Délégation à l’Asian Infrastructure Investment Bank (AIIB) - PEKIN",
        gallery: false,
      },
      
    ];
    return (
      <div>
        <Header changeLanguage={(lg) => this.props.changeLanguage(lg)} language={this.props.language} />
        <div className="articles" ref={this.articleContainer}>
        {articles.map((a, i) => {
          return a.gallery ? (
            <div className=" item hidden" key={i}>
              <p className="sectionTitle">{a.date}</p>
                <ArticleWithGallery articleContent={a} />
            </div>
          ) : (
            <div className=" item hidden" key={i}>
              <p className="sectionTitle">{a.date}</p>
                <Article articleContent={a} />
            </div>
          );
        })}
        {
          this.props.language === 'fr'?
            <div>
                <Link to="/actualit&eacute;s">RETOUR LISTE</Link>
                <p>
                    <span>&lt;</span>
                    <span onClick={()=>this.showArticle(-1)}>ARTICLE PR&Eacute;C&Eacute;DENT</span>
                    <span onClick={()=>this.showArticle(1)}>ARTICLE SUIVANT</span>
                    <span>&gt;</span>
                </p>
            </div>:
            <div>
              <Link to="/actualit&eacute;s">RETURN TO LIST</Link>
              <p>
                <span>&lt;</span>
                <span onClick={() => this.showArticle(-1)}>PREVIOUS</span>
                <span onClick={() => this.showArticle(1)}>NEXT</span>
                <span>&gt;</span>
              </p>
            </div>
        }
        </div>
        <Footer language ={this.props.language} />
      </div>
    );
  }
}

export default Articles;