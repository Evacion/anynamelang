
const express = require("express")
const app = express()
const port = 8000
const http = require('http')
const fs = require('fs')

app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.use('/css', express.static(__dirname + '/node_modules/datatables.net-bs5/css'));
app.use('/assets', express.static(__dirname + '/assets/'));
app.use('/scripts', express.static(__dirname + '/scripts/'));
app.use('/stylesheets', express.static(__dirname + '/stylesheets/'));
app.use(express.static('public'));

app.listen(port, () => { 
    console.log(`Server Connected`)
    console.log(`Port: ${port}`)
    console.log(`Directory: ${__dirname}`) 
})

app.get("/", (req, res) => { return res.sendFile(__dirname + "/home.html") })
app.get("/about", (req, res) => { return res.sendFile(__dirname + "/about.html") })
app.get("/unique", (req, res) => { return res.sendFile(__dirname + "/unique.html") })
// app.get("/unique.js", (req, res) => { return res.sendFile(__dirname + "/unique.js") })
app.get("/navbar.html", (req, res) => { return res.sendFile(__dirname + "/navbar.html") })
app.get("*", (req, res) => { return res.sendFile(__dirname + "/error.html") })

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