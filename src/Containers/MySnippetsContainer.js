import React from "react"
import { connect } from "react-redux"
import { findSnippetsByCreator } from "../Actions/SnippetActions";
import SnippetSearchListComponent from "../Components/Search/SnippetSearchListComponent";

class MySnippetsContainer extends React.Component{

    constructor() {
        super();
        this.state = { };
    }

    componentDidMount() {
        this.props.findSnippetsByCreator(this.props.activeUser.username)
    };


    render () {
        return (
            <div>
                {
                    this.props.snippets &&
                        <div>
                            <h2 className="mt-2">{this.props.activeUser.username}'s Snippets:</h2>
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
    findSnippetsByCreator: (username) => findSnippetsByCreator(dispatch, username)
})

export default connect
(stateToPropertyMapper, propertyToDispatchMapper)
(MySnippetsContainer)
