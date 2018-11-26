import React, { Component } from "react";
import uk from "../assets/img/United-Kingdom.png";
import cn from "../assets/img/China.png";
import kr from "../assets/img/South-Korea.png";
import fr from "../assets/img/France.png";
import {Link} from "react-router-dom";


class Flags extends Component {

    render() {
        return <div className="flags">
            <Link to="/english">
              {" "}
              <img src={`/${uk}`} alt="uk" />
            </Link>
            <Link to="/china">
              {" "}
              <img src={`/${cn}`} alt="china" />
            </Link>
            <Link to="/south-korea">
              <img src={`/${kr}`} alt="south korea" />
            </Link>
            <Link to="/">
              <img src={`/${fr}`} alt="france" />
            </Link>
          </div>;
    }
}

export default Flags;