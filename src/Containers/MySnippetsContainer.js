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
        let uid = await fireUID
        await this.props.getUserByUID(uid)
        this.state.activeUser = this.props.activeUser
    }

    componentDidMount() {
        console.log("fire uid", fireUID)
        //Make sure the user is in the reducer
        this.loadingWrapper().then(() => console.log(this.props.activeUser))

        //Find the snippets for the user after it's in the reducer
        //Render it
        // this.props.getUserByUID(fireUID)
        //     .then(() =>this.props.findSnippetsByCreator(this.props.activeUser.username))
        //     .then(() => this.render())
        // this.loadingWrapper().then((user) => this.props.findSnippetsByCreator(activeUser.username))
        //     .then(() => this.render())
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
