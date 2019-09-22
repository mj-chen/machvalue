import React, { Component } from "react";
import uk from "../assets/img/United-Kingdom.png";
import cn from "../assets/img/China.png";
import kr from "../assets/img/South-Korea.png";
import fr from "../assets/img/France.png";
import MaxCover from "../assets/img/Max_Pagniol_grand.jpg";
class Flags extends Component {

    render() {
        return <div className="flags">
            <img src={uk} alt="uk" onClick={()=>this.props.changeLanguage('en')} />
            
            <img src={cn} alt="china" onClick={() => this.props.changeLanguage('cn')} />
            
    
            <img src={kr} alt="south korea" onClick={() => this.props.changeLanguage('korea')}/>
         
           
            <img src={fr} alt="france" onClick={() => this.props.changeLanguage('fr')} />
            
          </div>;
    }
}

export default Flags;