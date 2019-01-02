import React, { Component } from "react";
import uk from "../assets/img/United-Kingdom.png";
import cn from "../assets/img/China.png";
import kr from "../assets/img/South-Korea.png";
import fr from "../assets/img/France.png";
import {Link} from "react-router-dom";


class Flags extends Component {

    render() {
        return <div className="flags">
            <img src={`/${uk}`} alt="uk" onClick={()=>this.props.changeLanguage('en')} />
            <Link to="/china">
              {" "}
              <img src={`/${cn}`} alt="china" />
            </Link>
            <Link to="/south-korea">
              <img src={`/${kr}`} alt="south korea" />
            </Link>
           
          <img src={`/${fr}`} alt="france" onClick={() => this.props.changeLanguage('fr')} />
            
          </div>;
    }
}

export default Flags;