import React, {Component} from 'react';
import Header from "../header/header";
import ArticleList from "./list";
import Pagination from "./pagination";
import Footer from "../extra/footer";

class Actualites extends Component {

  constructor(props) {
    super(props);
    this.articleList = React.createRef();
    this.pagination = React.createRef();
    this.state={
        num: window.innerWidth < 480?4:6,
        page:1,
        pageNum:0,
    }
  }

  componentDidMount(){
      window.scrollTo(0,0);
      this.articleList.current.renderList(this.state.num);
      this.setState({
          pageNum:Math.ceil(this.articleList.current.props.articles.length/this.state.num)
      })
  }


  turnTo =(num,i) => {
    this.articleList.current.turnPage(num,i);
    this.pagination.current.activePage(i);
    this.setState({page:i});
  };


  prev=(num,prePage)=>{
      if(this.state.page > 1){
          this.turnTo(num, prePage)
      }
  }

  next=(num, nextPage)=>{
      if(this.state.page < this.state.pageNum ){
          this.turnTo(num, nextPage)
      }
  }

  render() {
    const articles = [
      { id: '1', 
        date: "19 et 20 septembre 2018", 
        title: "Forum International de l’OCDE – La Défense – Paris", 
        resume: "Très belle réunion pour la « 7th OCDE – Korea\
                Policy Forum on Budgeting » à laquelle étaient conviées de\
                nombreuses ..." 
      },
      { id: '2', 
        date: "19 septembre 2018", 
        title: "Olivier CROUZET - Forum International de l’OCDE", 
        resume: "Olivier CROUZET, directeur\
                pédagogique de 42, présente aux membres OCDE, les\
                particularités de 42 ..." 
      }, 
      { id: '3', 
        date: "20 septembre 2018", 
        title: "STATION F et Xavier NIEL - Forum International de l’OCDE", 
        resume: "STATION F et Xavier NIEL reçoivent la délégation du Ministère des Finances\
                et de la Stratégie e la Corée du Sud ..." 
      }, 
      { id: '4', 
        date: "20 septembre 2018", 
        title: "Florian BUCHER - Forum International de l’OCDE", 
        resume: "42 et son directeur général adjoint Florian BUCHER reçoivent la délégation\
                du Ministère des Finances ... " 
      }, 
      { id: '5', 
        date: "27 et 28 septembre 2018", 
        title: "Salon Architect@Work", 
        resume: "le salon Architect@Work s’est tenu à Paris Event Center et a permis de présenter\
                les dernières innovations de nombreux fabricants ..." 
      }, 
      { id: '6', 
        date: "2 octobre 2018", 
        title: "I+C rejoint le groupe Xerfi", 
        resume: "I+C rejoint le groupe Xerfi, un évènement non négligeable pour le monde des études." 
      },
      { id: '7', 
        date: "8 octobre 2018", 
        title: "Sophie VIGER a été nommée directrice générale de 42 ",
        resume: " Prise de poste de Mme Sophie VIGER, nouvelle directrice générale de\
                42 à Paris et dans la Silicon Valley ..." 
      }, 
      { id: '8', 
        date: "11 et 15 novembre 2018", 
        title: "Le salon EquipHotel", 
        resume: "Le salon EquipHotel s’est tenu du 11 au 15 novembre 2018à la Porte de Versailles,\
                 à Paris avec de nombreuses innovations pour les économies d’énergie ..." 
      }, 
      { id: '9', 
        date: "15 et 16 octobre 2018", 
        title: "Le Président de la Corée du Sud, Mr MOON Jae-In a visité La France",
        resume: "Visite du Président de la Corée du Sud, Mr MOON Jae-In auprès des autorités\
                françaises. Une réunion s’est tenue le 16 à l’ hôtel Westin Paris Vendôme ..." 
      }, 
      { id: '10', 
        date: "15 octobre 2018", 
        title: "La France et La Corée du Sud ont signé plusieurs MOU", 
        resume: "signatures de plusieurs MOU entre la France et la Corée du Sud,\
                 dont celle entre la banque SBC (Small Business Corporation) de la Corée du Sud et 42 ..." 
      }, 
      { id: '11', 
        date: "15 octobre 2018", 
        title: "Mr Sang Jik LEE, président de SBC visite deux références françaises", 
        resume: "Visite du Président de SBC Mr Sang Jik LEE (Small Business Corporation) chez STATION F et Ecole 42." 
      }, 
      { id: '12', 
        date: "16 octobre 2018", 
        title: "Mme Fleur PELERIN présente son partenariat franco-coréen", 
        resume: "Lors du meeting présentant les expériences conjointes France –COREE, Mme Fleur PELERIN,\
                 ancienne Ministre de la Culture et ..."
      }, 
      { id: '13', 
        date: "20 et 23 novembre 2018", 
        title: "FRANCE FERMETURES récompensée au concours de l'innovation d'EQUIPBAIE", 
        resume: "Mr Arnaud de SEIGNEUREINS remercie l'assemblée pour cette distinction concernant le nouveau produit QOMPACT..." 
      }, 
      { id: '14', 
        date: "21 novembre 2018", 
        title: "Le Président d'ACTIBAIE met à l'honneur les nouveaux installateurs diplômés", 
        resume: "Mr Yannick MICHON, Président d'ACTIBAIE, groupement professionnel affilié à la FFB, réunissant l'ensemble des métiers des portes, portails, volets et stores..."
      },
      {
        id: '15',
        date: "14 Mars 2019",
        title: "Innovation Frugale au CNIT à la Défense",
        resume: "Culture d’innovation bottom up pour transformer vos organisations avec VOTRE ingéniosité, l’ingéniosité de VOS EQUIPES..."
      },
      {
        id:'16',
        date:"19 Juin 2019",
        title:`Henri MOREL, élu Président de la Fédération des
        Industries Mécaniques pour un mandat de 3 ans.`,
        resume:`Henri MOREL, 62 ans, président de SFPI Group (Safety for People and Industry) a été élu
        Président de la FIM pour 3 ans, a pour objectif de mettre à profit la réflexion stratégique engagée ses
        dernières années pour définir une Organisation Professionnelle du futur...`
      },
      {
        id:'17',
        date:'26 au 27 Septembre 2019',
        title:'ARCHITECT@WORK à PARIS',
        resume:`Magnifique réunion professionnelle présentant les dernières
        innovations du BATIMENT, et ce avec des conférences d’une très
        grande qualité sur le thème « Architecture &amp; Economie Circulaire ».`
      },
      {
        id: '18',
        date: "16 au 18 Octobre 2019",
        title: "Learning Expedition COREE du SUD - SEOUL",
        resume: `MEDEF International propose de participer à cette Learning Expedition afin de mieux comprendre comment 
                la Corée du Sud a accompli son important développement économique depuis 50 ans...`,
      },
      {
        id: '19',
        date: "28 au 30 Octobre 2019",
        title: "Délégation à l’Asian Infrastructure Investment Bank (AIIB) - PEKIN",
        resume: `Le MEDEF International propose, en partenariat avec Business France de participer à cette délégation qui se rendra à PEKIN pour...`
      },
      {
        id:'20',
        date:'Du 4 au 8 novembre 2019',
        title:`Salon Mondial du BATIMENT à Paris-
        Villepinte. BATIMAT, INTERCLIMA, IDEOBAINS…Toujours là !!!`,
        resume:`Malgré une ambiance un peu morose de la profession, ce salon a su une fois de plus attirer un grand
        nombre de visiteurs, artisans, entreprises, collectivités et architectes.`
      },
      {
        id:'21',
        date:'04 au 08 Novembre 2019',
        title:`Déplacement de Mr Cédric O en Corée`,
        resume:`Mr Cédric O, Secrétaire d’Etat chargé du Numérique auprès du ministre de l’Économie et des Finances et du ministre de l’Action et des Comptes publics, s’est rendu en Corée du Sud, du 4 au 8 novembre 2019. Il s’agit de sa première visite en tant que membre du gouvernement français.`
      },
      {
        id:'22',
        date:'09 au 14 Décembre 2019',
        title:'Délégation de Marseille au JAPON',
        resume:`Lors de la première quinzaine de décembre 2019, une mission
        économique de MARSEILLE s'est rendue à TOKYO, au JAPON au
        Forum de l'Innovation...`
      },
      {
        id:'23',
        date:'09 Avril 2020',
        title:'FKCCI présente comment la Corée a géré le COVID 19',
        resume:`Ce webinaire réunira Mr David-Pierre JALICON, 
        Président de la FKCCI et Pdg de DPJ & Partners Architecture, 
        S.E.M. Philippe LEFORT, Ambassadeur de France en Corée...`
      },
      {
        id:'24',
        date:'09 Avril 2020',
        title:'Une leçon à prendre de l’exemple coréen dans sa gestion du COVID 19….',
        resume:`Mr Sébastien FALLETTI, journaliste, correspondant Asie de l’Est pour le Figaro a très bien résumé en 
        fin du Webinaire organisé par la FKCCI combien et comment les occidentaux ne sont pas sérieux et préparés à 
        de telles crises sanitaires...`
      },
      {
        id:'25',
        date:'09 Avril 2020',
        title:'Politique des 3 T en Corée du Sud contre COVID 19',
        resume:`La Corée est un pays très réactif, ils ont la culture de la crise !!!
        Tests Massifs d’entrée, on veut regarder les choses en face donc 20 000 tests sont faits au quotidien...`
      }
    ];
    const pageNum = Math.ceil(articles.length / this.state.num);
    return (
      <div>
        <Header
          changeLanguage={lg => this.props.changeLanguage(lg)}
          language={this.props.language}
        />
        <div className="actualites">
          {this.props.language === "fr" ? (
            <p className="sectionTitle">
              <span>5. </span>
              ACTUALIT&Eacute;
            </p>
          ) : this.props.language === "korea" ? (
            <p className="sectionTitle">
              <span>5. </span>
              뉴스레터
            </p>
          ) : (
            <p className="sectionTitle">
              <span>5. </span>
              NEWS
            </p>
          )}
          <ArticleList articles={articles} ref={this.articleList} />
          <Pagination
            ref={this.pagination}
            page={pageNum}
            showPage={(num, i) => this.turnTo(num, i)}
            articleNumPerPage={this.state.num}
            currentPage={this.state.page}
            prev={(num, prePage) => this.prev(num, prePage)}
            next={(num, nextpage) => this.next(num, nextpage)}
          />
        </div>
        <Footer language={this.props.language} />
      </div>
    );
  }
}

export default Actualites ;