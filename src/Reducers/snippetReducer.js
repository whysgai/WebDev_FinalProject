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
            tags: 'JavaScript,Output',
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
            tags: 'HTML,CSS,Login',
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
            tags: 'Microsoft,Azure,Authentication',
            shareableURL: "",
            privacy: false,
            recommended: false
        }
    ],
    user: {id:"uid001", username:"somedude"}

}

const snippetReducer = (state = initialState, action = action) => {
    switch(action.type) {
        default:
            return state;
    }
}

export default snippetReducer;
