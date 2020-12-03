import React from "react";
import {connect} from "react-redux";
import UserAdminComponent from "./UserAdminComponent";
import UserAdminRowComponent from "./UserAdminRowComponent";
import fire from "../../config/db";
import {findAllUsers} from "../../Actions/UserActions";

class UserAdminListComponent extends React.Component {

    constructor(props) {
        super(props);
        // this.state = {
        //
        //     xusersList: [],
        //     columns: [],
        //     userBeingEdited: {}
        // }
    }


    usersList = []

    // componentDidMount() {
    //     findAllUsers()
    //     console.log("Hit Mount")
    //     console.log(this.usersList)
    //     // this.usersList = this.props.users
    //     this.render()
    // }

    componentDidMount() {
        fire.database().ref("/users").once('value')
            .then((snapshot) => {
                // let data = snapshot.val();
                // let keys = snapshot.key;
                console.log("Hit Mount", snapshot.val())
                console.log(Object.values(snapshot.val()))
                this.usersList = Object.values(snapshot.val())
                console.log(this.usersList)
            }).then(() => this.render())
    }

    deleteUser = (user) => {
        //something happens
    };

    addUser = (user) => {
        //something happens
    };


    render() {

        return (
            <div>
                <h1>User Admin Page</h1>
                <div>

                    {/*{console.log(this.state.usersList)}*/}

                    <table className="table">
                        <tr>
                            <th>ID</th>
                            <th>userType</th>
                            <th>firstName</th>
                            <th>lastName</th>
                            <th>email</th>
                            <th>username</th>
                            <th>Manage:</th>
                            <th></th>
                        </tr>

                        {console.log("Find this statement")}
                        {console.log("User Lenght", this.usersList.length)}
                        {console.log("Users List: ", this.usersList)}
                        {/*{console.log("Users List [1]: ", this.usersList[1].username)}*/}
                        {

                            (this.usersList && this.usersList.length > 0) &&
                                this.usersList.map((user, index) =>
                                    <tr key={index}>
                                        {console.log("Hello from TR:" + index)}
                                        <td>test</td>
                                        <td>{user.username}</td>
                                        {/*<div>*/}
                                        {/*    <h1>{user.username}</h1>*/}
                                        {/*    {console.log("USER:", user.username)}*/}
                                        {/*    <UserAdminRowComponent*/}
                                        {/*        // key={user._id}*/}
                                        {/*        user={user}*/}
                                        {/*        deleteUser={this.deleteUser()}*/}
                                        {/*    />*/}
                                        {/*</div>*/}
                                    </tr>

                                )

                        }
                        {
                            (!this.usersList || this.usersList.length <= 0) &&
                                <span><h1>Changed NO users</h1></span>
                        }
                    </table>
                    <button
                        onClick={this.addUser}
                        className="btn btn-success">
                        Add User
                    </button>
                </div>

            </div>
        );
    }


}


const stateToPropertyMapper = (state) => ({
    users: state.userReducer.users
})

const propertyToDispatchMapper = (dispatch) => ({
    // findAllUsers: () => findAllUsers(dispatch)
})

export default connect(stateToPropertyMapper, propertyToDispatchMapper)
(UserAdminListComponent)
