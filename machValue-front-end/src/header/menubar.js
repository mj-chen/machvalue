import React, { Component } from "react";


class Menubar extends Component {
    openMenu() {
        // Animation of menu bar
        document.getElementById('menubar').classList.toggle('change');
        //open menu
        document.getElementById('mainNav').classList.toggle('hidden');
    }
    render() {
        return (
            
                <div id="menubar" onClick={() => this.openMenu()}>
                    <div className="bar1"></div>
                    <div className="bar2" ></div>
                    <div className="bar3"></div>
                </div>
        )
    }
}

export default Menubar;