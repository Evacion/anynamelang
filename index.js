
const express = require("express")
const app = express("./unique.js")
const port = 8000
const http = require('http')
const fs = require('fs')

app.listen(port, () => { console.log(`Server Conencted to Port ${port}`) })
app.get("/", (req, res) => { return res.sendFile(__dirname + "/index.html") })
app.get("/error", (req, res) => { return res.sendFile(__dirname + "/error.html") })
app.get("/about", (req, res) => { return res.sendFile(__dirname + "/about.html") })
app.get("/unique", (req, res) => { return res.sendFile(__dirname + "/unique.html") })
app.get("/unique.js", (req, res) => { return res.sendFile(__dirname + "/unique.js") })

// const server = http.createServer((req, res) => {
//     console.log(req.url)
//     res.setHeader("Content-Type", "text/html")
    
//     let myurl = ""
//     if (req.url == "/") { 
//         myurl += 'index.html' 
//     } else if (req.url == "/about") { 
//         myurl += 'about.html' 
//     } else if (req.url == "/unique") { 
//         myurl += 'unique.html' 
//     } else { 
//         myurl += 'error.html' 
//     }

//     fs.readFile(myurl, (err, data) => {
//         if (err) { console.log(err) } else {
//             res.write(data)
//             res.end()
//         }
//     })
// })

// server.listen(8000, 'localhost', () => {
//     console.log("[NAVI]: Hey, Listen.")    
// })