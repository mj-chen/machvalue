import React, {Component} from "react";
import SVGIcon from "../svgIcons/icons";
import Menubar from "./menubar";
import Boite from "./boiteaulettre";
import Navigation from "./navigation";
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

    render(){
        return (
        <div ref={this.header} className="header">
            <Link to="/"> <SVGIcon name="machvalueLogo" id="machvaluelogo"/></Link>
            <div>
                <Boite/>
                <Menubar/>
            </div>
            <Navigation changeLanguage={(lg)=>this.props.changeLanguage(lg)} language = {this.props.language}/>
        </div>);
    }
}

export default Header;

