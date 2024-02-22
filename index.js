import { getServants } from "unique.js";

const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
    console.log(req.url)
    res.setHeader("Content-Type", "text/html")
    
    let myurl = ""
    if (req.url == "/") { 
        myurl += 'index.html' 
    } else if (req.url == "/about") { 
        myurl += 'about.html' 
    } else if (req.url == "/unique") { 
        myurl += 'unique.html' 
    } else { 
        myurl += 'error.html' 
    }

    fs.readFile(myurl, (err, data) => {
        if (err) { console.log(err) } else {
            res.write(data)
            res.end()
        }
    })
})

server.listen(8000, 'localhost', () => {
    console.log("[NAVI]: Hey, Listen.")    
})