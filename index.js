const server = require('http').createServer()
const io = require('socket.io')(server)
io.on('connection', (client) => {
  console.log('connection', client)
  client.on('event', (data) => {
    /* … */
  })
  client.on('disconnect', () => {
    /* … */
    console.log('disconnect', client)
  })
})
server.listen(3000)
