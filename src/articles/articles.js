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
import a15b from "../assets/article15bis/a15b.jpg";
import a15t from "../assets/article15t/a15t.jpg";
import a16 from "../assets/article16/a16.png";
import a17 from "../assets/article17/a17.png";
import a18 from "../assets/article18/a18.jpg";
import a19 from "../assets/article19/a19.png";
import a20 from "../assets/article20/a20.jpg";
import a23 from "../assets/article23/a23.jpg";
import a24 from "../assets/article24/a24.jpg";
import a25 from "../assets/article25/a25.jpg";
import Footer from "../extra/footer";
import Header from "../header/header";

class Articles extends Component {
  constructor(props) {
    super(props);
    this.articleContainer = React.createRef(); 
    this.prev = React.createRef();
    this.next = React.createRef();
    this.currentArticle = this.articles.find(a=>a.id === this.props.match.params.id)
  }

  articles =  [
    {
      text:
        <p>Forum International de l’OCDE – La
          Défense – Paris.Très belle réunion pour la « 7th OCDE – Korea
          Policy Forum on Budgeting » à laquelle étaient conviées de
          nombreuses délégations étrangères avec pour Co-Chairs, Mr
          Marcos BONTURI, Public Governance Director, OCDE, et Mr Il
          Whan AN représentant le Ministère de l’Economie et des
          Finances de la Corée du Sud en tant que Directeur Général du Budget.</p>,
      date: " 19 et 20 septembre 2018",
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
      gallery: true,
      id:'1'
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
      id:'2'
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
      id:'3'
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
      id:'4'
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
      id:'5'
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
      id:'6'
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
      id:'7'
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
      id:'8'
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
      gallery: true,
      id:'9'
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
      gallery: true,
      id:'10'
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
      gallery: true,
      id:'11'
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
      id:'12'
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
      id:'13'
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
      id:'14',
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
      title: "L’innovation Frugale, Késako?",
      id:'15',
    },
    {
      text:
      <>
      <p><b>Henri MOREL</b>, 
          62 ans, président de <b>SFPI Group</b> (Safety for People and Industry) a été élu <b>Président de la FIM,</b> pour 3 ans, 
          a pour objectif de mettre à profit la réflexion stratégique engagée ses dernières années pour définir une Organisation 
          Professionnelle du futur capable d’accompagner les entreprises face aux nécessités de changement que tout marché impose, 
          et ainsi assurer leur développement. Son discours est clair : <b>« davantage de valeur ajoutée, développement des activités, 
          renforcement dans le monde »</b>.</p>
      <p>SFPI Group réalise 550 millions d’euros de chiffre d’affaires consolidé et emploie environ 3900 collaborateurs, 
        et ce via 4 pôles : DOM Security (Serrures et Contrôle d’accès), MAC (fermetures, stores et menuiseries avec les sociétés Franciaflex, 
        France Fermetures, Sipa, Faber), Neu-JKF (Traitement de l’airbâtiments industriels), MMD/Barriquand (Echangeurs thermiques).</p>
        </>,
        date:'19 juin 2019',
      images:[
        {
          url:a15b,
          alt:'Henri MOREL'
        }
      ],
      title:'Henri MOREL, élu Président de la Fédération des Industries Mécaniques pour un mandat de 3 ans.',
      id:'16'
    },
    {
      text:
      <p>Magnifique réunion professionnelle présentant les dernières <b> innovations du BATIMENT</b>, 
      et ce avec des conférences d’une très grande qualité sur le thème <b>« Architecture & Economie Circulaire »</b>.</p>,
      date:'26 au 27 Septembre 2019',
      images:[
        {
          url:a15t,
          alt:'ARCHITECT@WORK à PARIS'
        }
      ],
      title:'ARCHITECT@WORK à PARIS',
      id:'17'
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
      id:'18'
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
      id:'19'
    },
    {
      text:
      <p>Malgré une ambiance un peu morose de la profession, 
        ce salon a su une fois de plus attirer un grand nombre de visiteurs, 
        artisans, entreprises, collectivités et architectes. Malgré la pression des grands salons internationaux, 
        la logique impose qu’il faut un grand salon français car la profession toute entière ne se déplacera pas à l’étranger…..
        A ce titre, de grands industriels européens étaient là….mais aussi une multitude d’acteurs en provenance de l’Asie…..</p>,
      date:'Du 4 au 8 novembre 2019',
      images:[
        {
          url:a18,
          alt:'Salon Mondial du BATIMENT à Paris- Villepinte'
        }
      ],
      title:'Salon Mondial du BATIMENT à Paris- Villepinte. BATIMAT, INTERCLIMA, IDEOBAINS…Toujours là !!!',
      id:'20'
    },
    {
      text:<>
      <p><b>Mr Cédric O, Secrétaire d’Etat chargé du Numérique</b> auprès du ministre de l’Économie et des Finances et du ministre de l’Action et des Comptes publics, 
      s’est rendu en <b>Corée du Sud, du 4 au 8 novembre 2019</b>. 
      Il s’agit de sa première visite en tant que membre du gouvernement français. 
      Il a rencontré plus particulièrement à ce titre <b>Mme PARK Young-sun, ministre des PME et des
      Startups (MSS) et les agences sous tutelle (KISED, KOSME anciennement SBC, KVIC)</b>.
      </p>

      <p>L’objectif de ce voyage était de <b>renforcer les liens bilatéraux</b> entre les deux pays en élargissant les relations dans le <b>domaine de l’innovation</b>; 
      ceci se confirmant par la <b>signature de plusieurs M.O.U.</b> faisant intervenir la French Tech. 
      Il profita pour rencontrer également plusieurs dirigeants de grands groupes et institutions financières comme Samsung Electronics, 
      Naver, Hyundai Motor Corp., LGChem, Korea Investment Corp.
      </p>

      <p>Mr O a rappelé que <b>:« La Corée du Sud est aujourd’hui la 11ème économie mondiale et le 5ème exportateur. 
        La France est le 5ème investisseur européen dans ce pays. La Corée du Sud est pour la France un partenaire de tout premier plan en Asie ».</b></p>
      </>,
      date:'04 au 08 Novembre 2019',
      images:[
        {
          url:a19,
          alt:'Mme PARK & Mr O'
        }
      ],
      title:'Déplacement de Mr Cédric O en Corée',
      id:'21'
    },
    {
      text:<>
      <p>Lors de la première quinzaine de décembre 2019, une mission économique de MARSEILLE s'est rendue à TOKYO, 
        au JAPON au <b>Forum de l'Innovation</b>. 
        Au-delà que la mission visait à développer les relations institutionnelles avait essentiellement pour objectif de promouvoir <b>l’innovation - notamment 
          les filières "Numérique", "Biotech-Santé", "Tourisme-Art de vivre", </b> 
        et ce en identifiant et visitant des lieux innovants (<b>incubateurs, nouveaux concepts,</b> etc.)
      </p>
      <p>Il est à rappeler que des liens profonds unissent Marseille et le <b>Japon</b>, 
        cette <b>3ème puissance économique mondiale</b> forte de ses <b>126 millions d’habitants</b>. 
        Les villes de <b>Marseille et Kobe sont jumelées depuis 1961</b>. 
        De ce fait, la délégation s'est déplacée les 12 et 13 décembre à Kyoto ainsi qu'à Kobe, 
        ville avec laquelle un projet européen sur les questions portuaires est notamment en cours.
      </p>
      <p>Il a été rappelé auprès de la communauté française au Japon, les événements à venir sur le territoire métropolitain: <b>Biennale MANIFESTA</b>, 
      l’unique biennale européenne itinérante qui sera pour la première fois en France, à Marseille, 
        du 7 juin au 1er novembre 2020. Congrès mondial de la Nature UICN 2020, et bien sûr l’année culturelle France au Japon en 2021, 
        le 60e anniversaire du jumelage Marseille-Kobe, le Mondial de Rugby 2023, et les Jeux Olympiques 2024.
      </p></>,
      date:'09 au 14 Décembre 2019',
      images:[
        {
          url:a20,
          alt:'Délégation de Marseille au JAPON'
        }
      ],
      title:'Délégation de Marseille au JAPON.',
      id:'22'
    },
    {
      text:<p>
        Ce webinaire réunira Mr <b>David-Pierre JALICON</b>, Président de la FKCCI et Pdg de DPJ & Partners Architecture, S.E.M. 
        <b>Philippe LEFORT</b>, Ambassadeur de France en Corée, Mr <b>Chang HUH</b>, 
        Vice-Ministre au ministère de l’économie et des finances en charge des affaires internationales (MOEF), 
        Mr <b>Sang-Hyun CHANG</b>, Pdg d’Invest Korea, Mr <b>­Mathieu ELIE</b>, 
        V.Pdg de la zone Asie Pacifique du groupe Guerbet et Secrétaire Général du Club Santé Corée, 
        et enfin Mr <b>Sébastien FALLETTI</b>, journaliste, correspondant Asie de l’Est pour le Figaro.
        </p>,
      date:'09 Avril 2020',
      images:[
        {
          url:a23,
          alt:'Webinaire FKCCI'
        }
      ],
      title:'FKCCI présente comment la Corée a géré le COVID 19',
      id:'23'
    },
    {
      text:<>
      <p>Mr <b>Sébastien FALLETTI</b>, journaliste, correspondant Asie de l’Est pour le Figaro a très bien résumé en fin du Webinaire organisé par la FKCCI combien et comment les occidentaux ne sont pas sérieux et préparés à de telles crises sanitaires. </p>
      <ul>
        <li>
          <b>1/.Réactivité:</b> Au pays du pali-pali, c’est-à-dire vite-vite, les coréens n’ont pas attendu de voir les évolutions du virus. 
           Ils ont fait le choix inverse de nos grands dirigeants, ne mettant pas en même temps leur économie à l’arrêt. 
           Pas de confinement.
        </li>
        <li>
          <b>2/.Mobilisation:</b> des acteurs étatiques et privés sans attendre, avec une capacité à vivre avec le risque mais en prenant le taureau par les cornes.
        </li>
        <li>
          <b>3/.Tests Massifs:</b> d’entrée, on veut regard=garder les choses en face! On identifie, on isole et ensuite on traite; on va au-devant des problèmes! 20 000 tests quotidien.
        </li>
        <li>
          <b>4/.Tracking:</b> on trace dès le début,… car on Corée on pense au collectif avant sa personne; c’est une question de culture…Max Pagniol rajoute: on ne fait pas dans la démagogie tout en sachant faire la différence entre tolérance et laxisme.
        </ li>
        <li>
          <b>5/.Cohésion de la population:</b> Chacun se construit dans le collectif, donc la responsabilité collective est immédiate car personne ne veut contaminer le voisin.
        </li>
      </ul>
      <p>Max Pagniol résume le bilan à ses amis français: crise démarrée le 4 février 2020. Le 18/02, identification de la super propagatrice. Distribution des masques, 2 par jour pour 2,3 euros. Politique des 3T : test, track, treat. A date du 9 avril 2020, 10384 contaminés, 6776 guéris, 204 morts!!! Une économie qui continue à fonctionner, et 150 Milliards d’investissements : cherchez l’erreur……….</p>
      </>,
       date:'09 Avril 2020',
       images:[
         {
           url:a24,
           alt:'Sébastien FALLETTI'
         }
       ],
       title:'Une leçon à prendre de l’exemple coréen dans sa gestion du COVID 19….',
      id:'24'
    },
    {
      text:<>
        <p>La Corée est un pays très réactif, ils ont la culture de la crise !!!</p>
        <p><b>Tests Massifs</b> d’entrée, on veut regarder les choses en face donc 20 000 tests sont faits au quotidien.</p>
        <p>Ensuite mise en place, dès le début, du traçage (<b>Tracking</b>) pour identifier et suivre les cas. </p>
        <p>On poursuit par le traitement (<b>Treating</b>) dans des hôpitaux « spécialisés » assurant l’efficience et la non propagation du virus. De plus le parc d’hôpitaux par habitant est 3 fois supérieur à la moyenne de l’OCDE.</p>
        <p>Enfin et pour finir, et ce n’est pas le moindre, une <b>participation collective </b>pour «gagner la guerre» ……. Nous sommes au stade de la volonté, ils sont au stade de la <b>volition</b>…c’est ça la différence. </p>
      </>,
      date:'09 avril 2020',
      images:[
        {
          url:a25,
          atl:'Politique des 3 T en Corée du Sud contre COVID 19'
        }
      ],
      title:'Politique des 3 T en Corée du Sud contre COVID 19',
      id:'25'
    }
  ];

  showArticle(n){
      const articleIndex = this.articles.indexOf(this.currentArticle);
      if (articleIndex === 0 && n === -1) return;
      if (articleIndex === this.articles.length - 1 && n === 1) return
      const newIndex = articleIndex+n;
      const newId = this.articles[newIndex].id;
      this.currentArticle = this.articles.find(a=>a.id === newId)
      
      this.props.history.push(`/actualités/articles/${newId}`);
  }


  render() {
    return (
      <div>
        <Header changeLanguage={(lg) => this.props.changeLanguage(lg)} language={this.props.language} />
        <div className="articles" ref={this.articleContainer}>
          {
            this.currentArticle.gallery? (
            <div className=" item active" >
              <p className="sectionTitle">{this.currentArticle.date}</p>
                <ArticleWithGallery article={this.currentArticle} />
            </div>
            ):(
            <div className=" item active" >
              <p className="sectionTitle">{this.currentArticle.date}</p>
                <Article article={this.currentArticle} />
            </div>
            )
          }

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