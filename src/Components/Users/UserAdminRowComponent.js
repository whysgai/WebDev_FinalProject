import React from "react";

const UserAdminRowComponent = ({user, administerUser}) =>
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
                    <option value="USER">User</option>
                    <option value="ADMIN">Admin</option>
                </select>
            </div>
        </td>
        <td>
            <p>{user.username}</p>
        </td>
        <td>
            <p>{user.email}</p>
        </td>
    </tr>

export default UserAdminRowComponent

