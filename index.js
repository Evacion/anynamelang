const express = require("express")
const app = express()
const port = 8000

app.listen(port, () => (
    console.log(`Server Conencted to Port ${port}`)
))

app.get('/', (req, res) => (
    res.send(`
        <div>
            Ywa Ako Mid
        </div>
    `),

    console.log("Request Received")
))