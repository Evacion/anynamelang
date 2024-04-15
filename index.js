// const { nanoid } = require("nanoid")
// import cryptoRandomString from "crypto-random-string"

// const cryptoRandomString = require ("crypto-random-string")
const express = require("express")
const app = express()
const port = 8000
const http = require('http')
const fs = require('fs')

const { servants, hello } = require("./mymodule")
const { aboutData, portfolioData } = require("./data.js")

// const rng = seedrandom(seed)
// const nanoid = customRandom('abcdef', 10, size => {
//     return (new Uint8Array(size)).map(() => 256 * rng())
// })

const weather = require('weather-js')
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
    res.render('about.ejs', {servantData: servants, helloFunction: hello, carouselData: aboutData})
})
app.get("/aboutus", (req, res) => { 
    return res.redirect('/about') 
})
app.get("/unique", (req, res) => { 
    res.render('unique.ejs')
    // return res.sendFile(__dirname + "/unique.html") 
})
app.get("/portfolio", (req, res) => { 
    res.render('portfolio.ejs', {carouselData: portfolioData})
    // return res.sendFile(__dirname + "/portfolio.html") 
})
app.get("/weather", (req, res) => {
    weather.find({search: 'Tokyo', degreeType: 'C'}, function (err, result) {
        if (err){console.log(err)}
        else {
            weatherJP = {data: eval(JSON.stringify(result, null, 2))}
            // console.log(weatherJP)
            weather.find({search: 'Davao, Philippines', degreeType: 'C'}, function (err, result) {
                if (err){console.log(err)}
                else {
                    weatherPH = {data: eval(JSON.stringify(result, null, 2))}
                    // console.log(weatherPH)
                    weather.find({search: 'Dubai', degreeType: 'C'}, function (err, result) {
                        if (err){console.log(err)}
                        else {
                            weatherUAE = {data: eval(JSON.stringify(result, null, 2))}
                            weatherData = {
                                0: weatherJP, 
                                1: weatherPH, 
                                2: weatherUAE,
                            }
                            console.log(`WEATHER DATA HERE BOZO   ${weatherData}`)
                            res.render('weather.ejs', {
                                weatherData: weatherData
                            })
                        }
                    })
                }
            })
        }
    })
    // return res.sendFile(__dirname + "/portfolio.html") 
})
app.get("/navbar.html", (req, res) => { 
    res.render('navbar.ejs')
    // return res.sendFile(__dirname + "/navbar.html") 
})


app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.use('/css', express.static(__dirname + '/node_modules/datatables.net-bs5/css'));
app.use('/assets', express.static(__dirname + '/assets/'));
app.use('/scripts', express.static(__dirname + '/scripts/'));
app.use('/stylesheets', express.static(__dirname + '/stylesheets/'));
app.use(express.static('public'));
app.use((req, res) => { 
    res.status(404).render('error.ejs') 
})

