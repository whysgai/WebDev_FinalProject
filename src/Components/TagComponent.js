import React from "react"

const TagComponent = ({tag}) =>
    <div>
        <span className="badge badge-primary m-2">
            {tag}
            <i className="fa fa-times-circle ml-2"></i>
        </span>
    </div>

export default TagComponent;
