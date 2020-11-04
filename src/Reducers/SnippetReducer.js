const initialState = {
    widgets: [
        {
            id: 1,
            gistId: "1a",
            creator: "somedude",
            dateCreated: "Yesterday",
            lastModified: "Today",
            title: "LocalTestSnippet",
            description: "A locally saved snippet to demo",
            codeText: "console.log('Hello, world!')",
            tags: ['JavaScript', 'Output'],
            shareableURL: "",
            privacy: false,
            recommended: false
        }
    ],

}

const snippetReducer = (state = initialState, action = action) => {
    switch(action.type) {
        default:
            return state;
    }
}

export default snippetReducer;