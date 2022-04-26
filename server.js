const http = require('http')

const server = http.createServer( (request, response) => {
    response.write('hey yo!')
    response.end()
} )

server.listen(3003)