import React from "react"
import {UnControlled as CodeMirror} from 'react-codemirror2'
import "../../styles/codemirror.css"
import TagComponent from "../TagComponent";

const SnippetEditComponent = ({snippet}) =>
    <div className="card-body">
        {/*Title and Timestamp*/}
        <div className="row col-12">
            <div className="col-8 input-group">
                <div className="input-group-prepend">
                    <label className="input-group-text" htmlFor="snippet_title">Title:</label>
                </div>
                <input className="form-control" id="snippet_title" type="text" placeholder={snippet.title}/>
            </div>
            <div className="col-4 text-secondary">
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
            <input className="form-control" id="snippet_description" placeholder={snippet.description}/>
        </div>
        {/*Snippet Content*/}
        <div className="row col-12">
            <label htmlFor="code_editor" />
            <CodeMirror
                className="col-12 border pl-0"
                id="code_editor"
                value={snippet.codeText}
                options={{
                    mode: 'xml',
                    theme: 'material',
                    lineNumbers: true
                }}
                onChange={(editor, data, value) => {
                }}
            />
        </div>
        {/*Tags*/}
        <div className="row col-12">
            <div className="col-4 input-group">
                <div className="input-group-prepend">
                    <label className="input-group-text" htmlFor="tag_input">Add tag:</label>
                </div>
                <input className="form-control" id="tag_input"/>
            </div>
            <div className="col-8 text-secondary float-right">
                <div className="float-right">
                    <div className="tagBackground rounded row ">
                        {
                            snippet.tags.split(',').map((tag, index) =>
                                <TagComponent tag={tag}/>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
        <button className="btn btn-outline-info float-right">Save</button>
    </div>

export default SnippetEditComponent
