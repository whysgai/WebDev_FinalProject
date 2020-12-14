import React from "react";

const GroupRowComponent = ({group}) =>
    <li className={"list-group-item list-group-item-action"}>
        <span>
            {group.groupName}
            <text className={"pull-right"}>{group.license}</text>
        </span>

    </li>

export default GroupRowComponent

