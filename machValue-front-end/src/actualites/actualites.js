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
        language:this.props.language
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.language !== prevProps.language) {
      this.setState({
        language: this.props.language,
      })
    }
  }

  componentDidMount(){
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
      { id: 1, 
        date: "19 et 20 septembre 18", 
        title: "Forum International de l’OCDE – La Défense – Paris", 
        resume: "Très belle réunion pour la « 7th OCDE – Korea\
                Policy Forum on Budgeting » à laquelle étaient conviées de\
                nombreuses ..." 
      },
      { id: 2, 
        date: "19 septembre 2018", 
        title: "Olivier CROUZET - Forum International de l’OCDE", 
        resume: "Olivier CROUZET, directeur\
                pédagogique de 42, présente aux membres OCDE, les\
                particularités de 42 ..." 
      }, 
      { id: 3, 
        date: "20 septembre 2018", 
        title: "STATION F et Xavier NIEL - Forum International de l’OCDE", 
        resume: "STATION F et Xavier NIEL reçoivent la délégation du Ministère des Finances\
                et de la Stratégie e la Corée du Sud ..." 
      }, 
      { id: 4, 
        date: "20 septembre 2018", 
        title: "Florian BUCHER - Forum International de l’OCDE", 
        resume: "42 et son directeur général adjoint Florian BUCHER reçoivent la délégation\
                du Ministère des Finances ... " 
      }, 
      { id: 5, 
        date: "27 et 28 septembre 2018", 
        title: "Salon Architect@Work", 
        resume: "le salon Architect@Work s’est tenu à Paris Event Center et a permis de présenter\
                les dernières innovations de nombreux fabricants ..." 
      }, 
      { id: 6, 
        date: "2 octobre 2018", 
        title: "I+C rejoint le groupe Xerfi", 
        resume: "I+C rejoint le groupe Xerfi, un évènement non négligeable pour le monde des études." 
      },
      { id: 7, 
        date: "8 octobre 2018", 
        title: "Sophie VIGER a été nommée directrice générale de 42 ",
        resume: " Prise de poste de Mme Sophie VIGER, nouvelle directrice générale de\
                42 à Paris et dans la Silicon Valley ..." 
      }, 
      { id: 8, 
        date: "11 et 15 novembre 2018", 
        title: "Le salon EquipHotel", 
        resume: "Le salon EquipHotel s’est tenu du 11 au 15 novembre 2018à la Porte de Versailles,\
                 à Paris avec de nombreuses innovations pour les économies d’énergie ..." 
      }, 
      { id: 9, 
        date: "15 et 16 octobre 2018", 
        title: "Le Président de la Corée du Sud, Mr MOON Jae-In a visité La France",
        resume: "Visite du Président de la Corée du Sud, Mr MOON Jae-In auprès des autorités\
                françaises. Une réunion s’est tenue le 16 à l’ hôtel Westin Paris Vendôme ..." 
      }, 
      { id: 10, 
        date: "15 octobre 2018", 
        title: "La France et La Corée du Sud ont signé plusieurs MOU", 
        resume: "signatures de plusieurs MOU entre la France et la Corée du Sud,\
                 dont celle entre la banque SBC (Small Business Corporation) de la Corée du Sud et 42 ..." 
      }, 
      { id: 11, 
        date: "15 octobre 2018", 
        title: "Mr Sang Jik LEE, président de SBC visite deux références françaises", 
        resume: "Visite du Président de SBC Mr Sang Jik LEE (Small Business Corporation) chez STATION F et Ecole 42." 
      }, 
      { id: 12, 
        date: "16 octobre 2018", 
        title: "Mme Fleur PELERIN présente son partenariat franco-coréen", 
        resume: "Lors du meeting présentant les expériences conjointes France –COREE, Mme Fleur PELERIN,\
                 ancienne Ministre de la Culture et ..."
      }, 
      { id: 13, 
        date: "20 et 23 novembre 2018", 
        title: "FRANCE FERMETURES récompensée au concours de l'innovation d'EQUIPBAIE", 
        resume: "Mr Arnaud de SEIGNEUREINS remercie l'assemblée pour cette distinction concernant le nouveau produit QOMPACT..." 
      }, 
      { id: 14, 
        date: "21 novembre 2018", 
        title: "Le Président d'ACTIBAIE met à l'honneur les nouveaux installateurs diplômés", 
        resume: "Mr Yannick MICHON, Président d'ACTIBAIE, groupement professionnel affilié à la FFB, réunissant l'ensemble des métiers des portes, portails, volets et stores..."
      }
    ];
    const pageNum = Math.ceil(articles.length / this.state.num);
    return (
      <div>
        <Header changeLanguage={(lg) => this.props.changeLanguage(lg)} language={this.state.language} />
        <div className="actualites">
          {
            this.state.language === 'fr'?
            <p className="sectionTitle">
              <span>5. </span>
              ACTUALIT&Eacute;
            </p>:
            <p className="sectionTitle">
                <span>5. </span>
                NEWS
            </p>
          }
          <ArticleList articles={articles} ref={this.articleList}/>
          <Pagination
            ref={this.pagination}
            page={pageNum}
            showPage={(num,i) => this.turnTo(num,i)}
            articleNumPerPage = {this.state.num}
            currentPage = {this.state.page}
            prev={(num,prePage)=>this.prev(num,prePage)}
            next={(num,nextpage)=>this.next(num,nextpage)}
          />
        </div>
            <Footer language = {this.state.language} />
      </div>
    );
  }
}

export default Actualites ;