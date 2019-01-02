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

class Navigation extends Component {

  constructor(props) {
    super(props);
    this.state = {
      language: this.props.language,
    }
    this.mainNav = React.createRef();
    this.links = React.createRef();
  }

  componentDidUpdate(prevProps) {
    if (this.props.language !== prevProps.language) {
      this.setState({
        language: this.props.language,
      })
    }
  }
   
  componentDidMount = () => {
    const links = this.links.current.getElementsByTagName('a');
    Array.from(links).map((link) => link.addEventListener('click', this.closeMenu));
  }
  
    adjustScroll(el,adjust=-170){
        el.scrollIntoView();
        window.scrollBy(0, adjust);
    }

    closeMenu(){
      document.getElementById("menubar").classList.toggle("change");
      this.mainNav.current.classList.toggle("hidden");
    }
    render(){
        return (
        <nav className="hidden" id="mainNav" ref={this.mainNav}>
            <ul ref={this.links}>
              <li>
                <span>
                  {" "}
                  {this.state.language === 'fr'?
                    <Link to="/nous"> QUI SOMMES-NOUS ?</Link>:
                    <Link to="/nous"> ABOUT US </Link>
                  }
                </span>
                <ul>
                 <li>
                    <span>
                    {this.state.language === 'fr' ?
                      <HashLink
                        to="/nous#fondateur"
                        scroll={el => this.adjustScroll(el)}
                      >
                        Fondateur
                      </HashLink>:
                      <HashLink
                        to="/nous#fondateur"
                        scroll={el => this.adjustScroll(el)}
                      >
                        FOUNDER
                      </HashLink>
                    }
                    </span>
                  </li>
                  <li>
                      <span>
                      {
                        this.state.language === 'fr' ?
                        <HashLink
                          to="/nous#rencontres-fondatrices"
                          scroll={el => this.adjustScroll(el)}
                        >
                          Des rencontres fondatrices
                      </HashLink>
                      :
                        <HashLink
                          to="/nous#rencontres-fondatrices"
                          scroll={el => this.adjustScroll(el)}
                        >
                          Meaningful encounters
                        </HashLink>
                      }
                      </span>
                  </li>
                  <li>
                    <span>
                      {
                        this.state.language === 'fr' ?
                        <HashLink
                          to="/nous#nos-valeurs"
                          scroll={el => this.adjustScroll(el)}
                        >
                          Nos valeurs
                        </HashLink>
                        :
                        <HashLink
                          to="/nous#nos-valeurs"
                          scroll={el => this.adjustScroll(el)}
                        >
                          Our values
                        </HashLink>
                      }
                    </span>
                  </li>
                  <li>
                    <span>
                      {
                        this.state.language === 'fr'?
                          <HashLink 
                            to="nous#nos-atouts"
                            scroll={el => this.adjustScroll(el)}
                          >
                            Nos atouts
                          </HashLink>:
                          <HashLink
                            to="nous#nos-atouts"
                            scroll={el => this.adjustScroll(el)}
                          >
                            Our strengths
                          </HashLink>
                      }
                    </span>
                  </li>
                  <li>
                    <span>
                      {
                        this.state.language === 'fr'?
                        <HashLink
                          to="/nous#notre-&eacute;quipe"
                          scroll={el => this.adjustScroll(el)}
                        >
                          Notre &eacute;quipe
                        </HashLink>:
                        <HashLink
                          to="/nous#notre-&eacute;quipe"
                          scroll={el => this.adjustScroll(el)}
                        >
                          Our team
                        </HashLink>
                      }
                    </span>
                  </li>
                  <li>
                    <span>
                      {
                        this.state.language === 'fr'?
                        <HashLink
                          to="/nous#nos-partenaires"
                          scroll={el => this.adjustScroll(el,300)}
                        >
                          Nos partenaires
                        </HashLink>:
                        <HashLink
                          to="/nous#nos-partenaires"
                          scroll={el => this.adjustScroll(el, 300)}
                        >
                          Our partners
                        </HashLink>
                      }
                    </span>
                  </li>
                </ul>
              </li>
              <li className ={this.state.language === 'en'?"business":""}>
                <span>
                  {
                    this.state.language === 'fr'?
                    <Link to="/m&eacute;tiers">NOS M&Eacute;TIERS</Link>:
                    <Link to="/m&eacute;tiers">OUR BUSINESSES</Link>
                  }
                </span>
                <ul>
                  <li>
                    <span>
                      {
                        this.state.language === 'fr'?
                        <HashLink 
                          to="/m&eacute;tiers#comp&eacute;titivit&eacute;-et-vitesse-de-d&eacute;veloppement"
                          scroll={el => this.adjustScroll(el)}
                        >
                          Comp&eacute;titivit&eacute; &amp; vitesse de
                          d&eacute;veloppement
                        </HashLink>:
                        <HashLink
                          to="/m&eacute;tiers#comp&eacute;titivit&eacute;-et-vitesse-de-d&eacute;veloppement"
                          scroll={el => this.adjustScroll(el)}
                        >
                          Competitiveness and development pace
                        </HashLink>
                      }
                    </span>
                  </li>
                  <li>
                    <span>
                      {
                        this.state.language === 'fr'?
                        <HashLink 
                          to="/m&eacute;tiers#reengineering-des-process"
                          scroll={el => this.adjustScroll(el)}
                        >
                          Reengineering des process
                        </HashLink>:
                        <HashLink
                          to="/m&eacute;tiers#reengineering-des-process"
                          scroll={el => this.adjustScroll(el)}
                        >
                          Process re-engineering
                        </HashLink>

                      }
                    </span>
                  </li>
                  <li>
                    <span>
                      {
                        this.state.language === 'fr'?
                        <HashLink 
                          to="/m&eacute;tiers#prospection-commerciale"
                          scroll={el => this.adjustScroll(el)}
                        >
                          Prospection commerciale
                        </HashLink>:
                        <HashLink
                          to="/m&eacute;tiers#prospection-commerciale"
                          scroll={el => this.adjustScroll(el)}
                        >
                          Prospecting
                        </HashLink>
                      }
                    </span>
                  </li>
                  <li>
                    <span>
                      {
                        this.state.language === 'fr'?
                        <HashLink 
                          to="/m&eacute;tiers#mentoring"
                          scroll={el => this.adjustScroll(el)}
                        >
                          Mentoring
                        </HashLink>:
                        <HashLink
                          to="/m&eacute;tiers#mentoring"
                          scroll={el => this.adjustScroll(el)}
                        >
                          Mentoring
                        </HashLink>
                      }
                    </span>
                  </li>
                </ul>
              </li>
              <li>
                <span>
                  {
                    this.state.language === 'fr'?
                    <Link to="/comp&eacute;tences">
                      NOS COMP&Eacute;TENCES
                    </Link>:
                    <Link to="/comp&eacute;tences">
                      OUR SKILLS
                    </Link>
                  }
                </span>
                <ul>
                  <li>
                    <span>
                      {
                        this.state.language === 'fr'?
                        <HashLink 
                        to="/comp&eacute;tences#m&eacute;thodologie"
                          scroll={el => this.adjustScroll(el)}
                        >
                          M&eacute;thodologie
                        </HashLink>:
                        <HashLink
                          to="/comp&eacute;tences#m&eacute;thodologie"
                          scroll={el => this.adjustScroll(el)}
                        >
                          Methodology 
                        </HashLink>
                      }
                    </span>
                  </li>
                  <li>
                    <span>
                      {
                        this.state.language === 'fr'?
                        <HashLink 
                          to="/comp&eacute;tences#rencontres"
                          scroll={el => this.adjustScroll(el)}
                        >
                          Rencontres
                        </HashLink>:
                        <HashLink
                          to="/comp&eacute;tences#rencontres"
                          scroll={el => this.adjustScroll(el)}
                        >
                          Meaningful encounters
                        </HashLink>
                      }
                    </span>
                  </li>
                </ul>
              </li>
              <li>
                <span>
                  {
                    this.state.language ==='fr'?
                    <Link to="/actualit&eacute;s">ACTUALIT&Eacute;S</Link>:
                    <Link to="/actualit&eacute;s">NEWS</Link>
                  }
                </span>
              </li>
              <li>
                <span>
                  <Link to="/contact">CONTACT</Link>
                </span>
              </li>
              <li>
                <Flags changeLanguage={(lg)=>this.props.changeLanguage(lg)} />
              </li>
            </ul>
        </nav>)
    }
}

export default Navigation;