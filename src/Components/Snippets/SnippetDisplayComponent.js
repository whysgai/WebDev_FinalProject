import React from "react"
import {Link} from "react-router-dom";
import TagComponent from "../TagComponent";

const SnippetDisplayComponent = ({snippet, toggleLike, toggleRecommended, activeUser, singleview}) =>
    <div className="card-body shadow hoverDiv rounded">
        {/*Title and Timestamp*/}
        <div className="row col-12">
            <div className="col-12 col-md-6 col-lg-7">
                {snippet.recommended? <span className="mr-2"><i className="fa fa-certificate pr-3`" aria-hidden="true"/></span> : null}
                <Link to={`/snippet/${snippet._id}`} className="h5">{snippet.title}</Link>
            </div>
            <div className="col-12 col-lg-5 col-md-6 text-secondary">
                {
                    activeUser.username &&
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
                                <button className="btn btn-dark btn-like ml-2" onClick={() => {
                                    console.log("In component User", activeUser.username, "liked snippet", snippet);
                                    toggleLike(activeUser, snippet)
                                }}>
                                            <span className="fa-stack">
                                                <i className="fa fa-bookmark fa-stack-2x" aria-hidden="true"/>
                                                <i className="fa fa-code fa-stack-1x text-dark font-weight-bold"
                                                   aria-hidden="true"/>
                                            </span>
                                </button>
                            }
                        </div>
                }
                <div className="float-right mt-1">
                    <h6>Published: {snippet.dateCreated}</h6>
                </div>
            </div>
        </div>
        {/*Snippet Description*/}
        <div className="row col-12">
            <p className="col-12">{snippet.description}</p>
        </div>
        {/*Snippet Content*/}
        {
            console.log("Displayed snippet:", snippet)
        }
        <div className="p-3 col-12 mb-2">
            <pre className="col-12 pt-2 pb-2 border">
                {
                    (singleview) &&
                        <code className="all">
                            {snippet.codeText}
                        </code>
                }
                {
                    (!singleview && snippet.codeText) &&
                        snippet.codeText.split(/\r?\n/).splice(0,5).map((line, index) =>
                            <code key={index} className="some">
                                {line+"\n"}
                            </code>
                        )
                }
            </pre>
        </div>
        <div className="col-12 mb-2">
            <Link to={`/snippet/${snippet._id}`} className={`${singleview ? "d-none" : ""}`}>More...</Link>
            {
                (activeUser.type === "ADMIN") &&
                    <span>
                        {
                            snippet.recommended &&
                                <button className={`btn btn-outline-secondary ${singleview ? "" : "float-right"}`}
                                        onClick={() => toggleRecommended(snippet)}>
                                    Recommend <i className="fa fa-certificate" aria-hidden="true"/>
                                </button>
                        }
                        {
                            !snippet.recommended &&
                                <button className={`btn btn-outline-secondary ${singleview ? "" : "float-right"}`}
                                        onClick={() => toggleRecommended(snippet)}>
                                    Recommend <i className="fa fa-certificate" aria-hidden="true"/>
                                </button>
                        }
                    </span>
            }
        </div>
        <div className="row col-12 mt-4">
            {/*Creator*/}
            <div className="col-12 col-md-3">
                <h6>Created By: <Link to={`/profile/${snippet.creator}`}>{snippet.creator}</Link></h6>
            </div>
            {/*Tags*/}
            <div className="col-12 col-md-9 text-secondary float-right">
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
