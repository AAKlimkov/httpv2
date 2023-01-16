import {create, findAllUser, findId} from "../models/productModels";

// @route GET /api/users
export async function getAllUsers(req, res) {
    try {
        const allUsers = await findAllUser()
        res.writeHead(200, {'Content-Type': 'application/json'})
        res.end(JSON.stringify(allUsers))
    } catch (error) {
        console.log(error);

    }
}

// @route GET /api/user/:id
export async function getUser(req, res, id) {
    try {
        const user = await findId(id)
        if (user) {
            res.writeHead(200, {'Content-Type': 'application/json'})
            res.end(JSON.stringify(user))
        }
        else {
            res.writeHead(400, {'Content-Type': 'application/json'})
            res.end(JSON.stringify({message: 'User not found'}))
        }

    } catch (error) {
        console.log(error);

    }
}

// @route POST /api/user
export async function createUser(req, res) {
    try {
        const user = {
            username: 'Lisa',
            age: 35,
            hobbies: ['reading']
        }
        console.log(user)
        const newUser = create(user)

        res.writeHead(201, {'Content-Type': 'application/json'})
        return res.end(JSON.stringify(newUser))

    } catch (error) {
        console.log(error);

    }
}
