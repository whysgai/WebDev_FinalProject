import React from "react";
import { connect } from "react-redux";
import UserAdminComponent from "../Components/UserAdminComponent";
import UserAdminRowComponent from "../Components/Users/UserAdminRowComponent";

export default class UserAdminContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            usersList : [
                {
                    "_id" : "123",
                    "firstName" : "Saleh",
                    "lastName" : "Alkhalifa",
                    "email" : "salkhalifa@gmail.com",
                    "username" : "alkhalifas",
                    "userType" : "ADMIN"
                },
                {
                    "_id" : "345",
                    "firstName" : "Nicholas",
                    "lastName" : "Shepard",
                    "email" : "nshepard@gmail.com",
                    "username" : "nshepard",
                    "userType" : "ADMIN"
                },
                {
                    "_id" : "567",
                    "firstName" : "Will",
                    "lastName" : "Cohen",
                    "email" : "wcohen@gmail.com",
                    "username" : "wcohen",
                    "userType" : "ADMIN"
                },
            ],
            columns : [],
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
    usersList;

    render() {
        return (
            <div>
                <h1>User Admin Page</h1>
                <div>
                        {console.log(this.state.usersList)}

                    <table className="table">
                        <tr>
                            <th>ID</th>
                            <th>firstName</th>
                            <th>lastName</th>
                            <th>email</th>
                            <th>username</th>
                            <th>userType</th>
                            <th>Manage:</th>
                        </tr>

                        {console.log(this.state.usersList)}

                        {
                            this.state.usersList.map(user =>
                                <UserAdminRowComponent
                                    user={user}/>
                            )
                        }
                    </table>
                </div>

            </div>
        );
    }


}



const stateToPropertyMapper = (state) => ({
    users: state.snippetReducer.users
})

const propertyToDispatchMapper =(dispatch) => ({

})

