import React from "react";

const GroupRowComponent = ({group, administerUser}) =>
    <tr>
        <td>
            <div className="col-12">
                <select className="custom-select wbdv-field wbdv-role" id="role"
                        value={user.type}
                        onChange={(event) => administerUser({
                            ...user,
                            type: event.target.value
                        })}
                >
                    <option value="Enterprise">Enterprise</option>
                    <option value="Community">Community</option>
                </select>
            </div>
        </td>
        <td>
            <p>{group.groupName}</p>
        </td>
        <td>
            <p>{group.groupId}</p>
        </td>
    </tr>

export default GroupRowComponent

