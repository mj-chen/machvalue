import React,{Component} from "react";
import Cover from './cover';
import HomeHeader from '../header/homeHeader';
import Footer from "../extra/footer";

import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';

class HomePage extends Component{
 
  render(){
    const {language} = this.props;
    return (
     <div className='home'>
        <HomeHeader changeLanguage={(lg)=>this.props.changeLanguage(lg)} language = {language} />
      
          <nav className='nav'>
          {
            language === 'fr'?
              <ul>
                <li className='active'><Link to='/nous'><span>1. </span> QUI SOMMES-NOUS ?</Link></li>
                <li><Link to='/m&eacute;tiers'><span>2. </span> NOS M&Eacute;TIERS</Link></li>
                <li><Link to='/comp&eacute;tences'><span>3. </span> NOS COMP&Eacute;TENCES</Link></li>
                <li><Link to='/contact'><span>4. </span> CONTACT</Link></li>
                <li><Link to='/actualit&eacute;s'><span>5. </span> ACTUALIT&Eacute;S</Link></li>
              </ul>: language === 'korea'?
                <ul>
                  <li className='active'><Link to='/nous'><span>1. </span> 회사소개 </Link></li>
                  <li><Link to='/m&eacute;tiers'><span>2. </span> 사업분야</Link></li>
                  <li><Link to='/comp&eacute;tences'><span>3. </span> 조직역량</Link></li>
                  <li><Link to='/contact'><span>4. </span> 연락처</Link></li>
                  <li><Link to='/actualit&eacute;s'><span>5. </span> 뉴스레터</Link></li>
                </ul>: language === 'cn'?
                  <ul>
                    <li className='active'><Link to='/nous'><span>1. </span> 关于我们</Link></li>
                    <li><Link to='/m&eacute;tiers'><span>2. </span> 公司业务</Link></li>
                    <li><Link to='/comp&eacute;tences'><span>3. </span> 公司能力</Link></li>
                    <li><Link to='/contact'><span>4. </span> 联系我们</Link></li>
                    <li><Link to='/actualit&eacute;s'><span>5. </span> 公司动态</Link></li>
                  </ul>:
                <ul>
                  <li className='active'><Link to='/nous'><span>1. </span> ABOUT US</Link></li>
                  <li><Link to='/m&eacute;tiers'><span>2. </span> OUR BUSINESS</Link></li>
                  <li><Link to='/comp&eacute;tences'><span>3. </span> OUR SKILLS</Link></li>
                  <li><Link to='/contact'><span>4. </span> CONTACT</Link></li>
                  <li><Link to='/actualit&eacute;s'><span>5. </span> NEWS</Link></li>
                </ul>
          }      
          </nav>
        <Cover language={language}/>
        <Footer language={language}/>
     </div>
    )
  }
}

export default HomePage;