import React from "react"
import {Link} from "react-router-dom";

const NavbarComponent = () =>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
            <span>
                <i className="fa fa-code" aria-hidden="true"/>
                <i className="fa fa-bookmark" aria-hidden="true"/>
            </span>
            <a className="navbar-brand" href="#">CodeSaver</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"/>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Search <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                           data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Snippets
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="#">My Snippets</a>
                            <a className="dropdown-item" href="#">Starred</a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

export default NavbarComponent;