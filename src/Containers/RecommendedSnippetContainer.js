import React from "react";
import { findRecommendedSnippets } from "../Actions/SnippetActions";
import {connect} from "react-redux";
import SnippetSearchListComponent from "../Components/Search/SnippetSearchListComponent";
import {fireUID} from "../config/db";

class RecommendedSnippetContainer extends React.Component {

    constructor() {
        super();
        this.state = { };
    }

    async loadingWrapper() {
        await this.props.findRecommendedSnippets()
    }

    componentDidMount() {
        this.loadingWrapper().then(() => this.render()
        )
    }
    render () {
        return (
            <div>
                {
                    this.props.snippets &&
                        <SnippetSearchListComponent
                            snippets={this.props.snippets}
                        />
                }
            </div>
        )
    }
}

const stateToPropertyMapper = (state) => ({
    snippets: state.snippetReducer.snippets
})

const propertyToDispatchMapper = (dispatch) => ({
    findRecommendedSnippets: () => findRecommendedSnippets(dispatch)

})


export default connect
(stateToPropertyMapper, propertyToDispatchMapper)
(RecommendedSnippetContainer)
