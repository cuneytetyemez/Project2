const express = require('express');
const app = express();
const patients = require('./models/patients.js');
const PORT = 3333;

const methodOverride = require('method-override')

app.use(methodOverride('_method'))

app.use(express.static('public'))

app.use(express.json())

app.use(express.urlencoded({extended: true}))

//SETTING UP HOME ROUTE

app.get('/', (req, res) => {
    res.render('home.ejs', {
        allPatients: patients
    })
})

























app.listen(PORT, () => {
    console.log('listening')
})










