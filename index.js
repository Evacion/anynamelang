// const { nanoid } = require("nanoid")
// import cryptoRandomString from "crypto-random-string"

// const cryptoRandomString = require ("crypto-random-string")
const express = require("express")
const app = express()
const port = 8000
const http = require('http')
const fs = require('fs')

const { servants, hello } = require("./mymodule")

// const rng = seedrandom(seed)
// const nanoid = customRandom('abcdef', 10, size => {
//     return (new Uint8Array(size)).map(() => 256 * rng())
// })

const weather = require('weather-js')
weather.find({search: 'Davao, Philippines', degreeType: 'C'}, function (err, result) {
    if(err){ console.log(err)}
    else {
        let data = { weatherdavao: eval(JSON.stringify(result, null, 2))}
        // res.render('SOMETHING', data)
    }
})
// console.log(randomString)
// Le Philippines: https://cdn-icons-png.flaticon.com/512/197/197561.png

// app.engine('html', require('ejs').renderFile)
// app.set('view engine', 'html')

app.listen(port, () => { 
    console.log(`Server Connected`)
    console.log(`Port: ${port}`)
    console.log(`Directory: ${__dirname}`) 
})

app.use((req, res, next) => {
    // console.log("\nRequest Made")
    // console.log(`Host: ${req.hostname}`)
    // console.log(`Path: ${req.path}`)
    // console.log(`Method: ${req.method}`)
    next()
})

app.get("/", (req, res) => { 
    res.render('home.ejs', {scaredBtn: "Hello", secretBtn: "Hey. It's me, ya boi, with a reminder"})
    // return res.sendFile(__dirname + "/views/home.html") 
})
app.get("/home", (req, res) => { 
    return res.redirect('/') 
})
app.get("/about", (req, res) => { 
    res.render('about.ejs', {servantData: servants, helloFunction: hello})
})
app.get("/aboutus", (req, res) => { 
    return res.redirect('/about') 
})
app.get("/unique", (req, res) => { 
    res.render('unique.ejs')
    // return res.sendFile(__dirname + "/unique.html") 
})
app.get("/portfolio", (req, res) => { 
    res.render('portfolio.ejs')
    // return res.sendFile(__dirname + "/portfolio.html") 
})
app.get("/navbar.html", (req, res) => { 
    res.render('navbar.ejs')
    // return res.sendFile(__dirname + "/navbar.html") 
})
app.get("/error", (req, res) => {  // THIS SCREWS WITH THE NAVBAR FOR SOME REASON
    res.render('error.ejs')
    // return res.sendFile(__dirname + "/navbar.html") 
})


app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.use('/css', express.static(__dirname + '/node_modules/datatables.net-bs5/css'));
app.use('/assets', express.static(__dirname + '/assets/'));
app.use('/scripts', express.static(__dirname + '/scripts/'));
app.use('/stylesheets', express.static(__dirname + '/stylesheets/'));
app.use(express.static('public'));
app.use((req, res) => { return res.status(404).sendFile(__dirname + '/error.html') })

