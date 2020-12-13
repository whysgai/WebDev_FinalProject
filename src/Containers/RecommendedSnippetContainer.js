import React from "react";
import { findRecommendedSnippets } from "../Actions/SnippetActions";
import {connect} from "react-redux";
import SnippetSearchListComponent from "../Components/Search/SnippetSearchListComponent";

class RecommendedSnippetContainer extends React.Component {

    constructor() {
        super();
        this.state = { };
    }

    componentDidMount() {
        this.props.findRecommendedSnippets()
    };


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
