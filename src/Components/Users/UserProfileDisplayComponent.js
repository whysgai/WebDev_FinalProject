import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import fire from "../../config/db";
import {findAllPublicSnippets} from "../../Actions/SnippetActions";
import {connect} from "react-redux";
import {getUser} from "../../Actions/UserActions";
import profilePic from "../../assets/media/profile_pic_2.webp"



const UserProfileDisplayComponent = ({user, snippets}) => {

    const calcMin = (numSnip) => {
        return numSnip*12
    };

    const calcHr = (numSnip) => {
        return (numSnip*12) / 60
    };

    return (
        <div>
            <h2 className="m-3">Profile Page: {user.username}</h2>
            <div className={"jumbotron p-5"}>
                <div className={"row"}>
                    <div class={"mr-5 col-1"}>
                        {/*<img*/}
                        {/*    className="col-lg-4 col-md-3 col-sm-1"*/}
                        {/*    src={profilePic}/>*/}

                        <i className="fa fa-user fa-lg fa-5x" aria-hidden="true" style={{padding: 10}}/>
                    </div>
                    <div  class={"mr-5 col-5"}>
                        <span>
                            <h3>Username:  {user.username}</h3>
                            <h3>Email:  {user.email}</h3>
                            <h3>Status:  {user.type}</h3>
                         </span>
                    </div>
                    <div class={"col-4 container"}>
                        <h3>Total Snippets: {snippets.length}</h3>
                        <h3>Time Saved: {calcMin(snippets.length)} min</h3>
                        <h3>Time Saved: {calcHr(snippets.length)} hr</h3>

                    </div>
                </div>
            </div>
        </div>

}
export default UserProfileDisplayComponent
