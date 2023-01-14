import {userInt, users} from '../data/users'
import {v4 as uuid} from 'uuid';
import {writeDataToFile} from '../util'

export function findAllUser() {
    return new Promise((resolve, rej) => {
        resolve(users)
    })
}

export function findId(id) {
    return new Promise((resolve, rej) => {
        const user = users.find(user => user.id === id)
        resolve(user)
    })
}

export function create(userToCreate) {
    return new Promise((resolve, rej) => {
        const newUser: userInt = {id: uuid(), ...userToCreate}
        users.push(newUser)
        writeDataToFile('./data/users.ts', users)
        resolve(newUser)
    })
}

