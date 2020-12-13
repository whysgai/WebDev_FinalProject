import React from "react";
import { findRecommendedSnippets } from "../Actions/SnippetActions";
import { connect } from "react-redux";
import SnippetSearchListComponent from "../Components/Search/SnippetSearchListComponent";
import { getCookie } from "../config/db";
import { getUserByUID } from "../Actions/UserActions";

class RecommendedSnippetContainer extends React.Component {

    constructor() {
        super();
        this.state = { };
    }

    componentDidMount() {
        let fireUID = getCookie("uid")
        this.props.getUserByUID(fireUID).then(() => this.props.findRecommendedSnippets())
    }
    render () {
        return (
            <div>
                {
                    this.props.snippets &&
                        <SnippetSearchListComponent
                            snippets={this.props.snippets}
                            activeUser={this.props.activeUser}
                        />
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
    findRecommendedSnippets: () => findRecommendedSnippets(dispatch),
    getUserByUID: (uid) => getUserByUID(dispatch, uid)
})

export default connect
(stateToPropertyMapper, propertyToDispatchMapper)
(RecommendedSnippetContainer)
