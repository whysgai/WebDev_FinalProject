import React from "react";
import {Link} from "react-router-dom";


export default class UserAdminRowComponent extends React.Component {
    state = {
        editing: false,
        user: this.props.user
    }
    render() {
        return(
            <tr>
                {console.log(this.props.user._id)}
                <td>{this.props.user._id}</td>
                <td>{this.props.user.firstName}</td>
                <td>{this.props.user.lastName}</td>
                <td>{this.props.user.email}</td>
                <td>{this.props.user.username}</td>
                <td>{this.props.user.userType}</td>
                <td><button>Delete</button></td>
            </tr>
        )
    }
}
