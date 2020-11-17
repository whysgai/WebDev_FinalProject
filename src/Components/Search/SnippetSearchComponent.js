import SnippetSearchBarComponent from "./SnippetSearchBarComponent";
import SnippetSearchListComponent from "./SnippetSearchListComponent";

const SnippetSearchComponent = ({snippets, gists, getGistsForUser, users, findAllUsers}) =>
    <div>
        <h2>SnippetSearchHere</h2>
        <button onClick={getGistsForUser}>Get User Gists</button>
        <button onClick={() => console.log(gists)}>Log Gists</button>
            <button onClick={() => findAllUsers().then(console.log(users))}>Log Users</button>

            <SnippetSearchBarComponent/>
        <SnippetSearchListComponent snippets={snippets}/>
    </div>

export default SnippetSearchComponent
