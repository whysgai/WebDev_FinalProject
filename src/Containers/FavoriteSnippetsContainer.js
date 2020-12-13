import React from "react";
import { findFavoriteSnippets } from "../Actions/SnippetActions";
import {connect} from "react-redux";
import SnippetSearchListComponent from "../Components/Search/SnippetSearchListComponent";

class FavoriteSnippetsContainer extends React.Component {

    constructor() {
        super();
        this.state = { };
    }

    componentDidMount() {
        this.props.findFavoriteSnippets(this.props.activeUser.username)
    };


    render () {
        return (
            <div>
                {
                    this.props.snippets &&
                        <div>
                            <h2 className="mt-2">Bookmarked Snippets:</h2>
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
    findFavoriteSnippets: (username) => findFavoriteSnippets(dispatch, username)

})


export default connect
(stateToPropertyMapper, propertyToDispatchMapper)
(FavoriteSnippetsContainer)
