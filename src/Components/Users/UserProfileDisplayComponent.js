import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import fire from "../../config/db";
import {findAllPublicSnippets} from "../../Actions/SnippetActions";
import {connect} from "react-redux";
import {getUser} from "../../Actions/UserActions";

const UserProfileDisplayComponent = ({user}) => {
    return (
        <div className={"jumbotron"}>
                <span>
                    <i className="fa fa-user fa-lg fa-5x" aria-hidden="true" style={{padding: 10}}/>
                    <h4>{user.username}</h4>
                    <h4>{user.email}</h4>
                    <h4>{user.type}</h4>
                </span>

        </div>)
}
export default UserProfileDisplayComponent
