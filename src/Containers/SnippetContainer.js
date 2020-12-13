import React from "react"
import { connect } from "react-redux"
import SnippetComponent from "../Components/Snippets/SnippetComponent";
import {toggleLike, toggleRecommended} from "../Actions/SnippetActions";
import {createGistForUser} from "../Actions/GistActions";
import {fireUID} from "../config/db";


class SnippetContainer extends React.Component {

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
        return <SnippetComponent/>
    }
}

const stateToPropertyMapper = (state) => ({
    activeUser : state.userReducer.activeUser
})

const propertyToDispatchMapper = (dispatch) => ({
    createGistForUser: (token, title, description, content) => createGistForUser(dispatch, token, title, description, content),
    toggleLike: (activeUser, snippet) => toggleLike(dispatch, activeUser, snippet),
    toggleRecommended: (snippet) => toggleRecommended(dispatch, snippet)
})

export default connect
(stateToPropertyMapper, propertyToDispatchMapper)
(SnippetComponent)
