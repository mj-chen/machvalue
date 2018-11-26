import React,{Component} from "react";
import Cover from './cover';
import HomeHeader from '../header/homeHeader';
import Header from "../header/header";
import MaxCover from "../assets/img/Max_Pagniol_grand.jpg";
import Footer from "../extra/footer";

import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';

class HomePage extends Component{
  render(){
    return <div>
      <HomeHeader />
      <nav className='nav' >
        <ul>
          <li className='active'><Link to='/nous'><span>1. </span> QUI SOMMES NOUS</Link></li>
          <li><Link to='/m&eacute;tiers'><span>2. </span> NOS M&Eacute;TIERS</Link></li>
          <li><Link to='/comp&eacute;tences'><span>3. </span> NOS COMP&Eacute;TENCES</Link></li>
          <li><Link to='/contact'><span>4. </span> CONTACT</Link></li>
          <li><Link to='/actualit&eacute;s'><span>5. </span> ACTUALIT&Eacute;S</Link></li>
        </ul>
      </nav>
      <Cover/>
      <Footer/>

     </div> 
  }
    
}

export default HomePage;