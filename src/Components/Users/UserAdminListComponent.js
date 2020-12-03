import React from "react";
import {connect} from "react-redux";
import UserAdminComponent from "./UserAdminComponent";
import UserAdminRowComponent from "./UserAdminRowComponent";
import fire from "../../config/db";
import {findAllUsers} from "../../Actions/UserActions";

class UserAdminListComponent extends React.Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //
    //         xusersList: [],
    //         columns: [],
    //         userBeingEdited: {}
    //     }
    // }


    usersList = []

    componentDidMount() {
        findAllUsers().then(users => this.usersList = users)
        console.log("Hit Mount")
        console.log(this.usersList)
        // this.usersList = this.props.users
        this.render()
    }

    // componentDidUpdate(prevProps, prevState, snapshot) {
    //
    //     // if(this.usersList !== []) {
    //     //     console.log("Youve reached Updated")
    //     // }
    // }


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

                        {/*{*/}

                        {/*    this.props.users.map(user =>*/}
                        {/*        <div>*/}
                        {/*            <h1>something</h1>*/}
                        {/*            <UserAdminRowComponent*/}
                        {/*                key={user._id}*/}
                        {/*                user={user}*/}
                        {/*                deleteUser={this.deleteUser()}*/}
                        {/*            />*/}
                        {/*        </div>*/}

                        {/*    )*/}
                        {/*}*/}
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
