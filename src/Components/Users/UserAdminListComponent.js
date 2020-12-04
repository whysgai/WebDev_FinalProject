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
        this.state = {};
    }


    //usersList = []

    // componentDidMount() {
    //     findAllUsers()
    //     console.log("Hit Mount")
    //     console.log(this.usersList)
    //     // this.usersList = this.props.users
    //     this.render()
    // }

    componentDidMount() {
        this.props.findAllUsers()
        console.log("Find users via action, service, reducer on mount", this.props.users);
        // fire.database().ref("/users").once('value')
        //     .then((snapshot) => {
        //         // let data = snapshot.val();
        //         // let keys = snapshot.key;
        //         console.log("Hit Mount", snapshot.val())
        //         console.log(Object.values(snapshot.val()))
        //         this.usersList = Object.values(snapshot.val())
        //         console.log(this.usersList)
        //     }).then(() => this.render())
        this.render();
        console.log("Render again, come on!");
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
                    {
                        (this.props.users && this.props.users > 0) &&
                            <div>
                                {console.log("Users", this.props.users)}
                                {/*<span>this.props.user</span>*/}
                            </div>
                    }

                    <table className="table">
                        <thead>
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
                        </thead>

                        {console.log("Find this statement")}
                        {console.log("User Lenght", this.props.users.length)}
                        {console.log("Users List: ", this.props.users)}
                        {/*{console.log("Users List [1]: ", this.props.users[1].username)}*/}
                        <tbody>
                            {

                                (this.props.users && this.props.users.length > 0) &&
                                this.props.users.map((user, index) =>
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
                                (!this.props.users || this.props.users.length <= 0) &&
                                <tr><td><span><h1>Changed NO users</h1></span></td></tr>
                            }
                        </tbody>
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
    findAllUsers: () => findAllUsers(dispatch)
})

export default connect(stateToPropertyMapper, propertyToDispatchMapper)
(UserAdminListComponent)
