const express = require('express');
const app = express();
const db = require('./db')

const bodyParser = require('body-parser')
app.use(bodyParser.json())



app.get('/', (req, res) => {
    res.send("Hello welcome to my Hptel... Aditya's Cafe")
})



const person = require('./Routes/personRoutes');
const menu = require('./Routes/menuRoutes');
const hotel = require('./Routes/hotelRoutes');

//middelware
app.use('/person', person)
app.use('/menuItem', menu)
app.use('/hotel', hotel);

app.listen(3000, () => {
    console.log("Server is Started");
})