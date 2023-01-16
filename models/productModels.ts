import {userInt} from '../users'
import {v4 as uuid} from 'uuid';
import {writeDataToFile,readData} from '../util'



export function findAllUser() {
    return new Promise(async (resolve, rej) => {
        const users: Array<userInt> = JSON.parse(await readData('./data/users.tson') || '')
        resolve(users)
    })
}

export function findId(id) {
    return new Promise(async (resolve, rej) => {
        const users: Array<userInt> = JSON.parse(await readData('./data/users.tson') || '')
        const user = users.find(user => user.id === id)
        resolve(user)
    })
}

export function create(userToCreate) {
    return new Promise(async (resolve, rej) => {
        const newUser: userInt = {id: uuid(), ...userToCreate}
        const users: Array<userInt> = JSON.parse(await readData('./data/users.tson') || '')
        users.push(newUser)

        let userUpd = JSON.stringify(users)
        await writeDataToFile('./data/users.tson', userUpd)
        resolve(newUser)
    })
}

