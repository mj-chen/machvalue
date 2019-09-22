import React, { Component } from "react";

export const Menubar = React.forwardRef((props, ref) => (
    <div id="menubar" ref={ref} onClick={() => props.toggleMenu()}>
        <div className="bar1"></div>
        <div className="bar2" ></div>
        <div className="bar3"></div>
    </div>
));

export const menubarRef = React.createRef();
