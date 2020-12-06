import React from "react";

export default class UserAdminRowComponent extends React.Component {
    state = {
        editing: false,
        user: this.props.user
    }

    render() {
        return (
            <tr>
                <td>
                    {
                        !this.state.editing &&
                        <p>{this.props.user.type}</p>
                    }
                    {
                        this.state.editing &&
                        <input
                            className="form-control"
                            onChange={(event) => {
                                const newUserType = event.target.value;
                                this.setState(prevState => ({
                                    user: {...prevState.user, type: newUserType}
                                }))
                            }
                            }
                            value={this.state.user.type}/>
                    }
                </td>
                <td>
                    {
                        !this.state.editing &&
                        <p>{this.props.user.username}</p>
                    }
                    {
                        this.state.editing &&
                        <input
                            className="form-control"
                            onChange={(event) => {
                                const newUsername = event.target.value;
                                this.setState(prevState => ({
                                    user: {...prevState.user, username: newUsername}
                                }))
                            }
                            }
                            value={this.state.user.username}/>
                    }
                </td>
                {/*<td>{*/}
                {/*    !this.state.editing &&*/}
                {/*    <p>{this.props.user.email}</p>*/}
                {/*}*/}
                {/*    {*/}
                {/*        this.state.editing &&*/}
                {/*        <input*/}
                {/*            className="form-control"*/}
                {/*            onChange={(event) => {*/}
                {/*                const newEmail = event.target.value;*/}
                {/*                this.setState(prevState => ({*/}
                {/*                    user: {...prevState.user, email: newEmail}*/}
                {/*                }))*/}
                {/*            }*/}
                {/*            }*/}
                {/*            value={this.state.user.email}/>*/}
                {/*    }</td>*/}


                <td><p>{this.props.user.email}</p></td>

                {/*//------------------------------------------- Delete Button -------------------------------------//*/}
                <td>

                    {
                        this.state.user.locked ?
                            <button
                                onClick={() => {
                                    this.state.user["locked"]= false
                                    this.props.unlockUser(this.props.user)
                                }}
                                className="btn btn-danger">
                                Lock
                            </button> :
                            <button
                                onClick={() => {
                                    this.state.user["locked"]= true
                                    this.props.lockUser(this.props.user)
                                }}
                                className="btn btn-danger">
                                Unlock
                            </button>
                    }


                    {
                        !this.state.editing &&
                        <button
                            onClick={() => this.setState({editing: true})}
                            className="btn btn-light">Edit</button>
                    }
                    {
                        this.state.editing &&
                        <button className="btn btn-light" onClick={() => {
                            this.props.updateUserRow(this.state.user.uid, this.state.user)

                            this.setState({
                                editing: false
                            })


                        }}>Save

                        </button>
                    }
                </td>

            </tr>
        )
    }
}
