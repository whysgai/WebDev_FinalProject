import {
    CREATE_SNIPPET, DELETE_SNIPPET,
    FIND_ALL_PUBLIC_SNIPPETS,
    FIND_ALL_SNIPPETS
} from '../Actions/SnippetActions'

const initialState = {
    snippets: [
        {
            id: 1,
            gistId: "1a",
            creator: "somedude",
            dateCreated: "Yesterday",
            lastModified: "Today",
            title: "LocalTestSnippet1",
            description: "A locally saved snippet to demo",
            codeText: "console.log('Hello, world!')",
            tags: ['JavaScript', 'Output'],
            shareableURL: "",
            privacy: false,
            recommended: false
        },
        {
            id: 2,
            gistId: "2b",
            creator: "somedude",
            dateCreated: "Earlier",
            lastModified: "A while ago",
            title: "LocalTestSnippet2",
            description: "A locally saved snippet to demo",
            codeText: "console.log('Hello, world!!')",
            tags: ['HTML', 'CSS', 'Login'],
            shareableURL: "",
            privacy: false,
            recommended: false
        },
        {
            id: 3,
            gistId: "3c",
            creator: "anotherdude",
            dateCreated: "Today",
            lastModified: "Today",
            title: "LocalTestSnippet3",
            description: "A locally saved snippet to demo",
            codeText: "console.log('Hello, world!!!')",
            tags: ['Microsoft', 'Azure', 'Authentication'],
            shareableURL: "",
            privacy: false,
            recommended: false
        }
    ],
    snippet: {
            id: 1,
            gistId: "1a",
            creator: "somedude",
            dateCreated: "Yesterday",
            lastModified: "Today",
            title: "LocalTestSnippet0",
            description: "A locally saved snippet to demo",
            codeText: "console.log('Hello, world.')",
            tags: ['JavaScript', 'Output'],
            shareableURL: "",
            privacy: false,
            recommended: false
        }

}

const snippetReducer = (state = initialState, action = action) => {
    switch(action.type) {
        case CREATE_SNIPPET:
            return {
                snippets: [...state.snippets, action.snippet]
            }
        case DELETE_SNIPPET:
            return {
                snippets: state.snippets.filter(snippet => snippet.id !== action.snippet.id)
            }
        case FIND_ALL_SNIPPETS:
            return {
                snippets: [action.snippets]
            }
        case FIND_ALL_PUBLIC_SNIPPETS:
            return {
                snippets: [action.snippets]
            }
        default:
            return state;
    }
}

export default snippetReducer;
