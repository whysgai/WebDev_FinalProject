import React from "react"
import {Link} from "react-router-dom";
import SnippetSearchBarComponent from "./SnippetSearchBarComponent";
import SnippetSearchListComponent from "./SnippetSearchListComponent";
import TagComponent from "../TagComponent";

const SnippetSearchComponent = ({snippets}) =>
    <div>
        <h2>SnippetSearchHere</h2>
        <SnippetSearchBarComponent/>
        <SnippetSearchListComponent snippets={snippets}/>

        <div class="tagBackground rounded p-3 mb-5">
            <div class="row">
                <div class="col-8">
                    <h5>Title: Logging into MS Azure using Python3</h5>
                </div>
                <div class="col-4 text-secondary">
                    <div class=" float-right ">
                        <h6>Published: 10/24/2020 17:53:22 EST</h6>
                    </div>
                </div>
            </div>
            <div class="p-3">
                <p class="text-wrap">
                    Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet
                    fermentum.
                    Donec sed odio operae, eu vulputate felis rhoncus. Praeterea iter est quasdam res
                    quas ex communi.
                    At nos hinc posthac, sitientis piros Afros. Petierunt uti sibi concilium totius
                    Galliae in diem certam indicere.
                    Cras mattis iudicium purus sit amet fermentum.


                    <div>
                        {/*<xmp style="font-family:Courier;">*/}
                        {/*    import pandas as pd*/}
                        {/*    import numpy as np*/}

                        {/*    df = pd.read_csv("dataset.csv")*/}

                        {/*    df.columns = ["col1", "col2", "col2", "col2", "col2", "col2", "col2", "col2",*/}
                        {/*    "col2", "col2", "col2",]*/}
                        {/*</xmp>*/}
                    </div>

                </p>
            </div>
            <div class="row">

                <div class="col-6">
                    <h6>Created By: <a href="#">alkhalifas</a></h6>
                </div>

                <div class="col-6 text-secondary float-right">
                    <div class="float-right mr-4">
                        <div class="tagBackground rounded row ">
                            {
                                ['Python 3', 'Login', 'Azure'].map((tag, index) =>
                                    <TagComponent tag={tag}/>
                                )
                            }
                            {/*<h5>*/}
                            {/*    <span class="badge badge-primary m-2">*/}
                            {/*         <i class="fas fa-times-circle"></i>*/}
                            {/*        Python3*/}
                            {/*    </span>*/}
                            {/*</h5>*/}
                            {/*<h5>*/}
                            {/*    <span class="badge badge-primary m-2">*/}
                            {/*    <i class="fas fa-times-circle"></i>*/}
                            {/*     Login</span>*/}
                            {/*</h5>*/}
                            {/*<h5>*/}
                            {/*    <span class="badge badge-primary m-2">*/}
                            {/*    <i class="fas fa-times-circle"></i>*/}
                            {/*     Microsoft</span>*/}
                            {/*</h5>*/}
                            {/*<h5>*/}
                            {/*    <span class="badge badge-primary m-2 ">*/}
                            {/*        <i class="fas fa-times-circle"></i>*/}
                            {/*         Azure*/}
                            {/*    </span>*/}
                            {/*</h5>*/}
                        </div>
                    </div>

                </div>
            </div>

        </div>

    </div>

export default SnippetSearchComponent
