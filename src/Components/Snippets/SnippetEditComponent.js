import React from "react"
import "../../styles/codemirror.css";
import TagComponent from "../TagComponent";
import {Link} from "react-router-dom";
import {UnControlled as CodeMirror} from 'react-codemirror2'
require('codemirror/mode/htmlmixed/htmlmixed');
require('codemirror/mode/css/css');
require('codemirror/mode/javascript/javascript');
require('codemirror/mode/clike/clike');
require('codemirror/mode/python/python');
require('codemirror/mode/sql/sql');
require('codemirror/theme/neo.css');

const SnippetEditComponent = ({snippet, text, editLocalSnippet, editLocalText, updateSnippet, createSnippet, addTagToSnippet, removeTagFromSnippet, createGistForUser, deleteSnippet, toggleLike, togglePrivacy, edit, create, activeUser}) =>
    <div className="card-body">
        {/*Title and Timestamp*/}
        <div className="row col-12">
            <div className="col-12 col-md-8 input-group">
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
            <div className="col-12 col-lg-4 text-secondary">
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
                <div className="float-right mt-1">
                    <h6>Published: {snippet.dateCreated}</h6>
                </div>
            </div>
        </div>
        <div className="col-12 mt-2">
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
            <div className="form-group row col-12 mt-2">
                <label htmlFor="selectLanguage" className="d-none">Set Language:</label>
                <select
                    onChange={(event) => editLocalSnippet({
                        ...snippet,
                        language: event.target.value
                    })}
                    value={snippet.language}
                    className="form-control" id="selectLanguage"
                >
                    <option value="">--Select language--</option>
                    <option value="htmlmixed">HTML</option>
                    <option value="css">CSS</option>
                    <option value="javascript">JavaScript</option>
                    <option value="text/x-java">Java</option>
                    <option value="python">Python</option>
                    <option value="sql">SQL</option>
                </select>
            </div>
            <div className="row col-12">
                <label htmlFor="code_editor" />
                {/*CodeMirror2*/}
                <CodeMirror
                    className="col-12 border"
                    value={snippet.codeText}
                    options={{
                        mode: `${snippet.language}`,
                        theme: 'neo',
                        lineNumbers: true,
                        linewrapping: true
                    }}
                    onChange={(editor, data, value) => editLocalText(value)}
                />
            </div>
        </div>
        {/*Tags*/}
        <div className="row col-12 mt-2">
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
                <div className="col-12">
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
        </div>
        {/*Bottom buttons*/}
        <div className="row col-12 mt-2">
            <div className="col-12">
                <div className="custom-control custom-switch d-inline col-2 ml-2">
                    <input type="checkbox"
                           className="custom-control-input mt-2"
                           id="publicprivate"
                           checked={snippet.publicPost}
                           onChange={() => togglePrivacy(snippet)}
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
                        <Link className="btn btn-outline-danger float-right col-12 col-md-1 ml-2"
                              to={"/search"}
                              onClick={() => {
                                  deleteSnippet(snippet._id)
                              }}
                        >
                            <span title="Delete snippet"><i className="fa fa-trash" aria-hidden="true"/></span>
                        </Link>
                }
                <button className="btn btn-outline-dark float-right col-12 col-md-1 ml-2"
                        onClick={() => createGistForUser(activeUser.paToken, snippet.title, snippet.description, snippet.codeText)}
                >
                    <span title="Export to GitHub"><i className="fa fa-upload" aria-hidden="true"/></span>
                </button>
                {
                    edit &&
                        <button className="btn btn-outline-info float-right col-12 col-md-2 ml-2"
                                onClick={() => {
                                    updateSnippet(snippet, text)
                                }}
                        >
                            Save
                        </button>
                }
                {
                    create &&
                        <Link className="btn btn-outline-info float-right col-12 col-md-2 ml-2"
                              to={"/search"}
                              onClick={() => {
                                  createSnippet(snippet, text)
                              }}
                        >
                            Create
                        </Link>
                }
            </div>
        </div>
    </div>

export default SnippetEditComponent
