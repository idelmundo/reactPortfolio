import React from "react";
import aboutMe from "../aboutMe";
import projects from "../project";
import contactMe from "../contactMe";

function navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="nav">
        <div className="container">
            {/* <a className="navbar-brand js-scroll-trigger"></a> */}
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                Menu
                <i className="fas fa-bars"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ml-auto">
                <button onClick={aboutMe} >About Me</button>
                <button onClick={projects} >Projects</button>
                <button onClick={contactMe} >Contact Me</button>
                </ul>
            </div>
        </div>
    </nav>
    )
}

export default navbar;