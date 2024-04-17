const express = require("express")
const app = express()
const port = 8000
const http = require('http')
const fs = require('fs')

const { servants, hello } = require("./mymodule")
const { aboutData, portfolioData } = require("./data.js")
const weather = require('weather-js')


function weatherFind(res, searchString, dataIndex, searchTerms) {
    weather.find({search: searchString, degreeType: 'C'}, function (err, result) {
        if (err) {  console.log(`THIS IS THE ERROR BOZO: ${err}`); return; }
        res.render('weather.ejs', { 
            weatherData: eval(JSON.stringify(result, null, 2)), 
            dataIndex: dataIndex, 
            searchTerms: searchTerms, 
        })
    })
}


app.listen(port, () => { 
    console.log(`Server Connected`)
    console.log(`Port: ${port}`)
    console.log(`Directory: ${__dirname}`) 
})


app.use((req, res, next) => {
    next()
})
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.use('/css', express.static(__dirname + '/node_modules/datatables.net-bs5/css'));
app.use('/assets', express.static(__dirname + '/assets/'));
app.use('/partials', express.static(__dirname + '/partials/'));
app.use('/scripts', express.static(__dirname + '/scripts/'));
app.use('/stylesheets', express.static(__dirname + '/stylesheets/'));
app.use(express.static('public'));


app.get("/", (req, res) => { 
    res.render('home.ejs', {scaredBtn: "Hello", secretBtn: "Hey. It's me, ya boi, with a reminder"})
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
})
app.get("/portfolio", (req, res) => { 
    res.render('portfolio.ejs', {carouselData: portfolioData})
})
app.get("/weather", (req, res) => {
    const searchTerms = ["Tokyo", "Davao", "Dubai", "Brazil", "Baghdad", "Somalia", "Orleans", "Rome", "Hot Singles", "Gaming", "Korea", "India"].sort()
    weatherFind(res, req.query.searchTerm || searchTerms[0], req.query.dataIndex || 0, searchTerms);
})
app.get("/navbar", (req, res) => { 
    res.render('navbar.ejs')
})

// This must be at the bottom
app.use((req, res) => { 
    res.status(404).render('error.ejs') 
})