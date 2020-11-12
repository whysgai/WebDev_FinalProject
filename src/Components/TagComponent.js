import React from "react"

const TagComponent = ({tag}) =>
    <div>
        <span className="badge badge-primary m-2">
            {tag}
            <i className="fa fa-times-circle ml-2"></i>
            {/*When clicking the x, run a snippet-level action*/}
            {/*Remove substring from snippet.tags === tag*/}
        </span>
    </div>

export default TagComponent;
