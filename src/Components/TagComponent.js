import React from "react"

const TagComponent = ({tag}) =>
    <div>
        <span className="badge badge-primary m-2">
            <i className="fas fa-times-circle"></i>
            {tag}
        </span>
    </div>

export default TagComponent;
