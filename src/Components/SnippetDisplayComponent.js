import React from "react"
import TagComponent from "./TagComponent";

const SnippetDisplayComponent = ({snippet}) =>
    <div>
        {/*Title and Timestamp*/}
        <div className="row col-12">
            <div className="col-8">
                <h5>{snippet.title}</h5>
            </div>
            <div className="col-4 text-secondary">
                <div className=" float-right ">
                    <h6>Published: {snippet.dateCreated}</h6>
                </div>
            </div>
        </div>
        {/*Snippet Description*/}
        <div className="row col-12">
            <p>{snippet.description}</p>
        </div>
        {/*Snippet Content*/}
        <div className="p-3 col-12">
            <pre className="text-wrap">
                {snippet.codeText}
                Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet
                fermentum.
                Donec sed odio operae, eu vulputate felis rhoncus. Praeterea iter est quasdam res
                quas ex communi.
                At nos hinc posthac, sitientis piros Afros. Petierunt uti sibi concilium totius
                Galliae in diem certam indicere.
                Cras mattis iudicium purus sit amet fermentum.
            </pre>
        </div>
        <div className="row col-12">
            {/*Creator*/}
            <div className="col-3">
                <h6>Created By: <a href="#">{snippet.creator}</a></h6>
            </div>
            {/*Tags*/}
            <div className="col-9 text-secondary float-right">
                <div className="float-right">
                    <div className="tagBackground rounded row ">
                        {
                            snippet.tags.map((tag, index) =>
                                <TagComponent tag={tag}/>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>

export default SnippetDisplayComponent
