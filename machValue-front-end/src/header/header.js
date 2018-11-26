import React, {Component} from "react";
import SVGIcon from "../svgIcons/icons";
import Menubar from "./menubar";
import Boite from "./boiteaulettre";
import Navigation from "./navigation";
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';

class Header extends Component{
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
                document.getElementsByClassName("header")[0].classList.add("slim-header");
            } else {
                document.getElementsByClassName("header")[0].classList.remove("slim-header");
            } 

        }  
    }

    render(){
        return <div className="header">
        <Link to="/"> <SVGIcon name="machvalueLogo" id="machvaluelogo"/></Link>
            <div>
                <Boite/>
                <Menubar/>
            </div>
            <Navigation />
        </div>;
    }
}

export default Header;

