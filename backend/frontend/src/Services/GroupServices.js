export class GroupServices {
    url = 'http://localhost:8000/groups'

    getAllGroups() {
        return fetch(this.url)
            .then(value => value.json())
            .then(value => {
                return value
            })
    }

    CreateGroup(inputName, inputDescription) {
        return fetch(this.url, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({name: inputName, description: inputDescription})
        })
    }

    EditGroup(id, inputName, inputDescription) {
        return fetch(`${this.url}/${id}`, {
            method: 'PUT',
            mode: 'cors',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({name: inputName, description: inputDescription})
        })
    }

    DeleteGroup(id) {
        return fetch(`${this.url}/${id}`, {
            method: 'DELETE'
        })
    }
}