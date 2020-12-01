import React from "react"

const TagComponent = ({tag, snippet, edit, removeTagFromSnippet}) =>
    <div>
        <span className="badge badge-primary m-2">
            {tag}
            {
                edit === true &&
                    <i className="fa fa-times-circle ml-2" onClick={() => removeTagFromSnippet(tag)}/>
            }

            {/*When clicking the x, run a snippet-level action*/}
            {/*Remove substring from snippet.tags === tag*/}
        </span>
    </div>

export default TagComponent;
