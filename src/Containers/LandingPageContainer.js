import React from "react";
import {findAllUsers, getUser, getUserUsername} from "../Actions/UserActions";
import {connect} from "react-redux";
import {findAllPublicSnippets} from "../Actions/SnippetActions";
import {callFirebase, getUserData, isLoggedIn} from "../services/UserService";
import fire from "../config/db";
// import {connect} from "react-redux";
// import fire from "./../config/db";

class LandingPageContainer extends React.Component {

    constructor() {
        super();
        this.state = {
            user: {username: ""},
            snippets: []
        };
    }

    componentDidMount() {
        if (this.props.user !== undefined) {
            this.state.user = this.props.user
        }
        this.props.findAllPublicSnippets()
        this.render()
    }

    componentDidUpdate() {
        // this.props.findAllPublicSnippets()
        this.render();
    }

    render() {
        function currentTime() {
            let n =  new Date();
            let y = n.getFullYear();
            let m = n.getMonth() + 1;
            let d = n.getDate();
            let h = n.getHours();
            let min = n.getMinutes();
            let s = n.getSeconds();

            return  m + "/" + d + "/" + y + " " + h + ":" + min + ":" + s;
        }

        return (
            <div>
                {
                    this.state.user !== null &&
                    <div>
                        <div className="jumbotron text-center" style={{height: 200}}>
                            <h1 className="display-4">Welcome back to CodeSaver {this.state.user.username}!</h1>
                        </div>
                        <div>
                            <h6 class="text-secondary">Updated On: {currentTime()}</h6>
                        </div>
                    </div>
                }
                {
                    this.state.user == null &&
                    <div className="jumbotron text-center" style={{height: 275}}>
                        <h1 className="display-4">Welcome to CodeSaver!</h1>
                        <p className="lead">"We are on a mission to make your coding life simpler, more productive, and more efficient."</p>
                        <p className="lead">
                            <a className="btn btn-primary btn-lg m-2" href="#" role="button">About Us</a>
                            <a className="btn btn-primary btn-lg m-2" href="#" role="button">Learn More</a>
                            <a className="btn btn-primary btn-lg m-2" href="#" role="button">Join Now</a>
                        </p>
                    </div>
                }
                <div>
                    <div className=" text-center">
                        <h1 className="display-4">Coming Soon!</h1>
                    </div>
                </div>
                {/*<button onClick={() => callFirebase()}>Call firebase</button>*/}
                <button onClick={() => console.log(this.state)}>Get User From State</button>
                <button onClick={() => this.state.user = this.props.getUser()}>Get User</button>
            </div>
        )
    }
}

const stateToPropertyMapper = (state) => ({
    snippets: state.snippetReducer.snippets,
    user: state.userReducer.user
})

const propertyToDispatchMapper = (dispatch) => ({
    findAllPublicSnippets: () => findAllPublicSnippets(dispatch),
    getUserUsername: () => getUserUsername(dispatch),
    getUser: () => getUser(dispatch)
})

export default connect(stateToPropertyMapper, propertyToDispatchMapper)
(LandingPageContainer)

