const express = require("express")
const app = express()
const port = 8000
const http = require('http')
const fs = require('fs')

const { servants, hello } = require("./mymodule")
const { aboutData, portfolioData } = require("./data.js")
const weather = require('weather-js')

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

function weatherFindRecursive(res, arr, prevResult, dataIndex) {
    weather.find({search: arr[0], degreeType: 'C'}, function (err, result) {
        if (err) { console.log(`THIS IS THE ERROR BOZO: ${err}`) }
        else {
            result = [{ data: eval(JSON.stringify(result, null, 2)) }]
            mergedResults = prevResult.concat(result) 
            arr.shift()
            if (arr.length > 0) { weatherFindRecursive(res, arr, mergedResults, dataIndex) } 
            else { 
                res.render('weather.ejs', { weatherData: mergedResults, dataIndex: dataIndex}) 
            }
        }
    })
}

function weatherFind(res, searchString, dataIndex, searchTerms) {
    weather.find({search: searchString, degreeType: 'C'}, function (err, result) {
        if (err) { console.log(`THIS IS THE ERROR BOZO: ${err}`) }
        else {
            result = [{ data: eval(JSON.stringify(result, null, 2)) }]
            console.log(`WHYYYYYYYYYYYYYYYYYYY =====> ${result[0].data[0].location.name}`)
            res.render('weather.ejs', { weatherData: result[0].data, dataIndex: dataIndex, searchTerms: searchTerms})
        }
    })
}

app.get("/weather", (req, res) => {
    const searchTerms = ["Tokyo", "Davao", "Dubai", "Brazil", "Baghdad", "Somalia", "Orleans", "Rome", "Hot Singles"]
    console.log("\nREFRESHED WEATHER PAGE LETSGOOOO")
    searchTerms.sort()

    const dataIndex = req.query.dataIndex || 0;
    const searchTerm = req.query.searchTerm || searchTerms[0]
    weatherFind(res, searchTerm, dataIndex, searchTerms);
})
app.get("/navbar", (req, res) => { 
    res.render('navbar.ejs')
    // return res.sendFile(__dirname + "/navbar.html") 
})


app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.use('/css', express.static(__dirname + '/node_modules/datatables.net-bs5/css'));
app.use('/assets', express.static(__dirname + '/assets/'));
app.use('/partials', express.static(__dirname + '/partials/'));
app.use('/scripts', express.static(__dirname + '/scripts/'));
app.use('/stylesheets', express.static(__dirname + '/stylesheets/'));
app.use(express.static('public'));
app.use((req, res) => { 
    res.status(404).render('error.ejs') 
})

