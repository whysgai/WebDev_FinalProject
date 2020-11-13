import React from "react"
import { connect } from "react-redux"
import MySnippetsComponent from "../Components/MySnippetsComponent";
import {findSnippetsForCreator} from "../services/snippetServices";
import {createSnippet} from "../Actions/SnippetActions";

class MySnippetsContainer extends React.Component{

    componentDidMount() {
    }
}

const stateToPropertyMapper = (state) => ({
    snippets: state.snippetReducer.snippets
})

const propertyToDispatchMapper = (dispatch) => ({
    createSnippet: () => createSnippet(dispatch),

    // findSnippetsForCreator: (userId) =>
    //     snippetServices.findSnippetsForCreator(userId)
    //         .then(widgets => dispatch({
    //                                       type: "FIND_WIDGETS_FOR_TOPIC",
    //                                       widgets
    //                                   })),
})

export default connect
(stateToPropertyMapper, propertyToDispatchMapper)
(MySnippetsComponent)
