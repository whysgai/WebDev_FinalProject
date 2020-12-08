import React from "react";
// import {connect} from "react-redux";
// import fire from "./../config/db";

export default class LandingPageContainer extends React.Component {

    state = {
        user: "alkhalifas"
    };



    componentDidMount() {
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
    }

    render() {
        return (
            <div>
                {console.log(this.state.user)}
                {
                    !this.state.user == null &&
                        <h1>Not Null</h1>
                }
                {
                    this.state.user == null &&
                    <h1>Null</h1>
                }
                <div className="jumbotron text-center" style={{height: 275}}>
                    <h1 className="display-4">Welcome to CodeSaver!</h1>
                    <p className="lead">"We are on a mission to make your coding life simpler, more productive, and more efficient."</p>
                        <p className="lead">
                            <a className="btn btn-primary btn-lg m-2" href="#" role="button">About Us</a>
                            <a className="btn btn-primary btn-lg m-2" href="#" role="button">Learn More</a>
                            <a className="btn btn-primary btn-lg m-2" href="#" role="button">Join Now</a>
                        </p>
                </div>
            </div>
        )
    }
}

