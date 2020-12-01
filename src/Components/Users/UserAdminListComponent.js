import React from "react";
import {connect} from "react-redux";
import UserAdminComponent from "./UserAdminComponent";
import UserAdminRowComponent from "./UserAdminRowComponent";
import fire from "../../config/db";

export default class UserAdminListComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

            usersList: [
                {
                    "_id": "123",
                    "firstName": "Saleh",
                    "lastName": "Alkhalifa",
                    "email": "salkhalifa@gmail.com",
                    "username": "alkhalifas",
                    "userType": "ADMIN"
                },
                {
                    "_id": "345",
                    "firstName": "Nicholas",
                    "lastName": "Shepard",
                    "email": "nshepard@gmail.com",
                    "username": "nshepard",
                    "userType": "ADMIN"
                },
                {
                    "_id": "567",
                    "firstName": "Will",
                    "lastName": "Cohen",
                    "email": "wcohen@gmail.com",
                    "username": "wcohen",
                    "userType": "ADMIN"
                },
            ],
            columns: [],
            userBeingEdited: {}
        }
    }

    // componentDidMount() {
    //     findAllUsers()
    //         .then(users => {
    //             this.setState({
    //                 users: users
    //             })
    //         })
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

                        {/*{console.log(this.state.usersList)}*/}

                        {(fire.database().ref("/users").on('value',
                            (snapshot) => {
                                let data = snapshot.val()
                                let keys = snapshot.key
                                console.log(data)
                                // console.log(keys)
                                snapshot.forEach((child) => {

                                    let childData = child.val()
                                    console.log(childData.email)

                                    // return (
                                    //     <UserAdminRowComponent
                                    //         // key={childData.email}
                                    //         user={childData}
                                    //         deleteUser={this.deleteUser()}
                                    //     />)
                                })
                            }))}


                        {/*{*/}

                        {/*    this.state.usersList.map(user =>*/}
                        {/*        <UserAdminRowComponent*/}
                        {/*            key={user._id}*/}
                        {/*            user={user}*/}
                        {/*            deleteUser={this.deleteUser()}*/}
                        {/*        />*/}
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
    users: state.snippetReducer.users
})

const propertyToDispatchMapper = (dispatch) => ({})

