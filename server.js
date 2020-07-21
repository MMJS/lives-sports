const express  = require('express')
const app = express()
const PORT = process.env.PORT 


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.use(express.static('.'))

// Server is running.
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
})