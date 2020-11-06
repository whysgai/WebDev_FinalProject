import React from "react"
import {UnControlled as CodeMirror} from 'react-codemirror2'
import "../styles/codemirror.css"
import TagComponent from "./TagComponent";

const SnippetEditComponent = ({snippet}) =>
    <div className="col-12">
        {/*Title and Timestamp*/}
        <div className="row col-12">
            <div className="col-8">
                <label htmlFor="snippet_title">Title:</label>
                <input id="snippet_title" placeholder={snippet.title}/>
            </div>
            <div className="col-4 text-secondary">
                <div className=" float-right ">
                    <h6>Published: {snippet.dateCreated}</h6>
                </div>
            </div>
        </div>
        {/*Snippet Description*/}
        <div className="row col-12">
            <label htmlFor="snippet_description">Description:</label>
            <input id="snippet_description" placeholder={snippet.description}/>
        </div>
        {/*Snippet Content*/}
        <div className="col-12">
            <label htmlFor="code_editor" />
            <CodeMirror
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
            <label htmlFor="tag_input">Add tag:</label>
            <input id="tag_input"/>
            <div className="col-9 text-secondary float-right">
                <div className="float-right">
                    <div className="tagBackground rounded row ">
                        {
                            snippet.tags.map((tag, index) =>
                                <TagComponent tag={tag}/>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
        <button>Save</button>
    </div>

export default SnippetEditComponent
