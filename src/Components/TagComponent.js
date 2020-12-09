import React from "react"

const TagComponent = ({tag, edit, removeTagFromSnippet}) =>
    <div>
        <span className="badge badge-primary m-2">
            <h6 className="d-inline">{tag}</h6>
            {
                edit === true &&
                    <i className="fa fa-times-circle ml-2" onClick={() => removeTagFromSnippet(tag)}/>
            }
        </span>
    </div>

export default TagComponent;
