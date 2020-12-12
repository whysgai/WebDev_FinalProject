import React from 'react'
import {Link} from "react-router-dom";

const SnippetSearchBarComponent = ({terms, updateSearchTerms}) =>
    <div className="row">
        <div className="col-10">
            <div className="row mt-4">
                <label className="col-form-label d-none" htmlFor="searchtags">
                    Search by Tag
                </label>
                <div className="input-group col-12">
                    <input
                        id="searchtags"
                        className="form-control col-12"
                        defaultValue={`${!terms || terms === "" ? "" : terms}`}
                        placeholder="Search by tags (eg: python+js+import)"
                        onChange={(event) => updateSearchTerms(event.target.value)}
                    />
                    <div className="input-group-append">
                        <Link
                            className="btn btn-outline-secondary"
                            type="button"
                            to={`/search${terms ? "/" + terms : ""}`}
                        >
                            Search
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-2 row mt-4 ml-1">
            <Link className="btn btn-primary float-right" to="/newsnippet">
                New Snippet <i className="fa fa-pencil-square-o" aria-hidden="true"/>
            </Link>
        </div>
    </div>

export default SnippetSearchBarComponent
