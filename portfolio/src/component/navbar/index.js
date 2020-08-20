import React from "react";
import { Link } from "react-router-dom";

function navbar() {
    return (
        <nav className="navbar navbar-light navbar-expand-md bg-faded justify-content-center bg-secondary" id="nav">
        <div className="container">
            {/* <a className="navbar-brand js-scroll-trigger"></a> */}
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                Menu
                <i className="fas fa-bars"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ml-auto">
                <Link className="nav-link " to="/aboutMe"><span className="text-white">About Me</span></Link>
                <Link className="nav-link " to="/project"><span className="text-white">Projects</span></Link>
                <Link className="nav-link " to="/contactMe"><span className="text-white">Contact Me</span></Link>
                </ul>
            </div>
        </div>
    </nav>
    )
}

export default navbar;