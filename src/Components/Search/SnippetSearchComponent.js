import SnippetSearchBarComponent from "./SnippetSearchBarComponent";
import SnippetSearchListComponent from "./SnippetSearchListComponent";

const SnippetSearchComponent = ({snippets, gists, getGistsForUser}) =>
    <div>
        <h2>SnippetSearchHere</h2>
        <button onClick={getGistsForUser}>Get User Gists</button>
        <button onClick={() => console.log(gists)}>Log Gists</button>
        <SnippetSearchBarComponent/>
        <SnippetSearchListComponent snippets={snippets}/>
    </div>

export default SnippetSearchComponent
