import React from "react";
import {connect} from "react-redux";
import UserAdminComponent from "./UserAdminComponent";
import UserAdminRowComponent from "./UserAdminRowComponent";
import fire from "../../config/db";
import {findAllUsers} from "../../Actions/UserActions";

class UserAdminListComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }


    componentDidMount() {
        this.props.findAllUsers()
        this.render();
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
                                <th>User Type</th>
                                <th>Username</th>
                                <th>Email</th>
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
                                                <UserAdminRowComponent
                                                    user={user}
                                                    deleteUser={this.deleteUser()}
                                                />

                                    )

                            }
                            {
                                (!this.props.users || this.props.users.length <= 0) &&
                                <tr><td><span><h1>Changed NO users</h1></span></td></tr>
                            }
                        </tbody>
                    </table>

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
