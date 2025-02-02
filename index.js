 //  import the required packages
const express = require('express')
// create an instance of an express app
const app = express()
const PORT = 8000

const elements = {
    air: {
        name: "air",
        signs: ["aquarius", "gemini", "libra"],
        traits: ["movement", "creativity", "action", "adventure", "exciting", "easily provoked"]
    },
    water: {
        name: "water",
        signs: ["pisces", "cancer", "scorpio"],
        traits: ["private", "mysterious", "pyshic", "charming", "emotional", "sensitive"]
    },
    fire: {
        name: "fire",
        signs: ["aries", "leo", "sagittarius"],
        traits: ["passionate", "strong emotions", "tempermental", "energetic", "accomplished", "interesting"]
    },
    earth: {
        name: "earth",
        signs: ["taurus", "virgo", "capricorn"],
        traits: ["grounded", "helpful", "practical", "realistic", "materialistic", "dependable"]
    }
}

// Set the view engine
app.set('view engine', 'ejs')
//  define express routes???

// home route = localhost:8000/
// HTTP verb = GET    URL pattern = '/'
app.get('/', (req, res) => {
    // console.log('Welcome nighthawks, we have been expecting you🎩')
    // res.send('It works! ha ha, IT WORKS! I FINALLY invent something that works!')
    res.render('index')
})
// home route = localhost:8000/
// HTTP verb = GET    URL pattern = '/air'
app.get('/air', (req, res) => {
    // console.log('Welcome nighthawks, we have been expecting you🎩')
    // res.send('AIR')
    // DATA CHECK
    // res.json(elements.air)
    // TEMPLATE
    res.render('show', {element: elements.air})
})
// home route = localhost:8000/
// HTTP verb = GET    URL pattern = '/water'
app.get('/water', (req, res) => {
    // console.log('Welcome nighthawks, we have been expecting you🎩')
    // res.send('WATER')
    res.render('show', {element: elements.water})
})
// home route = localhost:8000/
// HTTP verb = GET    URL pattern = '/fire'
app.get('/fire', (req, res) => {
    // console.log('Welcome nighthawks, we have been expecting you🎩')
    // res.send('FIRE')
    res.render('show', {element: elements.fire})
})
// home route = localhost:8000/
// HTTP verb = GET    URL pattern = '/earth'
app.get('/earth', (req, res) => {
    // console.log('Welcome nighthawks, we have been expecting you🎩')
    // res.send('EARTH')
    res.render('show', {element: elements.earth})
})

// tell express to listen on a port for incoming http requests
app.listen(PORT, () => {
    console.log(`Welcome to the nest on port ${PORT} nighthawk 🎩`)
})

// const zodiac = ['Air', 'Water', 'Fire', 'Earth'];
// zodiac.forEach(Array ('click') => {
//     console.log(zodiac)
// })