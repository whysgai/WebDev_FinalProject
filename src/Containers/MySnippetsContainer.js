import React from "react"
import {connect} from "react-redux"
import {findSnippetsByCreator} from "../Actions/SnippetActions";
import SnippetSearchListComponent from "../Components/Search/SnippetSearchListComponent";
import {fireUID} from "../config/db";
import {getUserByUID} from "../Actions/UserActions";

class MySnippetsContainer extends React.Component {

    constructor() {
        super();
        this.state = {snippets: {}};
    }

    async loadingWrapper() {
            await this.props.getUserByUID(fireUID)
        this.state.user = this.props.user
        return await Promise.resolve(this.props.activeUser)
    }

    componentDidMount() {

        this.loadingWrapper().then((user) => this.props.findSnippetsByCreator(user.username))
            .then(() => this.render())
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.render()
    }

    render() {
        return (
            <div>
                {
                    <div>
                        <h2 className="mt-2">My Snippets:</h2>
                        <SnippetSearchListComponent
                            snippets={this.props.snippets ? this.props.snippets : this.state.snippets}
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
