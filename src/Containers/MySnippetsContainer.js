import React from "react"
import {connect} from "react-redux"
import {findSnippetsByCreator} from "../Actions/SnippetActions";
import SnippetSearchListComponent from "../Components/Search/SnippetSearchListComponent";
import {fireUID} from "../config/db";
import {getUserByUID} from "../Actions/UserActions";

class MySnippetsContainer extends React.Component {

    constructor() {
        super();
        this.state = {};
    }

    async loadingWrapper() {
            await this.props.getUserByUID(fireUID)
            await this.props.findSnippetsByCreator(this.props.activeUser.username)
        this.state.user = this.props.user

    }

    componentDidMount() {
        this.loadingWrapper().then(() => console.log(this.props), this.render()
        )
        this.render()

    }

    render() {
        return (
            <div>
                {
                    <div>
                        <h2 className="mt-2">My Snippets:</h2>
                        <SnippetSearchListComponent
                            snippets={this.props.snippets}
                        />
                    </div>
                }
            </div>
        )
    }
}


const stateToPropertyMapper = (state) => ({
    snippets: state.snippetReducer.snippets,
    activeUser: state.userReducer.activeUser
})

const propertyToDispatchMapper = (dispatch) => ({
    findSnippetsByCreator: (username) => findSnippetsByCreator(dispatch, username),
    getUserByUID: (uid) => getUserByUID(dispatch, uid),

})

export default connect
(stateToPropertyMapper, propertyToDispatchMapper)
(MySnippetsContainer)
