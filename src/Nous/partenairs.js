import React,{Component} from "react";
import Actibaie from "../assets/img/ACTIBAIE.JPG";
import Advancy from "../assets/img/ADVANCY.JPG";
import Glg from "../assets/img/GLG.JPG";
import IC from "../assets/img/i+C.JPG";
import SBC from "../assets/img/SBC.JPG";
import Xerfi from "../assets/img/Xerfi.JPG";

class Partenaire extends Component {
  constructor(props) {
    super(props);
    this.toggleLogo = React.createRef();
    this.partenaire = React.createRef();
  }

    defile = (p)=>{
      if (p.classList.contains('active')) {
        return
      } else {
          const previousPoint = this.toggleLogo.current.querySelector(".active");
          previousPoint.classList.remove("active");
          const previousPointIndex = previousPoint.getAttribute('index');
          const currentPointIndex = p.getAttribute('index')
          const logoBar = this.toggleLogo.current.previousSibling;
          const logos = logoBar.children;
          const logoBarLength = Array.from(logos).reduce((accu,cur)=>accu+cur.clientWidth,0);
          const containerLength = this.partenaire.current.offsetWidth;
          p.classList.toggle('active');
          const scrollDistance = Math.ceil((containerLength - logoBarLength) / 3) * currentPointIndex;
          Array.from(logos).map(logo=>{
            logo.style.transform =`translate(${scrollDistance}px)`;
          })
      }
    }
 
    render(){
        return <div className="partenaire" id="nos-partenaires" ref={this.partenaire}>
            {this.props.language === "fr" ? 
              <p className="title">
                <span>NOS PARTENAIRES</span>
              </p> : 
              this.props.language === 'korea'?
              <p className="title">
                <span>파트너</span>
              </p>:
              <p className="title">
                <span>OUR PARTNERS</span>
              </p>}
            <ul>
              <li>
                <img src={Advancy} />
              </li>
              <li>
                <img src={Xerfi} />
              </li>
              <li>
                <img src={IC} />
              </li>
              <li>
                <img src={Glg} />
              </li>
              <li>
                <img src={SBC} />
              </li>
              <li>
                <img src={Actibaie} />
              </li>
            </ul>
            <p ref={this.toggleLogo} id='toggle_logo'>
              <span className="active" index={0} onClick={e => this.defile(e.target)} />
              <span index={1} onClick={e => this.defile(e.target)} />
              <span index={2} onClick={e => this.defile(e.target)} />
              <span index={3} onClick={e => this.defile(e.target)} />
            </p>
          </div>;
    }
    
};

export default Partenaire;