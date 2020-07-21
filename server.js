const express  = require('express')
const app = express()
const PORT = process.env.PORT || 3000



app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.use(express.static('.'))

// Server is running.
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
})