// const username = "group3person"
// const password = "nicsalehwill3"

const gistId = "3ca80de89acfaac051414ac0c308359b"

const headers = {
    "Authorization" : `Token 70f143af3d540e77de91e721e5c4e8960a181663`
}

export const getGistsForUser = () =>
    fetch("https://api.github.com/gists",
          {"method":"GET",
          "headers": headers})
        .then(response => response.json())

export const createGistForUser = () =>
    fetch("https://api.github.com/gists", {
            method: "POST",
            body: JSON.stringify( {
                "description": "Hello World Examples",
                "public": true,
                "files": {
                    "hello_world.rb": {
                        "content": "class HelloWorld\n   def initialize(name)\n      @name = name.capitalize\n   end\n   def sayHi\n      puts \"Hello !\"\n   end\nend\n\nhello = HelloWorld.new(\"World\")\nhello.sayHi"
                    },
                    "hello_world.py": {
                        "content": "class HelloWorld:\n\n    def __init__(self, name):\n        self.name = name.capitalize()\n       \n    def sayHi(self):\n        print \"Hello \" + self.name + \"!\"\n\nhello = HelloWorld(\"world\")\nhello.sayHi()"
                    },
                    "hello_world_ruby.txt": {
                        "content": "Run `ruby hello_world.rb` to print Hello World"
                    },
                    "hello_world_python.txt": {
                        "content": "Run `python hello_world.py` to print Hello World"
                    }
                }
            }),
            headers: headers})
        .then(response => response.json())

export const deleteGist = (id) =>
    fetch(`https://api.github.com/gists/${id}`,
        {method:"DELETE",
            headers: headers
        })

export const getGistById = () =>
    fetch(`https://api.github.com/gists/${gistId}`,
        {"method":"GET",
            "headers": headers})
        .then(response => response.json())

export const getGistFile = (fileUrl) =>
    fetch(`${fileUrl}`,
        // {"method":"GET",
        //     "headers": headers}
            )
        .then(response => response.text())


export default {getGistsForUser, getGistById, getGistFile, createGistForUser, deleteGist}
