import React from 'react'

const SnippetSearchBarComponent = () =>
    <div className="row">
        <div className="col-12">
            <div className="row mt-4">
                <label className="col-1 col-form-label d-none" htmlFor="searchtags">
                    Search by Tag
                </label>
                <div className="input-group col-12">
                    <input id="searchtags" className="form-control col-12" placeholder="Search by tag"/>
                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary" type="button">Search</button>
                    </div>
                </div>
            </div>
        </div>

        <div className="col-6 row mt-4 ml-1">
            <label className="col-3 col-form-label d-none" htmlFor="filtersearch">
                Filter Results
            </label>
            <div className="input-group">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">
                        <i className="fa fa-filter" aria-hidden="true"></i>
                    </span>
                </div>
                <input id="filtersearch" className="form-control" placeholder="Filter results"/>
            </div>
        </div>
    </div>

export default SnippetSearchBarComponent
