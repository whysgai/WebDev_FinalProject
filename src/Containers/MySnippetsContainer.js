import React from "react"
import { connect } from "react-redux"
import { findSnippetsByCreator } from "../Actions/SnippetActions";
import SnippetSearchListComponent from "../Components/Search/SnippetSearchListComponent";
import {fireUID} from "../config/db";

class MySnippetsContainer extends React.Component{

    constructor() {
        super();
        this.state = { };
    }

    async loadingWrapper(){
        if(this.props.activeUser === {}){
            await this.props.getUserByUID(fireUID)
        }
    }

    componentDidMount() {
        this.loadingWrapper().then(() => this.props.findSnippetsByCreator(this.props.activeUser.username)
        )
        this.render()
    }



    render () {
        return (
            <div>
                {
                    this.props.snippets &&
                        <div>
                            {/*<h2 className="mt-2">{this.props.activeUser.username}'s Snippets:</h2>*/}
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
