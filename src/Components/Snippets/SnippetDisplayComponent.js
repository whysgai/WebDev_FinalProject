import React from "react"
import {Link} from "react-router-dom";
import TagComponent from "../TagComponent";

const SnippetDisplayComponent = ({snippet, toggleLike, activeUser}) =>
    <div className="card-body shadow hoverDiv">
        {/*Title and Timestamp*/}
        <div className="row col-12">
            <div className="col-8">
                <Link to={`/snippet/${snippet._id}`} className="h5">{snippet.title}</Link>
            </div>
            <div className="col-4 text-secondary">
                <div className="float-right">
                    {
                        (!snippet.likes.includes(activeUser.username)) &&
                            <button className="btn btn-outline-dark btn-like ml-2" onClick={() => {
                                console.log("In component User", activeUser.username, "liked snippet", snippet);
                                toggleLike(activeUser, snippet)
                            }}>
                                <span className="fa-stack">
                                    <i className="fa fa-bookmark fa-stack-2x" aria-hidden="true"/>
                                    <i className="fa fa-code fa-stack-1x text-white" aria-hidden="true"/>
                                </span>
                            </button>
                    }
                    {
                        (snippet.likes.includes(activeUser.username)) &&
                            <button className="btn btn-dark btn-like ml-2">
                                <span className="fa-stack">
                                    <i className="fa fa-bookmark fa-stack-2x" aria-hidden="true"/>
                                    <i className="fa fa-code fa-stack-1x text-black" aria-hidden="true"/>
                                </span>
                            </button>
                    }
                </div>
                <div className="float-right">
                    <h6>Published: {snippet.dateCreated}</h6>
                </div>
            </div>
        </div>
        {/*Snippet Description*/}
        <div className="row col-12">
            <p className="col-12">{snippet.description}</p>
        </div>
        {/*Snippet Content*/}
        <div className="p-3 col-12">
            <pre className="text-wrap">
                {snippet.codeText}
            </pre>
        </div>
        <div className="row col-12">
            {/*Creator*/}
            <div className="col-3">
                <h6>Created By: <a href="#">{snippet.creator}</a></h6>
            </div>
            {/*Tags*/}
            <div className="col-9 text-secondary float-right">
                <div className="float-right">
                    <div className="tagBackground rounded row ">
                        {
                            (snippet.tags !== null && snippet.tags.length > 0) &&
                                snippet.tags.map((tag, index) =>
                                    <TagComponent
                                        key={index}
                                        tag={tag}
                                        snippet={snippet}
                                        edit={false}
                                    />
                                )
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>

export default SnippetDisplayComponent
