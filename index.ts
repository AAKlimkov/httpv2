import http from 'http'
import {createUser, getAllUsers, getUser} from './controllers/productController'

const server = http.createServer((req, res) => {

    if (req.url === '/api/users' && req.method === 'GET') {
        getAllUsers(req, res)
    }
    else if (req.url?.match(/\/api\/users\/([0-9]+)/) && req.method === 'GET') {
        const id = req.url.split('/')[3]
        getUser(req, res, id)
    }
    else if (req.url === '/api/users' && req.method === 'POST') {
        createUser(req, res)
    }
    else {

        res.writeHead(404, {'Content-Type': 'application/json'})
        res.end(JSON.stringify({message: 'Route not found'}))
    }

})

const PORT = process.env.PORT || 5000

server.listen(PORT, () => console.log(`Server running on port ${PORT}`))

