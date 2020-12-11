import React from "react"
import {UnControlled as CodeMirror} from 'react-codemirror2'
import "../../styles/codemirror.css"
import TagComponent from "../TagComponent";
import {Link} from "react-router-dom";

const SnippetEditComponent = ({snippet, text, editLocalSnippet, editLocalText, updateSnippet, createSnippet, addTagToSnippet, removeTagFromSnippet, createGistForUser, deleteSnippet, toggleLike, togglePrivacy, edit, create, activeUser}) =>
    <div className="card-body">
        {/*Title and Timestamp*/}
        <div className="row col-12">
            <div className="col-8 input-group">
                <div className="input-group-prepend">
                    <label className="input-group-text" htmlFor="snippet_title">Title:</label>
                </div>
                <input className="form-control" id="snippet_title"
                       type="text"
                       placeholder={snippet.title}
                       onChange={(event) => editLocalSnippet({
                           ...snippet,
                           title: event.target.value
                       })}
                />
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
                        <button className="btn btn-dark btn-like ml-2" onClick={() => {
                            console.log("In component User", activeUser.username, "liked snippet", snippet);
                            toggleLike(activeUser, snippet)
                        }}>
                                <span className="fa-stack">
                                    <i className="fa fa-bookmark fa-stack-2x" aria-hidden="true"/>
                                    <i className="fa fa-code fa-stack-1x text-dark font-weight-bold" aria-hidden="true"/>
                                </span>
                        </button>
                    }
                </div>
                <div className=" float-right ">
                    <h6>Published: {snippet.dateCreated}</h6>
                </div>
            </div>
        </div>
        {/*Snippet Description*/}
        <div className="row col-12 input-group">
            <div className="input-group-prepend">
                <label className="input-group-text" htmlFor="snippet_description">Description:</label>
            </div>
            <input className="form-control" id="snippet_description"
                   placeholder={snippet.description}
                   onChange={(event) => editLocalSnippet({
                       ...snippet,
                       description: event.target.value
                   })}
            />
        </div>
        {/*Snippet Content*/}
        {/*<div className="form-group row col-12">*/}
        {/*    <label htmlFor="exampleFormControlSelect1">Set Language:</label>*/}
        {/*    <select className="form-control" id="exampleFormControlSelect1">*/}
        {/*        <option>HTML</option>*/}
        {/*        <option>CSS</option>*/}
        {/*        <option>JavaScript</option>*/}
        {/*        <option>Java</option>*/}
        {/*        <option>Python</option>*/}
        {/*        <option>SQL</option>*/}
        {/*    </select>*/}
        {/*</div>*/}
        <div className="row col-12">
            <label htmlFor="code_editor" />
            {/*CodeMirror2*/}
            <CodeMirror
                value={snippet.codeText}
                options={{
                    mode: 'JavaScript',
                    theme: 'material',
                    lineNumbers: true
                }}
                // onChange={(editor, data, value) => editLocalSnippet({
                //     ...snippet,
                //     codeText: value
                // })}
                onChange={(editor, data, value) => editLocalText(value)}
            />
        </div>
        {/*Tags*/}
        <div className="row col-12">
            <div className="col-4 input-group">
                <div className="input-group-prepend">
                    <label className="input-group-text" htmlFor="tag_input">Add tag:</label>
                </div>
                <input className="form-control" id="tag_input"/>
                <div className="input-group-append">
                    <button
                        className="btn btn-outline-secondary"
                        type="button"
                        onClick={
                            () => {
                                addTagToSnippet(document.getElementById("tag_input").value);
                                document.getElementById("tag_input").value = "";
                            }
                        }>
                        <i className="fa fa-plus" aria-hidden="true"/>
                    </button>
                </div>
            </div>
            <div className="col-8 text-secondary float-right">
                <div className="float-right">
                    <div className="tagBackground rounded row ">
                        {

                            (snippet.tags !== null && snippet.tags !== []) &&
                                snippet.tags.map((tag, index) =>
                                    <TagComponent
                                        key={index}
                                        tag={tag}
                                        edit={true}
                                        removeTagFromSnippet={removeTagFromSnippet}
                                    />
                                )
                        }
                    </div>
                </div>
            </div>
        </div>
        <div className="row col-12">
            <div className="col-12">
                {/*<div className="col-5"/>*/}
                <div className="custom-control custom-switch d-inline col-2">
                    <input type="checkbox"
                           className="custom-control-input mt-2"
                           id="publicprivate"
                           checked={snippet.publicPost}
                           onChange={() => togglePrivacy()}
                    />
                    <label className="custom-control-label mt-2" htmlFor="publicprivate">
                        {
                            !snippet.publicPost &&
                            <span>Private</span>
                        }
                        {
                            snippet.publicPost &&
                            <span>Public</span>
                        }
                    </label>
                </div>

                {
                    edit &&
                        <Link className="btn btn-outline-danger float-right col-1 ml-2"
                              to={"/search"}
                              onClick={() => {
                                  deleteSnippet(snippet._id)
                              }}
                        >
                            <span title="Delete snippet"><i className="fa fa-trash" aria-hidden="true"/></span>
                        </Link>
                }


                <button className="btn btn-outline-dark float-right col-1 ml-2"
                        onClick={() => createGistForUser(activeUser.token, snippet.title, snippet.description, snippet.codeText)}
                >
                    <span title="Export to GitHub"><i className="fa fa-upload" aria-hidden="true"/></span>
                </button>
                {
                    edit &&
                    <button className="btn btn-outline-info float-right col-2 ml-2"
                            onClick={() => {
                                updateSnippet(snippet, text)
                            }}
                    >Save</button>
                }
                {
                    create &&
                    <Link className="btn btn-outline-info float-right col-2 ml-2"
                          to={"/search"}
                          onClick={() => {
                              createSnippet(snippet, text)
                          }}
                    >Create</Link>
                }
            </div>
        </div>
    </div>

export default SnippetEditComponent
