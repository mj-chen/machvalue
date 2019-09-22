import React, {Component} from "react";
import SVGIcon from "../svgIcons/icons";
import {Menubar, menubarRef} from "./menubar";
import Boite from "./boiteaulettre";
import { Navigation, navRef } from "./navigation";
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';

class Header extends Component{
    constructor(props){
        super(props);
        this.header = React.createRef();
    }
    componentDidMount = () => {
        window.addEventListener('scroll', this.handleOnScroll)
    }

    componentWillUnmount = () => {
        window.removeEventListener('scroll', this.handleOnScroll)
    }

    handleOnScroll = () => {
        if(window.innerWidth>=1024){
            const yScroll = window.scrollY
            if (yScroll > 50) {
               this.header.current.classList.add("slim-header");
            } else {
               this.header.current.classList.remove("slim-header");
            } 
        }  
    }

    toggleMenu() {
        // Animation of menu bar
        menubarRef.current.classList.toggle('change');
       
        //open menu
        navRef.current.classList.toggle('hidden');
    }

    navigateTo = (el, adjust = -170) => {
        el.scrollIntoView();
        window.scrollBy(0, adjust);
        menubarRef.current.classList.remove("change");
        navRef.current.classList.add("hidden");
    }

    render(){
    
        return (
        <div ref={this.header} className="header">
            <Link to="/"> <SVGIcon name="machvalueLogo" id="machvaluelogo"/></Link>
            <div>
                <Boite/>
                <Menubar 
                    ref={menubarRef}
                    toggleMenu = {()=>this.toggleMenu()}
                />
            </div>
            <Navigation 
                changeLanguage={(lg)=>this.props.changeLanguage(lg)} 
                language = {this.props.language}
                navigateTo = {(el, adjust) => this.navigateTo(el, adjust)}
            />
        </div>);
    }
}

export default Header;

