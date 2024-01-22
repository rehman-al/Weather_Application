const path = require('path');
const http = require('http')
const express = require('express');
const requests = require('requests');
const hbs = require('hbs');
const app = express();
const PORT = process.env.PORT || 8080;

// Define the path to the public directory
const publicPath = path.join(__dirname, "public");
const partial_path = path.join(__dirname, "views/partials");

// Serve static files from the public directory
app.use(express.static(publicPath));

// set view engine 
app.set('view engine', ('hbs'))

// register the partials 
hbs.registerPartials(partial_path)


// routing 
app.get(['/', '/home'], (req, res) => {
    res.render("index")

})

app.get('/weather', (req, res) => {
    res.render("weather")
})

// else page 
app.get('/*', (req, res) => {
    res.send('Soory page not found')
})

app.listen(PORT, () => {
    console.log(`Server is listening at http: //localhost:${PORT}`)
})