export class UserServices {
    url = 'http://localhost:8000/users'

    getAllUsers() {
        return fetch(this.url)
            .then(value => value.json())
            .then(value => {
                return value
            })
    }

    CreateUser(inputName, inputAge, inputEmail, chosenGroup) {
        return fetch(this.url, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({name: inputName, age: inputAge, email: inputEmail, group: chosenGroup})
        })
    }

    EditUser(id, inputName, inputAge, inputEmail, chosenGroup) {
        return fetch(`${this.url}/${id}`, {
            method: 'PUT',
            mode: 'cors',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({name: inputName, age: inputAge, email: inputEmail, group: chosenGroup})
        })
    }

    DeleteUser(id) {
        return fetch(`${this.url}/${id}`, {
            method: 'DELETE'
        })
    }
}