import React from "react"
import {Link} from "react-router-dom";

const NavbarComponent = () =>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
            <span className="fa-stack fa-lg">
                <i className="fa fa-bookmark fa-stack-2x" aria-hidden="true"/>
                <i className="fa fa-code fa-stack-1x text-white" aria-hidden="true"/>
            </span>
            <Link className="navbar-brand" to="/">CodeSaver</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"/>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/search">Search <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                         <Link className="nav-link" to="/user_snippets">Profile</Link>
                    </li>
                    <li>
                        <Link className="nav-link" to="/mysnippets">My Snippets</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/recommended">Starred</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/import_gist">Import</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/admin">Admin</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/privacy">Privacy</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/register">Register</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/login2">Login</Link>
                    </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <Link className="nav-link" to="/login">
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">User</button>
                    </Link>
                </form>
            </div>
        </div>
    </nav>

export default NavbarComponent;
