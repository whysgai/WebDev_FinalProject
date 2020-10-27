# WebDev_FinalProject

#### Link to Project Description: https://docs.google.com/document/d/1HNgkga5b5QaIDwB88s8lOXTS17sbORyj_jSKOKZuZdk/edit

### React app name: codesaver

### State the problem you are trying to solve
The use of code-based applications within the workplace has seen a surge over the recent years allowing for increased efficiency amongst employees. This surge has created a gap when it comes to the communication of best practices and information sharing in the form of code-snippets and scripts. Keeping track of small, infrequently-used but efficient and important elements of code is difficult and often left to trawling through browser history or old projects. Current platforms are either cost prohibitive or lacking in necessary functionality a company may require. 
### State the overall strategy of how you intend to solve the problem
Utilizing the previously-existing API from GitHub’s Gist, we plan to extend the functionality to implement critically lacking features with a user-friendly and responsive front-end platform. Specifically, we plan to introduce features such as tagging and searching of code snippets, as well as the other saves, shares, and likes typically expected of a social platform. We would implement this through a combination of local and remote storage. Our proposed product would include two types of end users: developers and administrators that would mirror the hierarchical structure of a workplace. Managers/moderators, for instance, can display best practice scripts and control access to sensitive code, while standard developers can both consume and produce code snippets for their individual and team-level use. Both users share the goal of making sure that important, but often obscure and specific scripts and snippets can be saved and searched for when the need arises. Anonymous users would be able to search and view code snippets marked as public, but could not produce their own or view private snippets.
 
### One of the main requirements is to work with data available from some public, free, Web API. Provide a brief description of the Web API you intend to use
We will be using Github’s Gists API provided here. This API will provide the storage and core functionality that our product’s GUI will interact with. The API allows for full REST interactions allowing for data to be both retrieved and stored. Additional features will be implemented using a relational database. 

