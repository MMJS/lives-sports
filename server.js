const express  = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const server = app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`)
})
const io = require('socket.io').listen(server)



app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.use(express.static('.'))

const detail = (socket,data)=>{
  io.emit('details','teamdetails')
  socket.emit('details',{data:data})
}

io.on('connection', function (socket) 
{
  
  
  
    socket.on('teamdetails',(teamdetails)=>{
      console.log(teamdetails)
    //  detail(socket,teamdetails)
    io.emit('details',teamdetails)
    })
    

    

})


//     socket.on('username', (data) =>{
//       socket.broadcast.emit('username', data)
//     })
      
//     // Listen for a "newuser" message
//     socket.on('newuser', (data) => {
//       // Transmit a message to everyone except the sender
//       socket.broadcast.emit('newuser', data)
  
//       // The same message, sent to all users - try it!
//       //io.emit('newuser', data)
//       })
       
      
//       // Listen for "chatmsg"
//       //   io.emit to all user
//       socket.on('chatmsg', (data) => {
//           io.emit('chatmsg', data)
//       })
  
  
//   })
  
// // Server is running.
