import React from "react";
import {Link} from "react-router-dom";
import {updateUser} from "../../services/UserService";


export default class UserAdminRowComponent extends React.Component {
    state = {
        editing: false,
        user: this.props.user
    }
    render() {
        return(
            <h1>Row</h1>
        //     <tr>
        //         {console.log(this.props.user._id)}
        //
        //         {/*//------------------------------------------- UserId -------------------------------------//*/}
        //         <td>{this.props.user._id}</td>
        //
        //         {/*//------------------------------------------- User Type -------------------------------------//*/}
        //         <td>
        //             {
        //                 !this.state.editing &&
        //                 <p>{this.props.user.userType}</p>
        //             }
        //             {
        //                 this.state.editing &&
        //                 <input
        //                     className="form-control"
        //                     onChange={(event) => {
        //                         const newUserType = event.target.value;
        //                         this.setState(prevState => ({
        //                             user: {...prevState.user, userType: newUserType}
        //                         }))}
        //                     }
        //                     value={this.state.user.userType}/>
        //             }
        //         </td>
        //
        //         <td>{this.props.user.firstName}</td>
        //         <td>{this.props.user.lastName}</td>
        //         <td>{this.props.user.email}</td>
        //         <td>{this.props.user.username}</td>
        //
        //         {/*//------------------------------------------- Delete Button -------------------------------------//*/}
        //         <td>
        //             <button
        //                 onClick={() => this.props.deleteUser(this.props.user)}
        //                 className="btn btn-light">
        //                 Delete
        //             </button>
        //         </td>
        //
        //         {/*//------------------------------------------- Edit/Save Button -------------------------------------//*/}
        //         <td>
        //             {
        //                 !this.state.editing &&
        //                 <button
        //                     onClick={() => this.setState({editing: true})}
        //                     className="btn btn-light">Edit</button>
        //             }
        //             {
        //                 this.state.editing &&
        //                 <button className="btn btn-light" onClick={() => {
        //                     // updateUser(this.state.user._id, this.state.user).then(status => {})//todo:change me
        //                     this.setState({
        //                         editing : false
        //                     })
        //                 }}>
        //                     Save
        //
        //                 </button>
        //             }
        //         </td>
        //
        //     </tr>
        )
    }
}
