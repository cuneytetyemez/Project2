require('dotenv').config();
const express = require('express');
const app = express();
const patients = require('./models/patients.js');
const PORT = process.env.PORT
const session = require('express-session');



//SETUP DATABASE
const mongoose = require('mongoose');

// include the method-override package
const methodOverride = require('method-override')

app.use(methodOverride('_method'))

const mongoURI = process.env.MONGODBURI

const db = mongoose.connection;

mongoose.connect(mongoURI, {
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true 
}, () => {
    console.log('database connection checked');

})

db.on('error', (err)=> { console.log('ERROR: ', err)});
db.on('connected', ()=> { console.log('mongo connected')})
db.on('disconnected', ()=> { console.log('mongo disconnected')})




app.use( (req, res, next) => {
    console.log('HELLO, I AM CUSTOM MIDDLEWARE')
    console.log('think: like a bouncer at a club')
    console.log("here is req", req.body)
    
    next() //this sends the request on to the next step in
})


// set up static assets (images/css/client-side JS/etc)
app.use(express.static('public'))

app.use(express.json())

app.use(express.urlencoded({extended: true}))

app.get('/patients', (req, res) => {
    res.render('index.ejs', {
        allPatients: patients
    })
})




//CONTROLLERS
// for every request that start with /fruits 
//i will look on the fruitControllers.
//requiring the patient Controller
const patientController = require('./controllers/patients')
app.use('/patients', patientController);

// const usersControllers = require('./controllers/users')
// app.use('/users',  usersControllers);

// const sessionControllers = require('./controllers/sessions')
// app.use('/sessions', sessionControllers);





//SETTING UP HOMEPAGE ROUTE

app.get('/', (req, res) => {
    res.render('home.ejs', {
        allPatients: patients
    })
})

























app.listen(PORT, () => {
    console.log('listening')
})










