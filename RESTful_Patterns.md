# RESTful services listing URL patterns:

[GitHub Gist API Documentation](https://docs.github.com/en/free-pro-team@latest/rest/reference/gists)

* Create gists: POST https://api.github.com/gists
* Read gist: GET https://api.github.com/gists/{gist_id}
* Read gists for user: GET https://api.github.com/users/{username}/gists
* Update gist: PATCH (not PUT) https://api.github.com/gists/{gist_id}
* Delete gists: DELETE https://api.github.com/gists/{gist_id}
