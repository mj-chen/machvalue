import React,{Component} from "react";
import Actibaie from "../assets/img/ACTIBAIE.JPG";
import Advancy from "../assets/img/ADVANCY.JPG";
import Glg from "../assets/img/GLG.JPG";
import IC from "../assets/img/i+C.JPG";
import SBC from "../assets/img/SBC.JPG";
import Xerfi from "../assets/img/Xerfi.JPG";

class Partenaire extends Component {
        defile = (p)=>{
            if (p.classList.contains('active')) {
                console.log('active')
                return
            } else {
                const previousPoint = document.getElementById("toggle_logo").getElementsByClassName("active")[0];
                previousPoint.classList.remove("active");
                const previousPointIndex = previousPoint.getAttribute('index');
                const currentPointIndex = p.getAttribute('index')
                const logoBar = document.getElementById('toggle_logo').previousSibling;
                const logos = logoBar.children;
                const logoBarLength = Array.from(logos).reduce((accu,cur)=>accu+cur.clientWidth,0);
                const containerLength = document.getElementById('nos-partenaires').offsetWidth;
                p.classList.toggle('active');
                const scrollDistance = Math.ceil((containerLength - logoBarLength) / 3) * currentPointIndex;
                Array.from(logos).map(logo=>{
                    logo.style.transform =`translate(${scrollDistance}px)`;
                })
            }
        }
 
    render(){
        return <div className="partenaire" id="nos-partenaires">
            <p className="title">
                <span>NOS PARTENAIRES</span>
            </p>
            <ul>
                <li>
                    <img src={`/${Actibaie}`} />
                </li>
                <li>
                    <img src={`/${Advancy}`} />
                </li>
                <li>
                    <img src={`/${Xerfi}`} />
                </li>
                <li>
                    <img src={`/${IC}`} />
                </li>
                <li>
                    <img src={`/${Glg}`} />
                </li>
                <li>
                    <img src={`/${SBC}`} />
                </li>
            </ul>
            <p id="toggle_logo">
                <span className='active' index={0} onClick={(e)=>this.defile(e.target)}></span> 
                <span index={1} onClick={(e) => this.defile(e.target)}></span>
                <span index={2} onClick={(e) => this.defile(e.target)}></span>
                <span index={3} onClick={(e) => this.defile(e.target)}></span>
            </p>
        </div>;
    }
    
};

export default Partenaire;