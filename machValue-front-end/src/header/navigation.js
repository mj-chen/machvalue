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
   
  componentDidMount = () => {
    const links = document.getElementById("mainNav").children[0].getElementsByTagName('a');
    Array.from(links).map((link) => link.addEventListener('click', this.closeMenu));
  }
  
    adjustScroll(el,adjust=-170){
        el.scrollIntoView();
        window.scrollBy(0, adjust);
    }

    closeMenu(){
      document.getElementById("menubar").classList.toggle("change");
      document.getElementById('mainNav').classList.toggle('hidden');
    }
    render(){
        return <nav className="hidden" id="mainNav">
            <ul>
              <li>
                <span>
                  {" "}
                <Link to="/nous"> QUI SOMMES NOUS</Link>
                </span>
                <ul>
                 <li>
                    <span>
                      <HashLink
                         to="/nous#fondateur"
                         scroll={el=>this.adjustScroll(el)}
                      >
                      Fondateur
                      </HashLink>
                    </span>
                  </li>
                  <li>
                    <span>
                      <HashLink 
                        to="/nous#rencontres-fondatrices"
                        scroll={el => this.adjustScroll(el)}          
                      >
                        Des rencontres fondatrices
                      </HashLink>
                    </span>
                  </li>
                  <li>
                    <span>
                      <HashLink 
                        to="/nous#nos-valeurs"
                        scroll={el => this.adjustScroll(el)}
                      >
                        Nos valeurs
                      </HashLink>
                    </span>
                  </li>
                  <li>
                    <span>
                      <HashLink 
                        to="nous#nos-atouts"
                        scroll={el => this.adjustScroll(el)}
                      >
                        Nos atouts
                      </HashLink>
                    </span>
                  </li>
                  <li>
                    <span>
                      <HashLink
                         to="/nous#notre-&eacute;quipe"
                         scroll={el => this.adjustScroll(el)}
                      >
                        Notre &eacute;quipe
                      </HashLink>
                    </span>
                  </li>
                  <li>
                    <span>
                      <HashLink
                        to="/nous#nos-partenaires"
                        scroll={el => this.adjustScroll(el,300)}
                      >
                        Nos partenaires
                      </HashLink>
                    </span>
                  </li>
                </ul>
              </li>
              <li>
                <span>
                  <Link to="/m&eacute;tiers">NOS M&Eacute;TIERS</Link>
                </span>
                <ul>
                  <li>
                    <span>
                      <HashLink 
                        to="/m&eacute;tiers#comp&eacute;titivit&eacute;-et-vitesse-de-d&eacute;veloppement"
                        scroll={el => this.adjustScroll(el)}
                      >
                        Comp&eacute;titivit&eacute; &amp; vitesse de
                        d&eacute;veloppement
                      </HashLink>
                    </span>
                  </li>
                  <li>
                    <span>
                      <HashLink 
                        to="/m&eacute;tiers#reengineering-des-process"
                        scroll={el => this.adjustScroll(el)}
                      >
                        Reengineering des process
                      </HashLink>
                    </span>
                  </li>
                  <li>
                    <span>
                      <HashLink 
                        to="/m&eacute;tiers#prospection-commerciale"
                        scroll={el => this.adjustScroll(el)}
                      >
                        Prospection commerciale
                      </HashLink>
                    </span>
                  </li>
                  <li>
                    <span>
                      <HashLink 
                        to="/m&eacute;tiers#mentoring"
                        scroll={el => this.adjustScroll(el)}
                      >
                        Mentoring
                      </HashLink>
                    </span>
                  </li>
                </ul>
              </li>
              <li>
                <span>
                  <Link to="/comp&eacute;tences">
                    NOS COMP&Eacute;TENCES
                  </Link>
                </span>
                <ul>
                  <li>
                    <span>
                      <HashLink 
                        to="/comp&eacute;tences#m&eacute;thodogie"
                        scroll={el => this.adjustScroll(el)}
                      >
                        M&eacute;thodologie
                      </HashLink>
                    </span>
                  </li>
                  <li>
                    <span>
                      <HashLink 
                        to="/comp&eacute;tences/#rencontres"
                        scroll={el => this.adjustScroll(el)}
                      >
                        Rencontres
                      </HashLink>
                    </span>
                  </li>
                </ul>
              </li>
              <li>
                <span>
                  <Link to="/actualit&eacute;s">ACTUALIT&Eacute;S</Link>
                </span>
              </li>
              <li>
                <span>
                  <Link to="/contact">CONTACT</Link>
                </span>
              </li>
              <li>
                <Flags />
              </li>
            </ul>
          </nav>;
    }
}

export default Navigation;