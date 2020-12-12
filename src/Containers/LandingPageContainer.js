import React from "react";
import {findAllUsers} from "../Actions/UserActions";
import {connect} from "react-redux";
import {findAllPublicSnippets} from "../Actions/SnippetActions";
import SnippetSearchListComponent from "../Components/Search/SnippetSearchListComponent";
import "./LandingPageComponent.css"
// import {connect} from "react-redux";
// import fire from "./../config/db";
import snippetPicture from "../assets/media/sample_snippet.PNG"
import {Link} from "react-router-dom";
import codePic from "../assets/media/computer_code.png"
import valuesCode from "../assets/media/values_2.png"

class LandingPageContainer extends React.Component {

    constructor() {
        super();
        this.state = {
            // user: "alkhalifas",
            user: null,
            snippets: []
        };
    }


    componentDidMount() {
        this.props.findAllPublicSnippets()
        // this.render();
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
                {console.log(this.props.snippets)}
                {
                    this.state.user !== null &&

                    <div>
                        <div className="jumbotron text-center" style={{height: 200}}>
                            <h1 className="display-4">Welcome back to CodeSaver, {this.state.user}!</h1>
                        </div>
                        <div>
                            <h6 class="text-secondary">Updated On: {currentTime()}</h6>
                        </div>
                        <SnippetSearchListComponent snippets={this.props.snippets}/>
                    </div>
                }
                {
                    this.state.user == null &&
                        <div>
                            <div className=" text-center">
                                <h1 className="display-3">Welcome to CodeSaver!</h1>
                                <p className="lead">"We are on a mission to make your coding life simpler, more productive, and more efficient."</p>
                                {/*<p className="lead">*/}
                                {/*    <a className="btn btn-primary btn-lg m-2" href="#" role="button">About Us</a>*/}
                                {/*    <a className="btn btn-primary btn-lg m-2" href="#" role="button">Learn More</a>*/}
                                {/*    <a className="btn btn-primary btn-lg m-2" href="#" role="button">Join Now</a>*/}
                                {/*</p>*/}
                            </div>
                            <div className="text-center">
                                <img src={codePic}/>
                            </div>
                            <div>
                                <h2> About Us</h2>
                                <p  className="lead ">
                                    CodeSaver is an American technology company founded by three Students from Northeastern
                                    University in Boston Massachusetts. CodeSaver was founded on the three principles of
                                    making coding life simple, more efficient, and more productive. Our objective as a company
                                    is to build a reliable, efficient, and agile platform where people can come to save, organize,
                                    and share their code.
                                </p>
                            </div>

                            <div
                                className="text-center"
                            >
                                <img
                                    className="text-center align-content-center"
                                    src={valuesCode}/>
                            </div>

                            <div>
                                <h2>How it Works</h2>
                                <p  className="lead ">
                                    CodeSaver is an American technology company founded by three Students from Northeastern
                                    University in Boston Massachusetts. CodeSaver was founded on the three principles of
                                    making coding life simple, more efficient, and more productive. Our objective as a company
                                    is to build a reliable, efficient, and agile platform where people can come to save, organize,
                                    and share their code.
                                </p>
                            </div>


                            <section id="cd-timeline" className="cd-container">
                                <div className="cd-timeline-block">
                                    <div className="cd-timeline-img cd-picture">
                                        <i className="fas fa-file-alt"></i>

                                    </div>

                                    <div className="cd-timeline-content">
                                        <h2>Register For a Free Account</h2>
                                        <p>Registering for an account is easy, and takes less than 60 seconds to complete. Please visit our privacy page for more information.</p>
                                        <span className="cd-date"><h3>Register</h3></span>
                                        <a className="btn btn-primary btn-lg m-2" href="#" role="button">Join Now</a>
                                    </div>
                                </div>

                                <div className="cd-timeline-block">
                                    <div className="cd-timeline-img cd-picture">
                                        <i className="fas fa-file-alt"></i>

                                    </div>

                                    <div className="cd-timeline-content">
                                        <h2>Create Snippet</h2>
                                        <p>Creating snippets is easy! CodeSave currently supports a number of popular languages within our online IDE such as Python and Javascript.</p>
                                        {/*<img src="../assets/media/sample_snippet.png"></img>*/}
                                        <img src={snippetPicture} />
                                        {/*<img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg" />*/}
                                        <span className="cd-date"><h3>Create</h3></span>
                                    </div>
                                </div>

                                <div className="cd-timeline-block">
                                    <div className="cd-timeline-img cd-picture">
                                        <i className="fas fa-file-alt"></i>

                                    </div>

                                    <div className="cd-timeline-content">
                                        <h2>Save & Share</h2>
                                        <p>Save your snippet for future use. You have the option of sharing your snippets publicly, or keeping them private. CodeSave is also fully integrated with GitHub allowing you to post and get Github Gists.</p>
                                        <span className="cd-date"><h3>Save</h3></span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50"
                                             fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd"
                                                  d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                                        </svg>
                                    </div>
                                </div>
                            </section>


                            <div className="row text-center ">
                                <p className=" mr-2 lead">Copyright 2020 CodeSaver Technologies LLC. All rights reserved. Privacy policies can be found</p>
                                <p><Link className="lead" to="/privacy">here</Link></p>
                                <p className=" mr-2 lead">. Follow us on social media </p>

                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="royalblue"
                                     className="bi bi-facebook mr-2" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd"
                                          d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="royalblue"
                                     className="bi bi-linkedin" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd"
                                          d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212h-2.4s.03-6.547 0-7.225h2.4v1.023a5.54 5.54 0 0 0-.016.025h.016v-.025c.32-.493.89-1.193 2.165-1.193 1.58 0 2.764 1.033 2.764 3.252v4.143h-2.4V9.529c0-.972-.348-1.634-1.217-1.634-.664 0-1.059.447-1.233.878-.063.154-.079.37-.079.586v4.035z"/>
                                </svg>
                            </div>
                        </div>
                }
            </div>
        )
    }
}

const stateToPropertyMapper = (state) => ({
    snippets: state.snippetReducer.snippets
})

const propertyToDispatchMapper = (dispatch) => ({
    findAllPublicSnippets: () => findAllPublicSnippets(dispatch)
})

export default connect(stateToPropertyMapper, propertyToDispatchMapper)
(LandingPageContainer)

