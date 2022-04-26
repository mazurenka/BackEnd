const http = require('http')

let requestsCount = 0

const server = http.createServer( (request, response) => {

    requestsCount++

    switch (request.url) {
        case '/students':
            response.write('names')
            break
        case '/courses':
            response.write('yoyoyo')
            break
        default:
            response.write('not found 404')
    }

    response.write('hey yo!' + requestsCount)
    response.end()
} )

server.listen(3003)