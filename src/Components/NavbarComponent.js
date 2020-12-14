import React from "react"
import {Link} from "react-router-dom";

const NavbarComponent = ({activeUser, logout}) =>

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
            <span className="fa-stack fa-lg">
                <i className="fa fa-bookmark fa-stack-2x" aria-hidden="true"/>
                <i className="fa fa-code fa-stack-1x text-white" aria-hidden="true"/>
            </span>
            <Link className="navbar-brand" to="/">CodeSaver</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"/>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/search">Search</Link>
                    </li>
                    {
                        (activeUser.username) &&
                            <li className="nav-item">
                                <Link className="nav-link" to="/mysnippets">My Snippets</Link>
                            </li>
                    }
                    {
                        (activeUser.username) &&
                            <li className="nav-item">
                                <Link className="nav-link" to="/favorites">Bookmarked</Link>
                            </li>
                    }
                    <li className="nav-item">
                        <Link className="nav-link" to="/recommended">Recommended</Link>
                    </li>
                    {
                        (activeUser.username && activeUser.type === "ADMIN") &&
                            <li className="nav-item">
                                <Link className="nav-link" to="/admin">Admin</Link>
                            </li>
                    }
                    <li className="nav-item">
                        <Link className="nav-link" to="/privacy">Privacy</Link>
                    </li>

                </ul>
                {
                    activeUser.username &&
                        <div className="dropdown">
                            <button className="btn btn-outline-primary dropdown-toggle" type="button" id="dropdownMenuButton"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                {activeUser.username}
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <Link className="nav-link" to="/profile">Profile</Link>
                                <Link className="nav-link" to="/newsnippet">New Snippet</Link>
                                <Link className="nav-link" to="/import_gist">Import Gist</Link>
                                <Link className="nav-link" to="#" onClick={(event) => logout(event)}>Logout</Link>
                            </div>
                        </div>
                }
                {
                    !activeUser.username &&
                        <form className="form-inline my-2 my-lg-0">
                            <Link className="btn btn-outline-primary my-2 my-sm-0" to="/login">
                                Login/Register
                            </Link>
                        </form>
                }
            </div>
        </div>
    </nav>

export default NavbarComponent;
